import { notFound } from "next/navigation";
import { books, BookMeta } from "../db/books";

interface Props {
  params: { id: string };
}

export function generateStaticParams(): { id: string }[] {
  return books.map((b) => ({ id: b.id }));
}

export default function BookPage({ params: { id } }: Props) {
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
