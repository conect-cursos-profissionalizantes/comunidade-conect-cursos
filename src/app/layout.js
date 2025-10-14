'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);


  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-cyan-50 bg-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
