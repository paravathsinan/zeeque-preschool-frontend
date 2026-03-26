import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Islamic Montessori Curriculum | ZeeQue Preschool Kerala — LZQ, MZQ, UZQ",
  description: "Explore ZeeQue's unique Islamic Montessori curriculum. A trilingual, play-based approach combining Quranic wisdom with modern ECCE standards for children aged 3–6 across Kerala.",
  openGraph: {
    title: "Islamic Montessori Curriculum | ZeeQue Preschool Kerala",
    description: "ZeeQue's curriculum blends Islamic values, Montessori methods, and trilingual mastery (Arabic, English, Malayalam) for a stress-free, joyful learning experience.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5725 (2) - Copy.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Curriculum Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Montessori Curriculum | ZeeQue Preschool Kerala",
    description: "ZeeQue's unique curriculum: Islamic values + Montessori + Trilingual mastery for ages 3–6.",
    images: ["/images/gallery/gallery photos/IMG_5725 (2) - Copy.JPG"],
  },
}

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return children
}
