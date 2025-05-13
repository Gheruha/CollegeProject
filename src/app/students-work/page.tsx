"use client";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20 filter brightness-50 contrast-125 pointer-events-none"
        poster="/posters/poster1.png"
        muted
        autoPlay
        loop
        playsInline
        src="/videos/hero.mov"
      />
      <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-4xl font-medium text-white p-4 text-center">
        Vizionează creațiile elevilor
      </h1>
      <Link href={"students-work/videos"}>
        <button className="relative z-50 mt-8 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full">
          <Play size={48} />
        </button>
      </Link>
    </section>
  );
}
