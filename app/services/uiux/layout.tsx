import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Decasofts",
  description:
    "Professional UI/UX design services by Decasofts — wireframing, prototyping, user research, and visual design across Pakistan, UAE, and Canada.",
};

export default function UIUXLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}