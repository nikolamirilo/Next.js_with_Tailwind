import About from "@/components/About";
import Actions from "@/components/Actions";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import { getData } from "@/lib/actions";
import React from "react";

const Home: React.FC = async () => {
  const publicActions = await getData("public");
  return (
    <div className="flex flex-col gap-32" id="home">
      <Navbar type="home" />
      <Hero />
      <About />
      <Actions title="Akcije Projekta Fazon" data={publicActions} />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
