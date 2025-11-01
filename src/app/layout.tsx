import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Pacifico, Noto_Serif, Dancing_Script } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
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
  subsets: ['latin'],
  variable: '--font-inter', //variable name
});

// Setup Pacifico (decorative font) <-- NEW BLOCK
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], // Pacifico only has weight 400
  variable: '--font-pacifico', // variable
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], // Add desired weights
  variable: '--font-noto-serif', // Assign variable
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights if needed
  variable: '--font-dancing-script', // variable name
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
        className = {`${inter.variable} ${pacifico.variable} ${notoSerif.variable} ${dancingScript.variable} font-sans`}
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
