import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="inter.className">
        <section id="Navbar">
          <Navbar />
        </section>
        <main>{children}</main>
        <section id="Footer">
          <Footer />
        </section>
      </body>
    </html>
  );
}
