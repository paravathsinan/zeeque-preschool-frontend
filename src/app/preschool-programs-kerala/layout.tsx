import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Preschool Programs in Kerala | ZeeQue LZQ, MZQ, UZQ — Ages 3 to 6",
  description: "Explore ZeeQue's three-stage preschool programs for children aged 3–6 — LZQ (3–4 yrs), MZQ (4–5 yrs), UZQ (5–6 yrs). Islamic Montessori curriculum, Grade Stream, teacher training and parent empowerment programs.",
  openGraph: {
    title: "Preschool Programs in Kerala | ZeeQue — LZQ, MZQ, UZQ for Ages 3–6",
    description: "ZeeQue's flagship 3-year kindergarten program takes children through LZQ, MZQ, and UZQ stages — building academic strength, Islamic values, and lifelong confidence.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5744 (2) - Copy.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Programs Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Programs in Kerala | ZeeQue — Ages 3–6",
    description: "ZeeQue's 3-year KG program (LZQ, MZQ, UZQ) for ages 3–6. Islamic Montessori curriculum across Kerala.",
    images: ["/images/gallery/gallery photos/IMG_5744 (2) - Copy.JPG"],
  },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children
}
