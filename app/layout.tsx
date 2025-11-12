import type { Metadata } from "next";
import { Manrope, Candal } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const candal = Candal({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-candal",
});

export const metadata: Metadata = {
  title: "Nicholas Osorio-Okraku | Strategic Direction & Product Growth",
  description: "Independent freelancer offering personal 1-on-1 founder consultation specialising in strategic direction, product launches and growth of small-to-medium businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${candal.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}