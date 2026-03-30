import type { Metadata } from "next";
import { americaMono, geistMono } from './ui/fonts';
import "./globals.css";
import CustomCursor from './components/CustomCursor';


export const metadata: Metadata = {
  title: "MAX RAWLINS",
  description: "Graphic Designer",
  metadataBase: new URL('https://www.something.com'),
  openGraph: {
    title: 'MAX RAWLINS',
    description: 'Graphic Designer',
    images: [
      {
        url: '/cursor2.png',
        width: 450,
        height: 450,
        alt: 'Max Rawlins - Very Good Boy',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/cursor2.png',
    apple: '/cursor2.png',
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
        className={`${americaMono.variable} ${geistMono.variable} ${americaMono.className} antialiased text-xs leading-tight`}
      >
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
