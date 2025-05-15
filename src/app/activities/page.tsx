import Link from "next/link";
import { slideshows } from "./db/slideshows";
import Image from "next/image";

export default function StudentsCreationsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 pt-20">
        Activități extracurriculare
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slideshows.map((show) => (
          <Link
            key={show.id}
            href={`/activities/${show.id}`}
            className="block bg-white rounded shadow hover:shadow-lg overflow-hidden"
          >
            <Image
              width={400}
              height={192}
              src={show.images[0]}
              alt={show.id}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{show.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
