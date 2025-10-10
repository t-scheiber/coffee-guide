import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Guide",
  description: "Coffee brewing guides and espresso setup tutorials",
  icons: {
    icon: [
      { url: "/coffee-guide-favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/coffee-guide-favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/coffee-guide-favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/coffee-guide-favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/coffee-guide-favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/coffee-guide-favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/coffee-guide-favicon/apple-icon-precomposed.png" },
    ],
  },
  manifest: "/coffee-guide-favicon/manifest.json",
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/coffee-guide-favicon/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/coffee-guide-favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/coffee-guide-favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/coffee-guide-favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/coffee-guide-favicon/favicon-96x96.png" sizes="96x96" type="image/png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/coffee-guide-favicon/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/coffee-guide-favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/coffee-guide-favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/coffee-guide-favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/coffee-guide-favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/coffee-guide-favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/coffee-guide-favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/coffee-guide-favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/coffee-guide-favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/coffee-guide-favicon/apple-icon-180x180.png" />
        <link rel="apple-touch-icon-precomposed" href="/coffee-guide-favicon/apple-icon-precomposed.png" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/coffee-guide-favicon/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/coffee-guide-favicon/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/coffee-guide-favicon/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/coffee-guide-favicon/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/coffee-guide-favicon/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/coffee-guide-favicon/android-icon-192x192.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/coffee-guide-favicon/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/coffee-guide-favicon/browserconfig.xml" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/coffee-guide-favicon/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
