import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const links = [
    { name: "Naše akcije", href: "#akcije" },
    { name: "Naši Partneri", href: "#partneri" },
    { name: "Doprinesite našem radu", href: "/doprinesi" },
    { name: "Kontaktirajte nas", href: "#kontakt" },
  ];
  const stats = [
    { name: "Iteracija", value: "12" },
    { name: "Učesnika", value: "100+" },
    { name: "Sakupljenog đubreta", value: "5000+" },
    { name: "Provedenih sati u radu", value: "10000+" },
  ];
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      id="o-nama"
    >
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        fill
        object-fit="cover"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            O nama
          </h2>
          <p className="mt-6 text-lg leading-8 w-full text-gray-300">
            Projekat "Fazon" predstavlja inspirativnu inicijativu sa fokusom na
            ekologiju, koja ima za cilj podizanje svesti i angažovanje ljudi u
            očuvanju našeg dragocenog okruženja. Sa sve većim izazovima koje
            ljudska aktivnost postavlja pred planetu, "Fazon" je osmišljen kao
            snažan odgovor na te probleme, pružajući jedinstven i inovativan
            pristup održivosti. Naša misija je duboko ukorenjena u razumevanju
            da je svako pojedinačno delovanje važno za očuvanje ekosistema.
            Projekat "Fazon" se zalaže za promovisanje ekološke svesti putem
            edukacije, inspirativnih kampanja i praktičnih akcija koje imaju
            trajan uticaj na naše životno okruženje. Kroz raznolike aktivnosti,
            "Fazon" podstiče ljude da reevaluiraju svoje navike i preduzmu
            konkretne korake ka održivom načinu života.
          </p>
          <p className="mt-6 text-lg leading-8 w-full text-gray-300">
            Mi smo pokret koji okuplja ljude širom sveta, spajajući ih u
            zajedničkom cilju zaštite naše planete. Verujemo da je zajednička
            akcija ključna za očuvanje ekološke ravnoteže i stvaranje održive
            budućnosti za sve nas.
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
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-2">
                <dt className="text-lg leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
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
