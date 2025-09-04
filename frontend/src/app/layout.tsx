import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Header from "./components/header"; // ✅ Correct import (capitalized)
import Footer from "./components/footer"; // ✅ Footer import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My dApp",
  description: "Powered by RainbowKit + Wagmi",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const cookie = headersList.get("cookie") || "";

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers cookie={cookie}>
          {/* ✅ Header visible on every page */}
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
