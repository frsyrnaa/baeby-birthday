import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baeby's Birthday Date · 04 October 2026",
  description:
    "A private birthday date invitation for my Baeby: vintage romance, warm moments, and heartfelt memories.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Baeby's Birthday Date",
    description: "a little day made just for you · 04 October 2026",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3B0D16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#2A1F1B] text-[#3A2922] font-serif selection:bg-[#5A1722] selection:text-[#F3E8D0]">
        {children}
      </body>
    </html>
  );
}
