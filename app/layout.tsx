import type { Metadata } from "next";
import { Nunito, Josefin_Sans } from 'next/font/google';

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCanonicalUrl } from "@/utils";

const inter = Nunito({ subsets: ["latin"] });
const cuteFont = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalUrl()),
  title: "Easy Sell",
  description: "Sell your product easily",
  openGraph: {
    images: ['https://easy-sell-app.vercel.app/assets/og-image.png'],
  },
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header font={cuteFont.className} />
        <div className="bg-gray-951">{children}</div>
        <Footer font={cuteFont.className}/>
        </body>
    </html>
  );
}
