import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScriptProvider } from "@/lib/script-context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Amaliy topshiriqlar banki — Kompyuter muhandisligi",
  description:
    "Kasb standarti asosida tayyorlangan amaliy topshiriqlar, baholash mezonlari va koʻnikmalar xaritasi. 50610401 — Kompyuter muhandisligi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <ScriptProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ScriptProvider>
      </body>
    </html>
  );
}
