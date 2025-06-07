// app/video/page.tsx

import { Suspense } from "react";
import WebtorPlayerWrapper from "./WebtorPlayerWrapper";

export default function VideoPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading player...</div>}>
        <WebtorPlayerWrapper />
      </Suspense>
    </div>
  );
}
