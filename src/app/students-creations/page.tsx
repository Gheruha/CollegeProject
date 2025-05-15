// src/app/students-creations/page.tsx
import Link from "next/link";
import { pdfs, interview_pdfs } from "./db/pdfs";
import { books } from "./db/books";

export default function StudentsCreationsPage() {
  return (
    <div className="pr-8 pl-8 pb-8 pt-20 bg-gray-50 min-h-screen">
      {/* Books */}
      <h1 className="text-3xl font-bold mb-6">Galerie Creații</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/students-creations/${book.id}`}
            className="block bg-white rounded shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={book.thumbnail}
              alt={book.id}
              className="w-full h-50 object-cover"
            />
          </Link>
        ))}
      </div>
      {/* Digital Posters */}
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

      {/* Digital interviews */}
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
