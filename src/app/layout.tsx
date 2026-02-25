import type { Metadata } from "next";
import { Nunito, Pangolin } from "next/font/google";
import "./globals.css";

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
  title: "Kidscholl - Happy Place Where Little Mind Grow Bright",
  description: "Preschool website template built with Next.js",
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
      </body>
    </html>
  );
}
