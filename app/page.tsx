"use client";

import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const Home: React.FC = () => {
  const data: any = [
    {
      title: "iPhone 12 Pro",
      description:
        "The latest flagship smartphone from Apple with advanced features and powerful performance.",
      image:
        "https://th.bing.com/th/id/OIP.ED7yn4y52RWiB5_F4vcp9wHaEo?pid=ImgDet&rs=1",
    },
    {
      title: "Samsung Galaxy S21",
      description:
        "A high-end Android smartphone with a stunning display, powerful camera, and fast performance.",
      image:
        "https://th.bing.com/th/id/OIP.fCZRTD2Io2spJ4KDHUgy_QHaE7?pid=ImgDet&rs=1",
    },
    {
      title: "MacBook Pro",
      description:
        "A powerful and portable laptop with a sleek design, retina display, and top-notch performance.",
      image:
        "https://th.bing.com/th/id/OIP.Fgu0b3sdeiz4lYdNdmTYdwHaFj?pid=ImgDet&rs=1",
    },
    {
      title: "Dell XPS 13",
      description:
        "An ultra-thin and lightweight laptop with a gorgeous InfinityEdge display and excellent battery life.",
      image:
        "https://th.bing.com/th/id/R.d2384bda8fccd883f9f8cf43a30413e7?rik=K9kvE0qdfX%2bq3Q&pid=ImgRaw&r=0",
    },
    {
      title: "iPhone 12 Pro",
      description:
        "The latest flagship smartphone from Apple with advanced features and powerful performance.",
      image:
        "https://th.bing.com/th/id/OIP.ED7yn4y52RWiB5_F4vcp9wHaEo?pid=ImgDet&rs=1",
    },
    {
      title: "Samsung Galaxy S21",
      description:
        "A high-end Android smartphone with a stunning display, powerful camera, and fast performance.",
      image:
        "https://th.bing.com/th/id/OIP.fCZRTD2Io2spJ4KDHUgy_QHaE7?pid=ImgDet&rs=1",
    },
    {
      title: "MacBook Pro",
      description:
        "A powerful and portable laptop with a sleek design, retina display, and top-notch performance.",
      image:
        "https://th.bing.com/th/id/OIP.Fgu0b3sdeiz4lYdNdmTYdwHaFj?pid=ImgDet&rs=1",
    },
    {
      title: "Dell XPS 13",
      description:
        "An ultra-thin and lightweight laptop with a gorgeous InfinityEdge display and excellent battery life.",
      image:
        "https://th.bing.com/th/id/R.d2384bda8fccd883f9f8cf43a30413e7?rik=K9kvE0qdfX%2bq3Q&pid=ImgRaw&r=0",
    },
    {
      title: "MacBook Pro",
      description:
        "A powerful and portable laptop with a sleek design, retina display, and top-notch performance.",
      image:
        "https://th.bing.com/th/id/OIP.Fgu0b3sdeiz4lYdNdmTYdwHaFj?pid=ImgDet&rs=1",
    },
  ];

  return (
    <div id="home">
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
