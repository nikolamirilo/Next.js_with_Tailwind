import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-fit">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current text-green-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Učitavanje...
        </span>
      </div>
    </div>
  );
};

export default Loader;
