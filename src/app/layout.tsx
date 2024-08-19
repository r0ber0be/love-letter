import type { Metadata } from "next";
import { Lobster_Two } from "next/font/google";
import "./globals.css";

const lobsterTwo = Lobster_Two({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Love Letter",
  description: "Share love with someone you care about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lobsterTwo.className}>
        {children}
      </body>
    </html>
  );
}
