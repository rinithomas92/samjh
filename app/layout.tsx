import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://play-samajh.vercel.app"),
  title: "SAMJH - The Indian Social Fitness Game",
  description: "A satirical social intelligence game for boundaries, self-image, pressure, and Indian society survival.",
  openGraph: {
    title: "SAMJH - The Indian Social Fitness Game",
    description: "You have IQ. But can you survive Indian society?",
    url: "https://play-samajh.vercel.app",
    siteName: "SAMJH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMJH - The Indian Social Fitness Game",
    description: "Play social simulations, get scored, discover your persona, and challenge a friend."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
