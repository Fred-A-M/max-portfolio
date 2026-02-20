import type { Metadata } from "next";
import { americaMono, geistMono } from './ui/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "MAX RAWLINS",
  description: "Graphic Designer",
  metadataBase: new URL('https://www.something.com'),
  openGraph: {
    title: 'MAX RAWLINS',
    description: 'Graphic Designer',
    images: [
      {
        url: '/rat.png',
        width: 1200,
        height: 676,
        alt: 'Max Rawlins - Very Good Boy',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/rat.png',
    apple: '/rat.png',
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
        className={`${americaMono.variable} ${geistMono.variable} ${americaMono.className} antialiased text-xs sm:text-sm`}
      >
        {children}
      </body>
    </html>
  );
}
