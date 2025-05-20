import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from '@/components/header';
import NavigationComponent from '@/components/navigation';
import SubscribeComponent from '@/components/subscribe';
import FooterComponent from '@/components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guns | 1911 Pistols, Rifles, Shotguns & Handguns | Rock Island Armory ",
  description: "With 30 years of bringing innovative firearms to the U.S at great prices, Armscor deliver guns that are affordable and solid as a rock.",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('test');
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid homepage-container">
          <HeaderComponent />
          <div className="body">
            <NavigationComponent />
            {children}
            <SubscribeComponent />
          </div>          
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
