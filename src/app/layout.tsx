import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0xPSW // Pyae Sone Win",
  description:
    "Penetration Tester & Full-Stack Developer. HTB write-ups, bug bounty research, and offensive security notes.",
  keywords: [
    "pentester",
    "cybersecurity",
    "hack the box",
    "tryhackme",
    "bug bounty",
    "OSCP",
    "writeups",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="scanlines min-h-full flex flex-col font-mono">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
