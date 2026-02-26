import type { Metadata } from "next";
import { Nunito, Pangolin } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const pangolin = Pangolin({
  weight: "400",
  variable: "--font-pangolin",
  subsets: ["latin"],
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
        className={`${nunito.variable} ${pangolin.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
