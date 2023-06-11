"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-green-600 py-4 lg:p-0 flex items-center z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center" aria-label="Home" role="img">
          <img
            className="cursor-pointer w-8 sm:w-auto"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg"
            alt="logo"
          />
          <h2 className="ml-2 lg:ml-4 text-2xl font-bold text-white dark:text-white">
            Projekat "Fazon"
          </h2>
        </div>
        <div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="dark:bg-white rounded sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:decoration-underline"
          >
            <AiOutlineMenu size={35} className="text-white" />
          </button>
          <div
            id="menu"
            className={`md:block lg:block ${isOpen ? "" : "hidden"}`}
          >
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className=" dark:bg-white rounded block md:hidden lg:hidden"
            >
              <img
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                alt="hide"
              />
            </button>
            <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
              <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="/">Početna</a>
              </li>
              <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="#o-nama">O nama</a>
              </li>
              <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="#akcije">Akcije</a>
              </li>
              <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="#kontakt">Kontakt</a>
              </li>
              <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="#partneri">Partneri</a>
              </li>
              <li className="text-white text-xl hover:font-semibold hover:underline-offset-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-150 dark:text-white cursor-pointer md:ml-10 pt-10 md:pt-0">
                <a href="/doprinesi">Doprinesi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
