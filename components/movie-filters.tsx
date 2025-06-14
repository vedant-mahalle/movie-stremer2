"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War",
]

const YEARS = Array.from({ length: 50 }, (_, i) => 
  (new Date().getFullYear() - i).toString()
)

interface MovieFiltersProps {
  onGenreChange?: (genre: string) => void
  onYearChange?: (year: string) => void
}

export function MovieFilters({ onGenreChange, onYearChange }: MovieFiltersProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")

  const handleGenreChange = (value: string) => {
    setSelectedGenre(value)
    onGenreChange?.(value === "all" ? "" : value)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    onYearChange?.(value === "all" ? "" : value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select value={selectedGenre} onValueChange={handleGenreChange}>
            <SelectTrigger id="genre">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {GENRES.map((genre) => (
                <SelectItem key={genre} value={genre.toLowerCase()}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Select value={selectedYear} onValueChange={handleYearChange}>
            <SelectTrigger id="year">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {YEARS.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setSelectedGenre("all")
            setSelectedYear("all")
            onGenreChange?.("")
            onYearChange?.("")
          }}
        >
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  )
}
