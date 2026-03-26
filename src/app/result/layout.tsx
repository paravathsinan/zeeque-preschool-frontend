import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ZeeQue Entrance Test (ZET) Results 2026 — Check Online",
  description: "Check your ZeeQue Entrance Test (ZET) 2026 results online. Enter your child's registration details to view admission status and next steps for enrollment.",
  openGraph: {
    title: "ZeeQue Entrance Test (ZET) Results 2026 — Check Online",
    description: "ZET 2026 results are now available. Check your status and welcome your child to the ZeeQue learning community.",
    images: [{ url: "/images/gallery/IMG_5316.JPG", width: 1200, height: 630, alt: "ZeeQue Entrance Test Results" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeQue Entrance Test (ZET) Results 2026 — Check Online",
    description: "ZET 2026 results are now available online.",
    images: ["/images/gallery/IMG_5316.JPG"],
  },
}

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return children
}
