"use client";
import React, { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import fon from "../public/images/fon.png";
import eko_men from "../public/images/eko_men.png";
import Image from "next/image";

const Partners = () => {
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const images = [fon, eko_men];
  console.log(currentImage);
  useEffect(() => {
    setCurrentImage(images[index].src);
  }, [index]);
  return (
    <div
      id="partneri"
      className="flex flex-col py-20 px-0 gap-5 justify-center items-center md:w-full"
    >
      <h1 className="text-5xl">Naši Partneri</h1>
      <div className="relative h-96 lg:w-1/3 md:w-3/5 sm:w-4/5 m-0 flex justify-center items-center">
        <div
          id="left-arrow"
          className="absolute left-0 z-10 text-green-500 cursor-pointer top-4/10"
          onClick={() => {
            if (index === 0) {
              setIndex(images.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <BsArrowLeftCircleFill size={35} />
        </div>
        <Image
          src={currentImage}
          width={400}
          height={250}
          alt="Partner"
          className="lg:w-96 lg:h-auto md:w-80 sm:w-72"
        />
        <div
          id="right-arrow"
          className="absolute z-10 right-0 text-green-600 cursor-pointer top-4/10"
        >
          <BsArrowRightCircleFill
            size={35}
            onClick={() => {
              if (index === images.length - 1) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
