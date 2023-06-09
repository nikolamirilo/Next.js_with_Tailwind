import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";
import data from "../data.json";
const Partners = dynamic(() => import("@/components/Partners"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Actions = dynamic(() => import("@/components/Actions"), {
  loading: () => <Loader />,
});

const Home: React.FC = async () => {
  return (
    <div className="flex flex-col gap-16" id="home">
      <Navbar type="home" />
      <Hero />
      <About />
      <Actions title={data?.akcije.naslov} actionType="actions/public" />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
