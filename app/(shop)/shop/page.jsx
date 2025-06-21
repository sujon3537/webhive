import Footer5 from "@/components/footers/Footer5";
import Header31 from "@/components/headers/Header31";
import Breadcumb from "@/components/shop/Breadcumb";
import Features from "@/components/shop/Features";
import Shop from "@/components/shop/Shop";
import React from "react";

export const metadata = {
  title:
    "Shop || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function ShopPage1() {
  return (
    <>
      <div className="grow shrink-0 shop">
        <Header31 />
        <Breadcumb />
        <Shop />
        <Features />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
