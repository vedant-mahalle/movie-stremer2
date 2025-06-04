// app/video/page.tsx
"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    webtor: any[];
  }
}

export default function VideoPage() {
  const searchParams = useSearchParams();
  const magnet = searchParams?.get("magnet");

  useEffect(() => {
    if (magnet) {
      window.webtor = window.webtor || [];
      window.webtor.push({
        id: 'player',
        magnet: magnet,
        poster: 'https://via.placeholder.com/150/0000FF/808080',
        subtitles: [
          {
            srclang: 'en',
            label: 'test',
            src: 'https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt',
            default: true,
          }
        ],
        lang: 'en',
      });

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js';
      script.charset = 'utf-8'; 
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Optional: Handle case where magnet is not provided, e.g., redirect or display a message.
      // For now, let's just log it.
      console.log("No magnet URI provided to VideoPage.");
    }
  }, [magnet]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {!magnet ? (
        <p>No magnet URI provided.</p>
      ) : (
        <div id="player" className="webtor" />
      )}
    </div>
  );
}