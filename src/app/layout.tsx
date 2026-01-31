import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Looksmax Plus",
  description: "Become better looking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
