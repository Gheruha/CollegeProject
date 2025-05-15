export interface SlideshowMeta {
  id: string;
  title: string;
  images: string[];
}

export const slideshows: SlideshowMeta[] = [
  {
    id: "activity1",
    title: "Manifestare cultural-artistică: Inimi tricolore",
    images: ["/photos/a1.png", "/photos/a2.png", "/photos/a3.png"],
  },
  {
    id: "activity2",
    title: "Ziua națională a româniei - 1 Decembrie",
    images: ["/photos/a6.png", "/photos/a5.png", "/photos/a4.png"],
  },
  {
    id: "activity3",
    title: "Careul dedicat începerii anului de studii  2024-2025",
    images: [
      "/photos/a9.png",
      "/photos/a7.png",
      "/photos/a8.png",
      "/photos/a10.png",
    ],
  },
];
