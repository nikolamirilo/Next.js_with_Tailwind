"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CardProps {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type?: string;
  isPublic: boolean;
}

const Card: React.FC<CardProps> = ({
  _id,
  title,
  description,
  image,
  category,
  type,
  isPublic,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
    setIsChecked(isPublic);
  }, []);
  return (
    <div className="block w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="w-full h-56 hover:h-ful relative">
        <Image className="rounded-t-lg" src={image} alt={title} fill object-fit="cover" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">{description}</p>
        <span
          className={`mb-2 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] ${
            category === "Hidroekologija"
              ? "bg-blue-500"
              : category === "Otpad"
              ? "bg-red-500"
              : category === "Zagađenost"
              ? "bg-yellow-500"
              : ""
          }`}
        >
          #{category}
        </span>
        {type === "admin" ? (
          <div id="checkbox" className="flex flex-row gap-2 w-full justify-end items-center">
            <label htmlFor="#isPublic">Da li je javno?</label>
            <input
              type="checkbox"
              id="isPublic"
              className="cursor-pointer"
              checked={isChecked}
              onChange={async (e: any) => {
                setIsChecked(e.target.checked);
                try {
                  const res = await fetch(`${process.env.WEB_APP_URL}/api/actions/update`, {
                    method: "PUT",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      _id: _id,
                      isPublic: !isChecked,
                    }),
                  });
                } catch (error) {
                  console.log(error as Error);
                }
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
