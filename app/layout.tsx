import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Guide",
  description: "Coffee brewing guides and espresso setup tutorials",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-icon.png",
  },
  manifest: "/icons/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icons/favicon-96x96.png" sizes="96x96" type="image/png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="apple-touch-icon-precomposed" href="/icons/apple-icon-precomposed.png" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/icons/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/icons/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/icons/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
