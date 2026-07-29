import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | Decasofts',
  description: 'Portfolio of projects by Decasofts — coming soon.',
}

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}