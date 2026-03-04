import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const kumbhSans = localFont({
  src: "../../public/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.ttf",
  variable: "--font-kumbh-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "India's Fastest Growing Islamic Preschool Network | ZeeQue",
  description: "Zeeque Preschool - A unique and state-of-the-art Early Childhood Care and Education program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
