import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div
      id="kontakt"
      className="flex py-6 flex-col sm:px-36 lg:flex-row md:flex-col sm:flex-col justify-between items-center bg-green-600 w-full"
    >
      <div
        id="main-info"
        className="flex flex-row justify-between items-center mb-4 gap-0 sm:gap-2"
      >
        <Image
          className="cursor-pointer col-span-1 py-2"
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div
          id="contact"
          className="flex flex-row gap-4 justify-around items-center"
        >
          <Link href="/">
            <AiFillInstagram size={30} className="text-white" />
          </Link>
          <Link href="/">
            <AiFillFacebook size={30} className="text-white" />
          </Link>
          <Link href="/">
            <AiFillMessage size={30} className="text-white" />
          </Link>
        </div>
        <div id="copyright" className="text-white text-lg">
          Copyright © Projekat &quot;Fazon&quot; 2023.
        </div>
      </div>
    </div>
  );
};

export default Footer;
