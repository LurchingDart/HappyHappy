import type { Metadata } from "next";
import { Irish_Grover, DynaPuff, Cherry_Bomb_One } from "next/font/google";
import "./globals.css";

const irishGrover = Irish_Grover({
    weight: "400",
    variable: "--font-irish-grover",
});

const dynaPuff = DynaPuff({
    weight: "400",
    variable: "--font-dyna",
});

const cherryBombOne = Cherry_Bomb_One({
    weight: "400",
    variable: "--font-cherry-bomb-one",
});


export const metadata: Metadata = {
  title: "Happy Happy CUM!",
  description: "Happy Happy Cum para belen, la mas linda de todas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${irishGrover.variable} ${dynaPuff.variable} ${cherryBombOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
