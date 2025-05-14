"use client";
import React from "react";
import { videos } from "../db/videos";
const page = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 pl-8 pr-8 pb-8 pt-20">
      <h2 className="text-3xl font-bold mb-6">Galerie Video</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((v) => (
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
            {/* <div className="p-4">
              <h3 className="font-medium">{v.title}</h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
