import Image from "next/image";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="text-3xl fixed top-0 font-bold text-gray-900 bg-green-600/30 flex justify-center items-center h-screen w-full">
      <Image
        src="/images/green_logo.png"
        className="animate-ping-slow"
        width={100}
        height={100}
        alt="Logo"
      />
    </div>
  );
};

export default Loading;
