import Image from "next/image";
import Link from "next/link";
import React from "react";
import background from "../public/images/background.jpg";

const Hero = () => {
  return (
    // <div className="relative overflow-hidden bg-white h-screen mb-8">
    //   <div className="pb-80 pt-0 sm:pb-40 sm:pt-0 lg:pt-40">
    //     <div className="relative h-screen w-full bg-cover bg-center mx-auto flex flex-row justify-between items-center max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
    //       <Image
    //         src="/images/background.jpg"
    //         alt="hero"
    //         fill
    //         object-fit="cover"
    //       />
    //       <div className="sm:max-w-xl z-10 SM:flex sm:flex-row sm:justify-between sm:items-center">
    //         <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
    //           Summer styles are finally here
    //         </h1>
    //         <p className="mt-4 text-xl text-white pt-2 pb-5">
    //           This year, our new summer collection will shelter you from the
    //           harsh elements of a world that doesn't care if you live or die.
    //         </p>
    //         <Link
    //           href="#"
    //           className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
    //         >
    //           Shop Collection
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section
      className="text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-500 via-green-600 to-orange-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
