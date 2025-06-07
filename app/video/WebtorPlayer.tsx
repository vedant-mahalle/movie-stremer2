// app/video/WebtorPlayer.tsx
"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function WebtorPlayer() {
  const searchParams = useSearchParams();
  const magnet = searchParams.get("magnet");
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!magnet || typeof window === "undefined") return;

    window.webtor = window.webtor || [];
    window.webtor.push({ id: "player", magnet, lang: "en" });

    if (!document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      window.webtor = [];
    };
  }, [magnet]);

  if (!magnet)
    return (
      <p
        style={{
          color: "#fff",
          height: "100vh",
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          fontSize: "1.5rem",
        }}
      >
        No magnet link provided.
      </p>
    );

  return (
    <>
      <style>{`
        html, body, #__next {
          margin: 0; padding: 0; height: 100%;
          background-color: #000;
          overflow: hidden;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <div
          id="player"
          className="webtor"
          style={{
            width: "80vw",
            height: "80vh",
            maxWidth: "1200px",
            maxHeight: "675px",
            backgroundColor: "#000",
          }}
        />
      </div>
    </>
  );
}
