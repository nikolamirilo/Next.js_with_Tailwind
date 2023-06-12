"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Contribute = () => {
  const handleFormSubmit = () => {
    alert("Form Submitted");
  };

  return (
    <div className="flex flex-col gap-32">
      <Navbar type="contribute" />
      <div
        id="contribute"
        className="flex justify-center px-2 sm:px-16 lg:px-52 pb-8"
      >
        <div className="w-full max-w-xl mt-12 block rounded-lg px-4 py-16 sm:p-4 lg:p-16 border-2 border-green-600 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="text-center">
            <Image
              className="mx-auto"
              src="https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-mint-leaves-graphic-design-template-vector-isolated-png-image_1795026.jpg"
              alt="Your Company"
              width={100}
              height={100}
            />
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Doprinesi našoj akciji
            </h2>
          </div>

          <form
            className="mt-8 space-y-6"
            action="submit"
            onSubmit={handleFormSubmit}
          >
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Ime i Prezime:
              </label>
              <div className="mt-1">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                E-mail adresa
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Naslov akcije:
              </label>
              <div className="mt-1">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Opis predložene akcije:
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  rows={4}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="Write your thoughts here..."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Odaberite kategoriju:
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="Write your thoughts here..."
                >
                  <option value="Hidroekologija">Hidroekologija</option>
                  <option value="Otpad">Otpad</option>
                  <option value="Zagađenost">Zagađenost</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="image-upload"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Dodajte slike:
              </label>
              <div className="mt-2">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:border-green-500"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contribute;
