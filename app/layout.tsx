import type { Metadata } from "next";
import { Geist_Mono, Lato } from "next/font/google";
import DefaultLayout from "@/components/PageLayouts/DefaultLayout";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suzanne Frush | Product + Community",
  description: "Product manager, traveler, maker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Suzanne Frush | Product + Community</title>
      </head>
      <body className={`${lato.variable} ${geistMono.variable} bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-white`}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
