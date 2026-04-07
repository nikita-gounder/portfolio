"use client";

import { useState } from "react";

export default function ImageCarousel({
  images,
  alt,
  layout = "carousel",
}: {
  images: string[];
  alt: string;
  layout?: "carousel" | "side-by-side";
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  if (layout === "side-by-side") {
    return (
      <div className="flex gap-1 w-full overflow-x-auto h-64">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="h-full w-auto object-cover flex-shrink-0 rounded-sm"
          />
        ))}
      </div>
    );
  }

  if (images.length === 1) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={images[0]} alt={alt} className="w-full h-44 object-cover" />
    );
  }

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className="relative w-full h-44 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={`${alt} ${index + 1}`}
        className="w-full h-full object-cover transition-opacity duration-200"
      />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white w-7 h-7 flex items-center justify-center transition-colors"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white w-7 h-7 flex items-center justify-center transition-colors"
        aria-label="Next image"
      >
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setIndex(i); }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
