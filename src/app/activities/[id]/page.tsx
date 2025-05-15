import { notFound } from "next/navigation";
import { slideshows, SlideshowMeta } from "../db/slideshows";
import { Slideshow } from "@/components/slideshow/slide-show";

export function generateStaticParams() {
  return slideshows.map((s) => ({ id: s.id }));
}

export default async function SlideshowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const show: SlideshowMeta | undefined = slideshows.find((s) => s.id === id);
  if (!show) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1">
        <Slideshow images={show.images} />
      </div>
    </div>
  );
}
