import Footer18 from "@/components/footers/Footer18";
import Header19 from "@/components/headers/Header19";
import Facts from "@/components/homes/home-21/Facts";
import Faqs from "@/components/homes/home-21/Faqs";
import Features from "@/components/homes/home-21/Features";
import Hero from "@/components/homes/home-21/Hero";

import Services from "@/components/homes/home-21/Services";
import Stratagy from "@/components/homes/home-21/Stratagy";
import Testimonials from "@/components/homes/home-21/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Demo 21 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function DemoPage21() {
  return (
    <>
      <div className="color-sky font-urbanist demo21">
        <div className="grow shrink-0">
          <Header19 />
          <>
            <Hero />
            {/* /section */}
            <Services />
            {/* /section */}
            <Stratagy />
            {/* /section */}
            <Features />
            {/* /section */}
            <Facts />
            {/* /section */}
            <Testimonials />
            {/* /section */}
            <Faqs />
            {/* /section */}
          </>
        </div>
        <Footer18 />
      </div>
    </>
  );
}
