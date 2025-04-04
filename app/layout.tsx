import type { Metadata } from 'next';
import { Bricolage_Grotesque } from "next/font/google";

import './globals.css'

export const metadata: Metadata = {
  title: 'Genevieve Miao',
  description: 'Genevieve Miao',
}

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}
        {/* <main className="relative overflow-hidden">
          {children}
        </main> */}
      </body>
    </html>
  )
}
