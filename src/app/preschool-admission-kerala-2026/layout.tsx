import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Preschool Admission Kerala 2026 | ZeeQue Islamic Montessori — Apply Now",
  description: "Admissions open for 2026 at ZeeQue Preschool centers across Kerala. Secure your child's seat for LZQ (3+ yrs), MZQ (4+ yrs), and UZQ (5+ yrs) programs. Safe, values-based Islamic Montessori education.",
  openGraph: {
    title: "Preschool Admission Kerala 2026 | ZeeQue Islamic Montessori — Apply Now",
    description: "Give your child the best start in 2026. Admissions open for ZeeQue's 3-year preschool programs across 152+ branches in Kerala. Limited seats — enquire today.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5740 (2) - Copy.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Admission 2026 Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Admission Kerala 2026 | ZeeQue Preschool",
    description: "Give your child the best start in 2026. Admissions open for ZeeQue's 3-year preschool programs across Kerala.",
    images: ["/images/gallery/gallery photos/IMG_5740 (2) - Copy.JPG"],
  },
}

export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return children
}
