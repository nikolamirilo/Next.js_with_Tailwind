import Card from "@/components/Card";
import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import data from "../data.json";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-32">
      <Navbar type="home" />
      <Hero />
      <About />
      <div className="bg-white" id="akcije">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {data
              ? data.map((item: any, idx: number) => {
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
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
