"use client";
import React from "react";
import { Play } from 'lucide-react';

const page = () => {
  return (
    <section className="h-[100vh] w-full shrink-0 flex flex-col items-center justify-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20 filter brightness-50 contrast-125"
        muted
        autoPlay
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={`/videos/video1.mov`} />
      </video>
      <h1 className="text-4xl lg:text-6xl  md:text-4xl sm:text-6xl font-medium text-white p-4">
        Vizionează creațiile elevilor
      </h1>
      <br />
      <button className="relative z-50 transparent-button rounded-full p-4">
        <Play size={48}/>
      </button>
    </section>
  );
};

export default page;
