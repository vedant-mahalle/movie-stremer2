// app/video/WebtorPlayerWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import WebtorPlayer without SSR
const WebtorPlayer = dynamic(() => import("./WebtorPlayer"), {
  ssr: false,
});

export default function WebtorPlayerWrapper() {
  return <WebtorPlayer />;
}
