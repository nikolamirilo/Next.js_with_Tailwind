"use client";
import Actions from "@/components/Actions";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useMainContext } from "@/context/MainContext";
import dynamic from "next/dynamic";
import React from "react";
const Partners = dynamic(() => import("@/components/Partners"), { ssr: false });
const About = dynamic(() => import("@/components/About"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home: React.FC = async () => {
  const { loadActions } = useMainContext();
  return (
    <div className="flex flex-col gap-16" id="home">
      <Navbar type="home" />
      <Hero />
      <About />
      <Actions
        title="Akcije Projekta Fazon"
        actionType="actions/public"
        actionsNumber={loadActions}
      />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
