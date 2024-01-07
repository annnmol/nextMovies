import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/product/footer";
import Hero from "@/components/product/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextMovies",
  description: "Your next favorite movies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="min-h-screen mx-auto flex flex-col bg-slate-600">
          <Hero />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
