import type { Metadata } from "next";
import { Quicksand, Luckiest_Guy, Courgette } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChatBot from "@/components/AIChatBot";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
  display: "swap",
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Titan+One&family=Fredoka+One&family=Courgette&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${quicksand.className} ${quicksand.variable} ${luckiestGuy.variable} ${courgette.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <AIChatBot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
