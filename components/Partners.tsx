"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import eko_men from "../public/images/eko_men.png";
import fon from "../public/images/fon.png";

const Partners: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const images = [fon, eko_men];
  useEffect(() => {
    setCurrentImage(images[index].src);
  }, [index, images]);
  return (
    <div
      id="partneri"
      className="flex flex-col py-20 px-0 gap-5 justify-center items-center md:w-full"
    >
      <h1 className="text-4xl font-bold uppercase text-gray-900">Naši Partneri</h1>
      <div className="relative h-96 w-full lg:w-1/3 md:w-3/5 sm:w-4/5 m-0 flex justify-center items-center">
        <div
          id="left-arrow"
          className="absolute left-1 sm:left-0 z-5 text-green-600 cursor-pointer top-4/10"
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
        {currentImage !== "" ? (
          <Image
            src={currentImage}
            width={400}
            height={250}
            alt="Partner"
            className="w-4/5 lg:w-4/5 lg:h-auto sm:w-72"
          />
        ) : null}

        <div
          id="right-arrow"
          className="absolute z-5 right-1 sm:right-0 text-green-600 cursor-pointer top-4/10"
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
