import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Why ZeeQue is the Best Preschool in Kerala — Features & Highlights",
  description: "Discover what makes ZeeQue the best preschool in Kerala — 3 mentors per class, trilingual education, stress-free Montessori curriculum, Islamic values integration, and world-class campus facilities.",
  openGraph: {
    title: "Why ZeeQue is the Best Preschool in Kerala — Features & Highlights",
    description: "3 mentors per class, trilingual education, Islamic values, stress-free Montessori learning — discover why ZeeQue is Kerala's most trusted preschool for children aged 3–6.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5246.JPG", width: 1200, height: 630, alt: "Features of ZeeQue Preschool Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why ZeeQue is the Best Preschool in Kerala — Features",
    description: "3 mentors per class, trilingual education, Islamic values, Montessori curriculum — why ZeeQue is Kerala's most trusted preschool for ages 3–6.",
    images: ["/images/gallery/gallery photos/IMG_5246.JPG"],
  },
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
