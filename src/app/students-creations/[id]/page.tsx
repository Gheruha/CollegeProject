// src/app/students-creations/[id]/page.tsx
import { notFound } from "next/navigation";
import { books, BookMeta } from "../db/books";
import { JSX } from "react";

export function generateStaticParams() {
  return books.map((b) => ({ id: b.id }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
  const { id } = await params;
  const book: BookMeta | undefined = books.find((b) => b.id === id);
  if (!book) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1">
        <iframe
          src={book.embedUrl}
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}
