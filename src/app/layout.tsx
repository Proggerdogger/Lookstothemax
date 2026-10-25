import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MoneyBackground from "@/components/MoneyBackground";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nitro: AI Car & Video · I LOVE MONEY LTD",
    template: "%s · I LOVE MONEY LTD",
  },
  description:
    "Nitro: AI Car & Video lets you design your dream car with AI and turn it into a video reel. Published by I LOVE MONEY LTD, a UK software company founded by Adrian Smark. Company number 17446881.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body className="relative min-h-screen font-sans antialiased">
        <MoneyBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
