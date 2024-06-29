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
        <meta name="description" content="App Bar effect" />
      </head>
      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          height: "100vh",
          background: "linear-gradient(135deg, #73deff 10%, #fff9d2)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
