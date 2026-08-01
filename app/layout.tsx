import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rafael Turse",
  description: "Rafael Turse — Systems Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg bg-grain font-body font-light text-ink antialiased min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}