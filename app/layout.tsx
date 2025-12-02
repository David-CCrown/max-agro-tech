import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MaxAgroTech - Transforming Agriculture Through Digital Innovation",
  description: "MaxAgroTech revolutionizes the ginger value chain in Northern Nigeria with a unified platform connecting farmers to global markets. Experience 30% yield increase, 100% traceability, and direct market access.",
  keywords: ["agriculture", "agrotech", "digital farming", "ginger value chain", "Nigeria agriculture", "farm to market", "agricultural technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
