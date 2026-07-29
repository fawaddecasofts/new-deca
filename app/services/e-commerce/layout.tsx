import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Decasofts",
  description:
    "Decasofts specializes in scalable e-commerce solutions including custom shopping carts, payment gateway integration, and conversion-optimized web stores. Based in Canada, UAE & Pakistan.",
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}