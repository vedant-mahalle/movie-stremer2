// app/api/stream/route.ts (for App Router)
// OR
// pages/api/stream.ts (for Pages Router)
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { magnet } = await req.json();

    // Example: process magnet and return a streamable URL
    console.log("Received magnet:", magnet);

    // Example: respond with a video stream URL (can be same magnet if handled in frontend)
    return NextResponse.json({ streamUrl: magnet });
  } catch (error) {
    console.error("Error in stream handler:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
