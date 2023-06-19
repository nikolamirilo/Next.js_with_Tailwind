import About from "@/components/About";
import Actions from "@/components/Actions";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import React from "react";

const Home: React.FC = async () => {
  return (
    <div className="flex flex-col gap-32" id="home">
      <Navbar type="home" />
      <Hero />
      <About />
      <Actions title="Akcije Projekta Fazon" actionType="actions/public" />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
