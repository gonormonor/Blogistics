import React, { useRef } from "react";

import Header from "../components/partials/Header";
import HeroHome from "../components/partials/HeroHome";
import FeaturesHome from "../components/partials/Features";
import FeaturesBlocks from "../components/partials/FeaturesBlocks";
import Testimonials from "../components/partials/Testimonials";
import Newsletter from "../components/partials/Newsletter";
import Footer from "../components/partials/Footer";

function Home() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-Montserrat">
      {/*  Site header */}
      <Header />

      {/*  Page conte*/}
      <main className="flex-grow">
        {/*  Page section*/}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesHome />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
