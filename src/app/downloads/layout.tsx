import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Downloads | Preschool Parent Resources & Brochures — ZeeQue Kerala",
  description: "Download ZeeQue Preschool brochures, admission forms, and educational resources for parents. Access our trilingual curriculum overview and school policies in PDF format.",
  openGraph: {
    title: "Downloads | Preschool Parent Resources & Brochures — ZeeQue Kerala",
    description: "Access essential resources, forms, and curriculum details from ZeeQue Preschool in one place.",
    images: [{ url: "/images/gallery/IMG_5316.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Downloads" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Downloads | Preschool Parent Resources & Brochures — ZeeQue Kerala",
    description: "Download brochures and resources from ZeeQue Preschool.",
    images: ["/images/gallery/IMG_5316.JPG"],
  },
}

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children
}
