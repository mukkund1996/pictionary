import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {Navbar} from "./ui/Navbar/Navbar";

const poppins = Poppins({subsets: ["latin"], weight: ["200", "400", "600"]});

export const metadata: Metadata = {
  title: "Pictogram",
  description: "Open-source gallery web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <link rel="icon" href="/images/rahul.png" sizes="any" />
        <Navbar />
        {children}
        <footer>© 2024 Mukkund Sunjii</footer>
      </body>
    </html>
  );
}
