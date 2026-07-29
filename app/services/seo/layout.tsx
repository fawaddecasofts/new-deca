import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Engine Optimization | Decasofts",
  description:
    "Boost your website's visibility with Decasofts' expert SEO services. We help businesses rank higher on search engines and drive steady organic growth.",
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}