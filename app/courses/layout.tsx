// import type { Metadata } from 'next'

import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: 'Courses | Decasofts',
//   description: 'Portfolio of projects by Decasofts — coming soon.',
// }

// export default function CoursesLayout({ children }: { children: React.ReactNode }) {
//   return <>{children}</>
// }

import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}