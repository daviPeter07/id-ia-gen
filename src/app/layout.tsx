import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/src/styles/globals.css"
import { Toaster } from "@/src/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ide'IA - Inteligencia Artificial & Inovacao",
  description:
    "Transformamos ideias em solucoes inteligentes com IA. Startup focada em inovacao e tecnologia de ponta.",
  keywords: ["IA", "Inteligencia Artificial", "Startup", "Inovacao", "Tecnologia"],
  authors: [{ name: "Ide'IA" }],
  verification: {
    google: "QCwL2kdPhzGVa6_naa0ybd_t1yIOCv8HaI4Fq1QZe6o",
  },
  openGraph: {
    title: "Ide'IA - Inteligencia Artificial & Inovacao",
    description: "Transformamos ideias em solucoes inteligentes com IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
