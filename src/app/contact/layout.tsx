import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact ZeeQue — Best Preschool in Kerala | 152+ Branches",
  description: "Get in touch with ZeeQue Preschool's Head Office or find a branch near you. 152+ branches across Kerala. Join India's fastest-growing Islamic Montessori network. Contact us for admissions or franchising.",
  openGraph: {
    title: "Contact ZeeQue — Best Preschool in Kerala | 152+ Branches",
    description: "152+ branches across Kerala. Reach out to ZeeQue Preschool for 2026 admissions, franchising enquiries, or general support.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5316.JPG", width: 1200, height: 630, alt: "Contact ZeeQue Preschool Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ZeeQue — Best Preschool in Kerala",
    description: "152+ branches across Kerala. Reach out to ZeeQue Preschool for 2026 admissions or franchising.",
    images: ["/images/gallery/gallery photos/IMG_5316.JPG"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
