"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Contribute: React.FC = () => {
  const [isFormSubmited, setIsFormSubmited] = useState<boolean>(false);
  const [image, setImage] = useState<any>({});
  const form = useRef<HTMLFormElement>(null);

  const service_id = "service_onw7nzh";
  const template_id = "template_rmcgnjr";
  const public_key = "BDttK27h7uZfyBIMR";

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ("use server");
    const fullNameInput = document.getElementById("full-name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const subjectInput = document.getElementById("subject")! as HTMLInputElement;
    const descriptionInput = document.getElementById("description")! as HTMLInputElement;
    const categoryInput = document.getElementById("category")! as HTMLInputElement;
    emailjs.sendForm(service_id, template_id, form.current!, public_key).then(
      (result) => {
        setIsFormSubmited(true);
        fullNameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        descriptionInput.value = "";
        categoryInput.value = "";
      },
      (error) => {
        alert(`Error`);
        console.log(error);
      }
    );
  };

  if (isFormSubmited) {
    alert("Poslata poruka");
  }
  return (
    <div
      className="flex flex-col gap-32 bg-cover bg-left md:bg-center "
      style={{ backgroundImage: `url(/images/background.webp)` }}
    >
      <Navbar />
      <div id="contribute" className="flex justify-center px-2 sm:px-16 lg:px-52 pb-8">
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
            action="submit"
            method="POST"
            ref={form}
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
                htmlFor="subject"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Naslov akcije:
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  name="subject"
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
                  id="description"
                  name="description"
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
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="images" name="images" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
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
