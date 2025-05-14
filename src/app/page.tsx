import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="relative h-screen w-full">
        <Image
          src="/main.jpg"
          alt="Main illustration"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Portofoliu Digital
          </h1>
          <p className="text-white text-2xl lg:text-4xl">Rădăcini de grai - muguri de cultură</p>
          <p className="text-white text-2xl lg:text-11xl">Silviana Pozneac</p>
        </div>
      </section>
      <main
        className="w-full h-full flex gap-8 row-start-2 items-center 
      justify-between pl-40 pr-40 border"
      ></main>
    </div>
  );
}
