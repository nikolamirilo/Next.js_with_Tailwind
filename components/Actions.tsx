import React from "react";
import data from "../data.json";
import Card from "./Card";

const Actions: React.FC = ({ title }: { title: string }) => {
  return (
    <div className="bg-white" id="akcije">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col items-center justify-center gap-20">
        <h1 className="text-4xl font-bold uppercase text-gray-900">{title}</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {data
            ? data
                // .filter((item: any) => item.category === title)
                .map((item: any, idx: number) => {
                  return (
                    <Card
                      key={idx}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      category={item.category}
                    />
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Actions;
