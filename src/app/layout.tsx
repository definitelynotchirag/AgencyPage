import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import Navbar from "@/components/ui/navbar";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STAGLABS | Modern Web Agency",
  description: "Futuristic web development agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ScrollProgress />
        <SmoothScroll>
          <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* Striped Dark Background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
              }}
            />
            <div className="absolute inset-0 dither-bg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          </div>

          <div className="relative z-20">
            <CustomCursor />
            <Navbar />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
