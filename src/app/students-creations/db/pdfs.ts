export interface PdfMeta {
  id: string;
  title: string;
  src: string;
  poster: string;
}

export interface interviewMeta {
    id: string;
    title: string;
    src: string;
    poster: string;
  }
  

export const pdfs: PdfMeta[] = [
  {
    id: "Prezentare",
    title: "Prezenare",
    src: "/pdfs/presentation1.pdf",
    poster: "/posters/pposter1.png",
  },
  {
    id: "Prezentare2",
    title: "Prezenare",
    src: "/pdfs/presentation2.pdf",
    poster: "/posters/pposter2.png",
  },
  {
    id: "Prezentare3",
    title: "Prezenare",
    src: "/pdfs/presentation3.pdf",
    poster: "/posters/pposter3.png",
  },
  {
    id: "Prezentare4",
    title: "Prezenare",
    src: "/pdfs/presentation4.pdf",
    poster: "/posters/pposter4.png",
  },
];

export const interview_pdfs: PdfMeta[] = [
    {
      id: "iPrezentare1",
      title: "Prezenare",
      src: "/pdfs/ipresentation1.pdf",
      poster: "/posters/ipposter1.png",
    },
    {
        id: "iPrezentare2",
        title: "Prezenare",
        src: "/pdfs/ipresentation2.pdf",
        poster: "/posters/ipposter2.png",
      },
  ];
