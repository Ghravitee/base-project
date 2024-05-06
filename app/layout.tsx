import type { Metadata } from "next";
import { Acme, Roboto } from "next/font/google";
import "./globals.css";

const acme = Acme({ subsets: ["latin"], weight: "400" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "The Blue",
  description: "The Blue on base",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${acme.className} ${roboto.variable} bg-black overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}
