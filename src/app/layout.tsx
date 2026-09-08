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
    default: "I LOVE MONEY LTD",
    template: "%s · I LOVE MONEY LTD",
  },
  description:
    "I LOVE MONEY LTD is a UK software publishing company. Company number 17446881. Registered in England and Wales.",
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
