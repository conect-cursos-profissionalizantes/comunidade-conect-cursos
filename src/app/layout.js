import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosProvider from "./_components/aosProvider.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Conect Cursos Profissionalizantes",
  description: "Entre para a comunidade e vem ser Conect!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-cyan-50 bg-primary`}
      >
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
