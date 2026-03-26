import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Teacher Training for Grade Level (TTGS) | ZeeQue Kerala",
  description: "Specialized residential training for English Medium Primary Madrasa teachers. Join ZeeQue's TTGS program to master modern pedagogy and Islamic values integration. 100% placement for qualifying candidates.",
  openGraph: {
    title: "ZeeQue TTGS — Teacher Training for Grade Level (Residential Program)",
    description: "Empowering primary madrasa teachers. Our TTGS program provides intensive residential training in modern teaching methods and Islamic values.",
    images: [{ url: "/images/gallery/IMG_5316.JPG", width: 1200, height: 630, alt: "ZeeQue TTGS Teacher Training Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeQue TTGS — Teacher Training for Grade Level (Residential Program)",
    description: "Residential training for Madrasa teachers. Modern pedagogy + Islamic values.",
    images: ["/images/gallery/IMG_5316.JPG"],
  },
}

export default function TTGSLayout({ children }: { children: React.ReactNode }) {
  return children
}
