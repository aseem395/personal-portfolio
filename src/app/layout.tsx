import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/lib/ScrollProvider";
import NoiseOverlay from "@/components/NoiseOverlay";
import GridFrame from "@/components/GridFrame";
import CustomCursor from "@/components/CustomCursor";
import HudCoordinates from "@/components/HudCoordinates";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aseem | AI/ML & Systems Engineer",
  description: "AI/ML Engineer designing and optimizing deep learning architectures, scalable backend infrastructures, and predictive model systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} antialiased`}>
      <body className="flex flex-col font-sans bg-black text-white">
        <NoiseOverlay />
        <GridFrame />
        <CustomCursor />
        <HudCoordinates />
        <ScrollProvider>
          <main className="relative min-h-screen pt-[48px] pb-[64px] px-[24px] md:px-[40px]">
            {children}
          </main>
        </ScrollProvider>
      </body>
    </html>
  );
}
