import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://play-samjh.vercel.app"),
  title: "SAMJH - Can You Survive Indian Society?",
  description: "A 3D satirical Indian social intelligence game built for reels, result cards, and chaotic group-chat challenges.",
  openGraph: {
    title: "SAMJH - The Indian Social Intelligence Game",
    description: "You have IQ. But can you survive Indian society?",
    url: "https://play-samjh.vercel.app",
    siteName: "SAMJH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMJH - Can You Survive Indian Society?",
    description: "Play, get roasted, discover your persona, and challenge a friend."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
