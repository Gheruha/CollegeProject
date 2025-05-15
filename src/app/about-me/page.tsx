import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white lg:bg-gray-50 pt-72 lg:p-0">
      <div className="w-full h-full lg:h-3/4 lg:w-3/4 p-4  mt-20 lg:p-10 lg:shadow-sm lg:border lg:rounded-lg lg:bg-white space-x-12 space-y-12 flex flex-col md:flex-row justify-center items-start lg:items-center">
        <div className="w-full lg:w-2/4">
          <h1 className="text-xl lg:text-4xl font-bold pb-4">Despre mine</h1>
          <p className="text-md lg:text-lg">
            Sunt Silvia Pozneac, profesoară de limba și literatura română,
            pasionată de cuvânt, cultură și conexiuni autentice. <br />
            <br />
            Lucrez într-o instituție care are grupe alolingve și cred cu tărie
            că limba română nu se predă doar din manual, ci se trăiește – prin{" "}
            <b>artă</b>, <b>muzică</b>,<b> poezie</b> și <b>evenimente</b> care
            trezesc curiozitatea și înaripează sufletul. <br />
            <br />
            Acest site reflectă munca, creativitatea și emoția elevilor mei –
            produse realizate în cadrul activităților extracurriculare care
            promovează valorile culturale românești și europene.{" "}
            <b>
              Împreună, construim punți de înțelegere și respect între
              identități, prin limbă și spirit.
            </b>
          </p>
        </div>
        <div className="w-full lg:w-2/4 flex justify-center">
          <Image
            src="/photos/about-me.jpg" // note the leading slash!
            alt="photo"
            width={400} // width in px
            height={400} // height in px
            className="border rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
