import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const kumbhSans = localFont({
  src: "../../public/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.ttf",
  variable: "--font-kumbh-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeeque Preschool - Happy Place Where Little Minds Grow Bright",
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
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
