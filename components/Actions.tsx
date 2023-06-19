import React from "react";
import Card from "./Card";
interface ActionsProps {
  title: string;
  actionType: string;
  type?: string;
}

async function getData(actionType: string) {
  const res = await fetch(`${process.env.WEB_APP_URL}/api/${actionType}`, { cache: "no-store" });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Actions: React.FC<ActionsProps> = async ({ title, actionType, type }) => {
  const data = await getData(actionType);
  console.log(data);
  return (
    <div className="bg-white" id="akcije">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col items-center justify-center gap-20">
        <h1 className="text-3xl font-bold uppercase text-center text-gray-900">{title}</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {data
            ? data.map((item: any, idx: number) => {
                return (
                  <Card
                    type={type}
                    key={idx}
                    _id={item._id}
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
