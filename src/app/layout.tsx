import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {Navbar} from "./ui/Navbar/Navbar";
import Head from "next/head";

const poppins = Poppins({subsets: ["latin"], weight: ["200", "400", "600"]});

export const metadata: Metadata = {
  title: "Pictogram",
  description: "Open-source gallery web app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        {children}
        <footer>© 2024 Mukkund Sunjii</footer>
      </body>
    </html>
  );
}
