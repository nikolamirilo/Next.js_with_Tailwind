import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import Navbar from "@/components/Navbar";
import Actions from "@/components/Actions";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-32">
      <Navbar type="home" />
      <Hero />
      <About />
      <Actions title="Akcije Projekta Fazon" />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
