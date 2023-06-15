"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  type?: string;
}

const Navbar: React.FC<NavbarProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      id="navbar"
      className="bg-green-600 fixed top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-around grid grid-cols-5 content-center justify-items-start px-4 lg:px-16 z-10"
    >
      <div
        id="main-info"
        className="lg:flex lg:flex-row lg:items-center lg:justify-center grid grid-cols-4 col-span-4 w-auto gap-0 lg:gap-2 "
      >
        <Image
          className="cursor-pointer col-span-1"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg"
          alt="logo"
          width={70}
          height={50}
        />
        <h2 className="lg:text-2xl text-xl font-bold text-white col-span-3 flex flex-row justify-center items-center">
          Projekat &quot;Fazon&quot;
        </h2>
      </div>
      <div
        id="hamburger-menu"
        className="lg:hidden col-span-1 flex flex-row justify-center items-center"
      >
        <button onClick={handleHamburgerClick} className="text-white">
          <AiOutlineMenu size={35} className="text-white" />
        </button>
      </div>
      <div
        id="menu"
        className={`text-black flex flex-row items-center justify-center gap-2 col-span-5 w-full lg:w-3/5 my-5 lg:flex lg:justify-end ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul className="z-20 flex flex-col items-center justify-center md:flex-col sm:flex-col lg:flex-row gap-2">
          <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 lg:py-0 md:py-0 sm:pt-5">
            <a
              onClick={() => {
                setIsOpen(false);
              }}
              href="/"
            >
              Početna
            </a>
          </li>
          {type === "home" ? (
            <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 lg:py-0 md:py-0 sm:pt-5">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                href="#o-nama"
              >
                O nama
              </a>
            </li>
          ) : null}
          {type === "home" ? (
            <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 lg:py-0 md:py-0 sm:pt-5">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                href="#akcije"
              >
                Akcije
              </a>
            </li>
          ) : null}
          {type === "home" ? (
            <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 lg:py-0 md:py-0 sm:pt-5">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                href="#kontakt"
              >
                Kontakt
              </a>
            </li>
          ) : null}
          {type === "home" ? (
            <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 lg:py-0 md:py-0 sm:pt-5">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                href="#partneri"
              >
                Partneri
              </a>
            </li>
          ) : null}

          <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 lg:py-0 md:py-0 sm:pt-5">
            <a
              onClick={() => {
                setIsOpen(false);
              }}
              href="/doprinesi"
            >
              Doprinesi
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
