import Footer2 from "@/components/footers/Footer2";
import Header3 from "@/components/headers/Header3";
import Brands from "@/components/homes/home-2/Brands";
import Cta from "@/components/homes/home-2/Cta";
import Features from "@/components/homes/home-2/Features";
import Hero from "@/components/homes/home-2/Hero";
import Process from "@/components/homes/home-2/Process";
import Projects from "@/components/homes/home-2/Projects";
import Services from "@/components/homes/home-2/Services";
import Team from "@/components/homes/home-2/Team";
import React from "react";

export const metadata = {
   title:
      "Webhivebd - Best Web Development & Digital Marketing Agency in Bangladesh",
   description:
      "WebHiveBD is a leading web development & digital marketing agency in Bangladesh, offering custom websites, SEO, PPC, social media marketing & more. Boost your online presence with our expert solutions!",
};
export default function HomePage() {
   return (
      <>
         <div className="font-dm">
            <div className="grow shrink-0">
               <section className="wrapper !bg-[#ffffff]">
                  <div className="container pt-8 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem]">
                     <Hero />
                     {/* /.row */}
                     <Brands />
                     {/* /div */}
                     <Features />
                     {/*/.row */}
                     <Process />
                     {/*/.row */}
                     <div className="flex flex-wrap mx-[-15px]">
                        <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                           <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                              Latest Projects
                           </h2>
                           <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-DMSerif !font-normal xl:!text-[2rem] !leading-[1.2] !mb-10">
                              Check out some of our awesome projects with creative ideas
                              and great design.
                           </h3>
                        </div>
                        {/* /column */}
                     </div>
                     {/* /.row */}
                  </div>
                  {/* /.container */}
                  <div className="container-fluid xl:!px-6 lg:!px-6 md:!px-6">
                     <Projects />
                     {/* /.swiper-container */}
                  </div>
                  {/* /.container-fluid */}
                  <div className="container">
                     <Services />
                     {/*/.row */}
                     <Team />
                     {/*/.row */}
                     <Cta />
                     {/*/.card */}
                  </div>
                  {/*/.container */}
               </section>
            </div>{" "}
         </div>
      </>
   );
}
