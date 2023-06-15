import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div
      id="kontakt"
      className="flex py-6 flex-col lg:flex-row md:flex-col sm:flex-col justify-around items-center bg-green-600 w-full"
    >
      <div id="main-info" className="flex flex-row gap-4 justify-between items-center mb-4">
        <Image
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg"
          alt="logo"
          width={70}
          height={50}
        />
        <h2 className="text-white text-2xl font-bold">Projekat &quot;Fazon&quot;</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div id="contact" className="flex flex-row gap-4 justify-around items-center">
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
          Copyright © Projekat &quot;Fazon&quot; 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
