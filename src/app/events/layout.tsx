import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Preschool Events & News Kerala | ZeeQue Islamic Montessori",
  description: "Stay updated with the latest events, annual days, and educational workshops at ZeeQue Preschool centers in Kerala. Explore our vibrant school community activities and news.",
  openGraph: {
    title: "Preschool Events & News Kerala | ZeeQue Islamic Montessori",
    description: "Celebrating every milestone. Check out the latest events and news from ZeeQue Preschool, India's fastest-growing Islamic Montessori network.",
    images: [{ url: "/images/gallery/IMG_5316.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Events and News" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Events & News Kerala | ZeeQue Islamic Montessori",
    description: "Latest events and news from ZeeQue Preschool Kerala. Celebrating joyful learning.",
    images: ["/images/gallery/IMG_5316.JPG"],
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
