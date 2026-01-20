import React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

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
        <Analytics />
      </body>
    </html>
  );
}
