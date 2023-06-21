import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  const links = [
    { name: "Naše akcije", href: "#akcije" },
    { name: "Naši Partneri", href: "#partneri" },
    { name: "Doprinesite našem radu", href: "/doprinesi" },
    { name: "Kontaktirajte nas", href: "#kontakt" },
  ];
  const stats = [
    { name: "Iteracija", value: "5" },
    { name: "Učesnika", value: "100+" },
    { name: "Sakupljenog đubreta", value: "5000+" },
    { name: "Provedenih sati u radu", value: "10000+" },
  ];
  return (
    <div
      className="relative isolate overflow-hidden bg-cover bg-center py-24 sm:py-16"
      id="o-nama"
    >
      <Image
        src="/images/about.webp"
        alt="About"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            O nama
          </h2>
          <p className="mt-6 text-lg leading-8 w-full text-white">
            Projekat &quot;Fazon&quot; predstavlja inspirativnu inicijativu sa
            fokusom na ekologiju, koja ima za cilj podizanje svesti i
            angažovanje ljudi u očuvanju našeg dragocenog okruženja. Sa sve
            većim izazovima koje ljudska aktivnost postavlja pred planetu,
            &quot;Fazon&quot; je osmišljen kao snažan odgovor na te probleme,
            pružajući jedinstven i inovativan pristup održivosti. Naša misija je
            duboko ukorenjena u razumevanju da je svako pojedinačno delovanje
            važno za očuvanje ekosistema. Projekat &quot;Fazon&quot; se zalaže
            za promovisanje ekološke svesti putem edukacije, inspirativnih
            kampanja i praktičnih akcija koje imaju trajan uticaj na naše
            životno okruženje. Kroz raznolike aktivnosti, &quot;Fazon&quot;
            podstiče ljude da reevaluiraju svoje navike i preduzmu konkretne
            korake ka održivom načinu života.
          </p>
          <p className="mt-6 text-lg leading-8 w-full text-white">
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
                <dt className="text-lg leading-7 text-white">{stat.name}</dt>
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
