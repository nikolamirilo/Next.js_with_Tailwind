"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ type }: { type: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full fixed top-0 bg-green-600 py-4 lg:py-4 flex items-center z-50">
      <div
        className={`mx-auto px-6 flex items-center justify-between sm:justify-start ${
          isOpen ? "container-fluid pt-12" : "container"
        }`}
      >
        <div
          className={`flex items-center lg:flex md:flex lg:w-96 md:w-auto sm:w-auto ${
            isOpen ? "hidden" : ""
          }`}
          aria-label="Home"
          role="img"
        >
          <img
            className="cursor-pointer w-8 sm:w-auto"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg"
            alt="logo"
          />
          <h2 className="ml-2 lg:ml-4 text-2xl font-bold text-white dark:text-white">
            Projekat &quot;Fazon&quot;
          </h2>
        </div>
        <div className="sm:w-full">
          <button
            onClick={handleHamburgerClick}
            className="fixed top-3 right-3 dark:bg-white rounded sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:decoration-underline"
          >
            <AiOutlineMenu size={35} className="text-white" />
          </button>
          <div
            id="menu"
            className={`lg:flex flex-row justify-end items-center sm:w-full ${
              isOpen ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row md:flex-row sm:flex-col sm:justify-center sm:items:center gap-3">
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
              {type === "home" && (
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
              )}
              {type === "home" && (
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
              )}
              {type === "home" && (
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
              )}
              {type === "home" && (
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
              )}

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
