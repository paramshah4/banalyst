import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import HeaderSimple from "./_components/HeaderSimple";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verus Intelligence",
  description: "Automated AI Due Diligence for Private Equity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <section>
        <MantineProvider>
        <HeaderSimple />
        {children}</MantineProvider>
      </section>
      </body>
    </html>
  );
}
