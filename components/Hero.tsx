import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-white relative bg-center bg-cover h-screen w-full flex flex-col justify-center items-center">
      <Image
        src="/images/hero.webp"
        fill
        priority
        alt="Background"
        className="object-cover object-center"
      />
      <div className="h-3/5 w-full bg-black/60 z-10">
        <div className="flex flex-col justify-center items-center h-full gap-4">
          <h1 className="text-5xl font-bold px-4 tracking-tight text-white sm:text-5xl uppercase drop-shadow-xl text-center">
            U FAZONU ZA ODRŽIVOST,
            <span className="sm:block ml-2">PROMENIMO ZAJEDNO SVET!</span>
          </h1>
          <p className="text-lg max-w-sm px-6 sm:max-w-xl text-center leading-8 text-white">
            Projekat &quot;Fazon&quot; je ekološki projekat koji se bavi
            povećanjem svesti ljudi o ekologiji putem inovativnih i
            interaktivnih metoda, kako bi se inspirisali i motivisali pojedinci
            da preduzmu konkretnu akciju za očuvanje životne sredine.
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
