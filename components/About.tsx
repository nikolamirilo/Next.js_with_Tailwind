import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../data.json";

const About: React.FC = () => {
  const links = [
    { name: "Naše akcije", href: "#akcije" },
    { name: "Naši Partneri", href: "#partneri" },
    { name: "Prijavite problem", href: "/doprinesi" },
    { name: "Kontaktirajte nas", href: "#kontakt" },
  ];
  return (
    <div
      className="relative flex flex-col justify-center items-center isolate overflow-hidden bg-cover bg-center"
      id="o-nama"
    >
      <Image
        src="/images/about.webp"
        alt="About"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {data?.o_nama.naslov}
          </h2>
          <p className="mt-6 text-lg leading-8 w-full text-white">
            {data?.o_nama.paragraf_1}
          </p>
          <p className="mt-6 text-lg leading-8 w-full text-white">
            {data?.o_nama.paragraf_2}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg">
                {link.name}
                <span className="ml-2">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {data?.o_nama.statistika.map((item: any, idx: number) => (
              <div key={idx} className="flex flex-col-reverse gap-2">
                <dt className="text-lg leading-7 text-white">{item.naslov}</dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                  {item.vrednost}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
