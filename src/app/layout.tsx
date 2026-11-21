import type { Metadata } from "next";
import { Boldonse, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ternah · Rentals, simplified.",
  description:
    "Collect rent, sign leases, fix repairs. Built so the number one side sees is the number the other side sees too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${boldonse.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
