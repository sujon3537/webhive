import Footer5 from "@/components/footers/Footer5";
import Header31 from "@/components/headers/Header31";

import Breadcumb4 from "@/components/shop/Breadcumb4";
import Features from "@/components/shop/Features";

import ShopCart from "@/components/shop/ShopCart";
import React from "react";

export const metadata = {
  title:
    "Shop Cart || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function ShopCartPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header31 />
        <Breadcumb4 />
        <ShopCart />
        <Features />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
