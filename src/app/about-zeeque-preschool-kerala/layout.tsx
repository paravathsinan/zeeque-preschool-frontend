import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About ZeeQue — Best Islamic Montessori Preschool in Kerala Since 2013",
  description: "Learn about ZeeQue Preschool — Kerala's fastest growing Islamic Montessori preschool network. Established 2013. Play-based learning, trilingual education, and Islamic values for children aged 3–6.",
  openGraph: {
    title: "About ZeeQue — Best Islamic Montessori Preschool in Kerala Since 2013",
    description: "ZeeQue Preschool has been nurturing children in Kerala since 2013 with Islamic values, Montessori methods, and play-based learning. Discover our story, approach, and what makes us different.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5316.JPG", width: 1200, height: 630, alt: "Children in class at ZeeQue Preschool" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ZeeQue — Islamic Montessori Preschool in Kerala Since 2013",
    description: "ZeeQue Preschool has been nurturing children in Kerala since 2013. Islamic values, Montessori methods, play-based learning for ages 3–6. Discover our story.",
    images: ["/images/gallery/gallery photos/IMG_5316.JPG"],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
