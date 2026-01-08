import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileEliteCTA } from '@/components/ui/mobile-elite-cta';
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FoxTrove.ai | AI Implementation for Elite Service Businesses",
  description: "Stop losing revenue to missed calls and manual processes. Custom AI voice agents and operational systems for Home Services, Med Spas, and Construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${ibmPlex.variable} font-sans bg-primary text-text-main min-h-screen antialiased flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <MobileEliteCTA />
      </body>
    </html>
  );
}

