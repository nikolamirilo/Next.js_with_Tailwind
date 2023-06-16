import Image from "next/image";
import Link from "next/link";
import React from "react";
import background from "../public/images/background.jpg";

const Hero: React.FC = () => {
  return (
    <section className="text-white bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <Image src={background.src} fill object-fit="cover" priority alt="Background" />
      <div className="h-3/5 w-full rounded-3xl bg-black/30 z-10">
        <div className="flex flex-col justify-center items-center h-full gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase drop-shadow-xl text-center">
            Projekat Fazon menja svet,
            <span className="sm:block ml-2">Budi i ti u ovom Fazonu!</span>
          </h1>
          <p className="text-xl max-w-sm sm:max-w-lg text-center">
            Projekat &quot;Fazon&quot; je ekoloski projekat koji se bavi povecanjem svesti ljudi o
            ekologiji.
          </p>

          <div className="flex">
            <Link
              className="block w-full rounded border-green-600 bg-green-600 border-2 px-12 text-lg py-3 font-medium text-white hover:bg-green-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#o-nama"
            >
              Šta je Projekat &quot;Fazon&quot;?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
