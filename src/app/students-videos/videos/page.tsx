"use client";
import React from "react";
import { places_videos } from "../db/places-videos";
import { interview_videos } from "../db/interview-videos";
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 pl-8 pr-8 pb-8 pt-20">
      {/* Videos with places */}
      <h2 className="text-3xl font-bold mb-6">Locuri Memorabile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">
        {places_videos.map((v) => (
          <div
            key={v.id}
            className="bg-white rounded shadow overflow-hidden z-10"
          >
            <video
              poster={v.poster}
              controls
              className="w-full h-50 object-cover"
              src={v.src}
            />
          </div>
        ))}
      </div>

      {/* Videos with interviews */}
      <h2 className="text-3xl font-bold mb-6 pt-10">Interviuri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {interview_videos.map((v) => (
          <div
            key={v.id}
            className="bg-white rounded shadow overflow-hidden z-10"
          >
            <video
              poster={v.poster}
              controls
              className="w-full h-50 object-cover"
              src={v.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
