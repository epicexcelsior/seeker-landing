import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GlobalEffects } from "@/components/GlobalEffects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Seeker Eats | The Future of Food Delivery",
  description: "Decentralized food delivery platform powered by Solana. Lower fees for restaurants, better pay for drivers, savings for customers.",
  keywords: ["food delivery", "solana", "crypto", "restaurant", "blockchain", "USDC"],
  openGraph: {
    title: "Seeker Eats | The Future of Food Delivery",
    description: "Decentralized food delivery powered by Solana blockchain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable,
        jetbrainsMono.variable,
        "font-sans antialiased bg-black text-white overflow-x-hidden selection:bg-seeker-gold selection:text-black"
      )}>
        <GlobalEffects />
        {children}
      </body>
    </html>
  );
}
