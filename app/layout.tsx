import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>App Bar</title>
        <link rel="icon" type="image/x-icon" href="/favicon.io" />
        <script src="https://kit.fontawesome.com/49bdd08b45.js"></script>
        <meta name="description" content="App Bar effect" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
