export interface BookMeta {
  id: string;
  embedUrl: string;
  thumbnail: string;
}

export const books: BookMeta[] = [
  {
    id: "book1",
    embedUrl:
      "https://read.bookcreator.com/XufeNOD8yFgvt4PdmEdCrsk5Llr2/MZFddydESlKJtRcOTIasMQ/nM4GtSLoTK2KtoFx6v5WBQ",
    thumbnail: "posters/bposter1.png",
  },
  {
    id: "book2",
    embedUrl: "https://read.bookcreator.com/XufeNOD8yFgvt4PdmEdCrsk5Llr2/HdOevo_ST5ikh0Fj0VDrIg/wM48_HGxTVa9FpqSefiebA",
    thumbnail: "posters/bposter2.png",
  },
];
