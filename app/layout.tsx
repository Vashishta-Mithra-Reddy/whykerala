import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header";


const satoshi = localfont({
  variable: "--font-satoshi",
  weight: "900",
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Why Kerala?",
  description: "Now we'll look into reasons on why to visit Kerala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
        <Header />
        <main className="bg-redx/80 dark:bg-redx/50 rounded-b-3xl md:rounded-b-4xl">
        {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
