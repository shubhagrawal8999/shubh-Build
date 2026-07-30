import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "shubh.build",
  description: "Projects, writing, and notes from Shubh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
