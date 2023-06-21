"use client";
import { useMainContext } from "@/context/MainContext";
import React from "react";

const LoadMoreButton = () => {
  const { loadActions, setLoadActions } = useMainContext();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        id="loadMore"
        className="block w-52 rounded border-green-600 bg-green-600 border-2 px-12 text-lg py-3 font-medium text-white hover:bg-green-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        onClick={(e: any) => {
          e.preventDefault();
          setLoadActions(loadActions + 3);
        }}
      >
        Učitaj još
      </button>
    </div>
  );
};

export default LoadMoreButton;
