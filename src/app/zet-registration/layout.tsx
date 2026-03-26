import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ZeeQue Entrance Test (ZET) 2026 — Registration Open",
  description: "Register for the ZeeQue Entrance Test (ZET). Secure your child's place in Kerala's premier Islamic Montessori network. Online registration for the 2026-27 academic session is now active.",
  openGraph: {
    title: "ZeeQue Entrance Test (ZET) 2026 — Registration Open",
    description: "Apply now for ZET 2026. Join the ZeeQue Preschool family. Simple online registration process for new admissions.",
    images: [{ url: "/images/gallery/IMG_5316.JPG", width: 1200, height: 630, alt: "ZeeQue Entrance Test Registration" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeQue Entrance Test (ZET) 2026 — Registration Open",
    description: "Apply now for ZET 2026. Join the ZeeQue Preschool family.",
    images: ["/images/gallery/IMG_5316.JPG"],
  },
}

export default function ZETRegistrationLayout({ children }: { children: React.ReactNode }) {
  return children
}
