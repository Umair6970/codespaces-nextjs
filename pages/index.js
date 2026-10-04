"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Portfolio />
        <Process />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}