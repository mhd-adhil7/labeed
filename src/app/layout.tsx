import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Mohamed Labeeb KP | Consultant Pediatric Dentist Portfolio",
  description: "Specialized, child-friendly pediatric dental care by Dr. Mohamed Labeeb KP, Independent Consultant Pediatric Dentist with 5+ years of clinical experience.",
  keywords: ["Pediatric Dentist", "Dr. Mohamed Labeeb KP", "Dr. Labeeb", "Consultant Pedodontist", "Kids Dental Care", "Airo-Magic Brush"],
  authors: [{ name: "Dr. Mohamed Labeeb KP" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-custom text-body-text">
        {children}
      </body>
    </html>
  );
}
