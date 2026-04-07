"use client";

import { useState } from "react";

function Slide({ slide, alt }: { slide: string | string[]; alt: string }) {
  if (typeof slide === "string") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={slide} alt={alt} className="w-full h-full object-cover" />
    );
  }
  return (
    <div className="flex gap-1 h-full w-full overflow-x-auto">
      {slide.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          className="h-full w-auto object-cover flex-shrink-0"
        />
      ))}
    </div>
  );
}

export default function ImageCarousel({
  slides,
  alt,
}: {
  slides: (string | string[])[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  if (slides.length === 1) {
    return (
      <div className="w-full h-56 overflow-hidden">
        <Slide slide={slides[0]} alt={alt} />
      </div>
    );
  }

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div className="relative w-full h-56 overflow-hidden">
      <Slide slide={slides[index]} alt={alt} />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white w-7 h-7 flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white w-7 h-7 flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setIndex(i); }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
