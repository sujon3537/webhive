import Footer20 from "@/components/footers/Footer20";
import Header21 from "@/components/headers/Header21";
import About from "@/components/homes/home-23/About";
import Blogs from "@/components/homes/home-23/Blogs";
import Cta from "@/components/homes/home-23/Cta";
import Gallery from "@/components/homes/home-23/Gallery";
import Hero from "@/components/homes/home-23/Hero";
import Stories from "@/components/homes/home-23/Stories";
import Testimonials from "@/components/homes/home-23/Testimonials";
import VideoSection from "@/components/homes/home-23/VideoSection";
import React from "react";

export const metadata = {
  title:
    "Demo 23 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function DemoPage23() {
  return (
    <>
      <div className="color-leaf font-urbanist demo23">
        <div className="!font-Urbanist !text-[.85rem]">
          <div className="grow shrink-0">
            <Header21 />
            <>
              <Hero />
              {/* /section */}
              <Gallery />
              {/* /section */}
              <Testimonials />
              {/* /section */}
              <VideoSection />
              {/* /section */}
              <Stories />
              {/* /section */}
              <Cta />
              {/* /section */}
              <About />
              {/* /section */}
              <Blogs />
              {/* /section */}
            </>
          </div>
          <Footer20 />
        </div>
      </div>
    </>
  );
}
