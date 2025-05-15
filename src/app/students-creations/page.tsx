// src/app/students-creations/page.tsx
import Link from "next/link";
import { pdfs, interview_pdfs } from "./db/pdfs";

export default function StudentsCreationsPage() {
  return (
    <div className="pr-8 pl-8 pb-8 pt-20 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Postere digitale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.map((pdf) => (
          <Link
            key={pdf.id}
            href={pdf.src}
            className="block bg-white rounded shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={pdf.poster}
              alt={pdf.title}
              className="w-full h-50 object-cover"
            />
          </Link>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-6 pt-20">Interviuri digitale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interview_pdfs.map((pdf) => (
          <Link
            key={pdf.id}
            href={pdf.src}
            className="block bg-white rounded shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={pdf.poster}
              alt={pdf.title}
              className="w-full h-50 object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
