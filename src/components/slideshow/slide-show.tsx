"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideshowProps {
  images: string[];
}

export function Slideshow({ images }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-full bg-black">
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-10"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="relative w-full h-full">
        <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-10"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
