import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from './providers/ThemeProvider'; // <-- 1. Import ThemeProvider

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// This sets up the default font
const inter = Inter({ 
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "Likhith - Software Engineer",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "scroll-smooth" suppressHydrationWarning>
      <body
        className = {inter.className}
      >
        {/* <-- 3. Wrap Navbar and children with ThemeProvider --> */}
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
