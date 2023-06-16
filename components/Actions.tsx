import React from "react";
import Card from "./Card";
interface ActionsProps {
  title?: string;
  data: [];
  type?: any;
}

const Actions: React.FC<ActionsProps> = ({ title, data, type }) => {
  return (
    <div className="bg-white" id="akcije">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col items-center justify-center gap-20">
        <h1 className="text-4xl font-bold uppercase text-gray-900">{title}</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {data
            ? data
                .sort((a, b) => a.category.localeCompare(b.category))
                .map((item: any, idx: number) => {
                  return (
                    <Card
                      type={type}
                      key={idx}
                      id={item._id}
                      isPublic={item.isPublic}
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
