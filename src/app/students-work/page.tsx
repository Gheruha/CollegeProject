"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

// your list of videos—could come from a JSON or API instead
const videos = [
  {
    id: "video1",
    title: "Proiect 1",
    src: "/videos/video1.mov",
    poster: "/posters/poster1.png",
  },
];

export default function Page() {
  const [showGallery, setShowGallery] = useState(false);

  if (showGallery) {
    // === GALLERY VIEW ===
    return (
      <div className="min-h-screen bg-gray-100 pl-8 pr-8 pb-8 pt-20 z-50">
        <h2 className="text-3xl font-bold mb-6">Galerie Video</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v.id}
              className="bg-white rounded shadow overflow-hidden z-50"
            >
              <video
                poster={v.poster}
                controls
                className="w-full h-40 object-cover"
                src={v.src}
              />
              <div className="p-4">
                <h3 className="font-medium">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // === HERO VIEW ===
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20 filter brightness-50 contrast-125 pointer-events-none"
        poster="/posters/poster1.png"
        muted
        autoPlay
        loop
        playsInline
        src="/videos/video1.mov"
      />
      <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-4xl font-medium text-white p-4 text-center">
        Vizionează creațiile elevilor
      </h1>
      <button
        onClick={() => setShowGallery(true)}
        className="relative z-50 mt-8 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full"
      >
        <Play size={48} />
      </button>
    </section>
  );
}
