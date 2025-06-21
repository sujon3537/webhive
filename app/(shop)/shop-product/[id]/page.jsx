import Footer5 from "@/components/footers/Footer5";
import Header31 from "@/components/headers/Header31";
import BreadCumb3 from "@/components/shop/BreadCumb3";
import Features from "@/components/shop/Features";
import ProductReview from "@/components/shop/ProductReview";
import ShopDetails from "@/components/shop/ShopDetails";
import { products } from "@/data/products";
import React from "react";
export const metadata = {
  title:
    "Shop Product || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default async function ShopProductPage({ params }) {
  const { id } = await params;

  const product = products.filter((p) => p.id == id)[0] || products[0];

  return (
    <>
      {" "}
      <div className="grow shrink-0 shop-product">
        <Header31 />
        <BreadCumb3 />
        <ShopDetails product={product} />

        <Features />
        <ProductReview />

        <Features />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
