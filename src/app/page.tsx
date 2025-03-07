import Image from "next/image";
export default function Home() {
  return (
    // grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
    <div className="">
      <section className="relative h-screen w-full">
        <Image
          src="/main.jpg"
          alt="Main illustration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Portofoliu Digital
          </h1>
          <p className="text-white text-2xl lg:text-4xl">Silviana Pozneac</p>
        </div>
      </section>
      <main
        className="w-full h-full flex gap-8 row-start-2 items-center 
      justify-between pl-40 pr-40 border"
      >
        <div></div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
