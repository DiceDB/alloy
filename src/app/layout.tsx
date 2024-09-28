import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Dice Playground",
  description: "",
  icons: {
    icon: "https://dicedb.io/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
