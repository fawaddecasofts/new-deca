import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Decasofts",
  description:
    "Decasofts offers innovative web development solutions including custom website design, WordPress, and Laravel development. Based in Dubai & Faisalabad, Pakistan.",
};

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}