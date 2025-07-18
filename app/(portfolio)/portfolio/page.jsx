import About from "@/components/about/About";
import Contact from "@/components/about/Contact";
import Process from "@/components/about/Process";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import PortfolioContainer from "@/components/portfolio/PortfolioContainer";

import React from "react";

export const metadata = {
  title:
    "About 02 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function Portfolio() {
  return (
    <>
      <div className="grow shrink-0">
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-40 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] md:pb-[17.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !mb-6">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3">
                  Our Portfolio
                </h1>
                <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-0">
                  Ideas turned into beautiful things.
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        <PortfolioContainer />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
