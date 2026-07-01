import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Labeeb | Pediatric Dentist Specializing in Happy, Gentle Dental Care for Kids",
  description: "Dr. Labeeb offers premium, gentle, pain-free pediatric dentistry services in a warm, playful environment. Book an appointment today for your child's healthy smile.",
  keywords: ["Pediatric Dentist", "Dr. Labeeb", "Kids Dentistry", "Pain-free Dental Care", "Children's Dentist"],
  authors: [{ name: "Dr. Labeeb" }],
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
