import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNavbar from '../app/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Kaushik — AI Engineer, Entrepreneur & Creator",
  description: "AI Engineer with 2+ years of experience building intelligent systems, multi-agent frameworks, and scalable solutions. Entrepreneur, blogger, and lifelong learner.",
  keywords: ["AI Engineer", "Machine Learning", "Entrepreneur", "NexloreAI", "Full Stack Developer", "Aman Kaushik"],
  openGraph: {
    title: "Aman Kaushik — AI Engineer, Entrepreneur & Creator",
    description: "Building the future with AI. Engineer. Entrepreneur. Creator.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kaushik — AI Engineer, Entrepreneur & Creator",
    description: "Building the future with AI. Engineer. Entrepreneur. Creator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <FloatingNavbar/>
        {children}
      </body>
    </html>
  );
}
