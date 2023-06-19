"use client";

import Navbar from "@/components/Navbar";
import { Actions } from "@/types/interfaces";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useReducer, useState } from "react";
const Footer = dynamic(() => import("@/components/Footer"));

const Contribute: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const initialData = {
    fullName: "",
    email: "",
    title: "",
    category: "Hidroekologija",
    description: "",
    image: "",
    isPublic: "false",
  };
  const [data, setData] = useReducer(
    (data: Actions, updates: any) => ({
      ...data,
      ...updates,
    }),
    initialData
  );

  const handleFileChange = (e: any) => {
    const file = e?.target?.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setData({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.WEB_APP_URL}/api/actions/addNew`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body
      body: JSON.stringify(data),
    }).then((response) => {
      alert("Vas odgovor je zabelezen");
    });
  };
  return (
    <div
      className="flex flex-col gap-32 bg-cover bg-left md:bg-center "
      id="contribute"
      style={{ backgroundImage: `url(/images/background.webp)` }}
    >
      <Navbar />
      <div className="flex justify-center px-2 sm:px-16 lg:px-52 pb-8">
        <div className="w-full max-w-xl lg:mt-32 mt-16 sm:mt-16 bg-white block rounded-lg px-4 py-16 sm:p-4 lg:p-16 md:border-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
          <div className="text-center">
            <Image
              className="mx-auto"
              src="https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-mint-leaves-graphic-design-template-vector-isolated-png-image_1795026.jpg"
              alt="Your Company"
              width={100}
              height={100}
            />
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Doprinesi našoj akciji</h2>
          </div>

          <form
            className="mt-8 space-y-6"
            encType="multipart/form-data"
            name="contribute"
            method="POST"
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
                  value={data.fullName}
                  onChange={(e: any) => {
                    setData({ fullName: e.target.value });
                  }}
                  id="full-name"
                  name="fullName"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                E-mail adresa
              </label>
              <div className="mt-1">
                <input
                  value={data.email}
                  onChange={(e: any) => {
                    setData({ email: e.target.value });
                  }}
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
              <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                Naslov akcije:
              </label>
              <div className="mt-1">
                <input
                  value={data.title}
                  onChange={(e: any) => {
                    setData({ title: e.target.value });
                  }}
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
                htmlFor="description"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Opis predložene akcije:
              </label>
              <div className="mt-1">
                <textarea
                  value={data.description}
                  onChange={(e: any) => {
                    setData({ description: e.target.value });
                  }}
                  id="description"
                  name="description"
                  rows={4}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
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
                  value={data.category}
                  onChange={(e: any) => {
                    setData({ category: e.target.value });
                  }}
                  id="category"
                  name="category"
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
                    htmlFor="images"
                    className="flex relative flex-col items-center justify-center bg-center bg-cover w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:border-green-500"
                  >
                    {data.image !== "" ? (
                      <Image src={data.image} fill object-fit="cover" priority alt="Background" />
                    ) : null}
                    <div
                      className={`flex flex-col items-center justify-center pt-5 pb-6 ${
                        data.image === "" ? "" : "hidden"
                      }`}
                    >
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
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input
                      onChange={handleFileChange}
                      id="images"
                      name="images"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                onClick={(e: any) => {
                  handleFormSubmit(e);
                }}
              >
                Pošalji
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
