import React from "react";
import Card from "./Card";
interface ActionsProps {
  title: string;
  actionType: string;
  type?: string;
}

async function getData(actionType: string) {
  console.log(`Web App Url: ${process.env.WEB_APP_URL}`);
  console.log(`Action type: ${actionType}`);
  try {
    const res = await fetch(`${process.env.WEB_APP_URL}/api/${actionType}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const Actions: React.FC<ActionsProps> = async ({ title, actionType, type }) => {
  if (!title || !actionType) {
    return <div>Bla bla</div>;
  }
  const data = await getData(actionType);
  const handleFilter = (item: any, idx: number) => {
    if (type == "admin") {
      return idx < 12;
    } else {
      return idx < 9;
    }
  };

  if (data?.length == 0) return null;

  return (
    <div className="w-full" id="akcije">
      <div className="mx-auto w-full max-w-2xl p-4 sm:px-6 py-32 lg:max-w-7xl lg:px-8 flex flex-col items-center justify-center gap-16">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase text-center text-green-600">
          {title}
        </h1>
        <div className="grid grid-cols-1 w-full gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {data
            ? data
                .filter((item: any, idx: number) => handleFilter(item, idx))
                .sort((a: any, b: any) => {
                  return a.category - b.category;
                })
                .map((item: any, idx: number) => {
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
