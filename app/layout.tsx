import type { Metadata } from "next";
import { DynaPuff, Cherry_Bomb_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const dynaPuff = DynaPuff({
  weight: "400",
  variable: "--font-dyna",
  subsets: ["latin"],
});

const cherryBombOne = Cherry_Bomb_One({
  weight: "400",
  variable: "--font-cherry-bomb-one",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Happy Happy CUM!",
  description: "Happy Cum para Bel, la mas linda de todas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dynaPuff.variable} ${cherryBombOne.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
