import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}
         ${geistMono.variable}
          antialiased
          overflow-y-scroll
          bg-[url('/background.webp')]
          bg-cover
          bg-no-repeat
          bg-fixed
          bg-top
          `}
      >
        <div className="max-w-[1100] p-4 md:p-10 mx-auto bg-background min-h-screen">
          <Header/>
         {children}
         <Footer/>
        </div>
      </body>
    </html>
  );
}
