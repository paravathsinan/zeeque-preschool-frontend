import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mission & Vision | ZeeQue Preschool — Building Confident Muslim Learners in Kerala",
  description: "Discover ZeeQue Preschool's mission and vision — to raise confident, compassionate, and academically strong Muslim children through Islamic Montessori education across Kerala.",
  openGraph: {
    title: "Mission & Vision | ZeeQue Preschool Kerala",
    description: "ZeeQue Preschool's mission — raising confident, compassionate, and academically strong children through Islamic values and Montessori education across Kerala.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5740 (2) - Copy.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Mission & Vision" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission & Vision | ZeeQue Preschool Kerala",
    description: "ZeeQue's mission — raising confident, compassionate Muslim learners through Islamic Montessori education in Kerala.",
    images: ["/images/gallery/gallery photos/IMG_5740 (2) - Copy.JPG"],
  },
}

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return children
}
