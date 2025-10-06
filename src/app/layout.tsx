import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Guide",
  description: "Coffee brewing guides and espresso setup tutorials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
