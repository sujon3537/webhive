import Footer5 from "@/components/footers/Footer5";
import Header31 from "@/components/headers/Header31";

import Breadcumb5 from "@/components/shop/Breadcumb5";
import Checkout from "@/components/shop/Checkout";
import Features from "@/components/shop/Features";
import React from "react";

export const metadata = {
  title:
    "Shop Checkout || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function ShopCheckoutPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header31 />
        <Breadcumb5 />
        <Checkout />
        <Features />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
