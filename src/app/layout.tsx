import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Provider from "@/components/layout/provider";
import { Toaster } from "sonner";
import { Suspense } from "react";

// Load Google Fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Eagle Eye",
  description: "An AI-powered API to detect deepfakes in real time and log every incident securely on the blockchain, ensuring tamper-proof protection for your digital ecosystem.",
  icons:{
    icon: "/favicon.ico",
    apple: "/logo.png",
    other: [
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "32x32",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Provider >
          <Suspense fallback={<div></div>}>
            {children}
          </Suspense>
        </Provider>
        <Toaster/>
      </body>
    </html>
  );
}
