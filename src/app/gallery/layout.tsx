import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Preschool Gallery | Real Photos of ZeeQue Islamic Montessori Kerala",
  description: "Explore real photos of ZeeQue Preschool classrooms, activities, and campus life across Kerala. See our joyful learning environment and Islamic Montessori facilities.",
  openGraph: {
    title: "Preschool Gallery | Real Photos of ZeeQue Islamic Montessori Kerala",
    description: "A window into our world. Browse our gallery for real school photos of children, activities, and facilities at ZeeQue Preschool.",
    images: [{ url: "/images/gallery/IMG_5369.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Gallery" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Gallery | Real Photos of ZeeQue Islamic Montessori Kerala",
    description: "Real school photos of kids and activities at ZeeQue Preschool Kerala.",
    images: ["/images/gallery/IMG_5369.JPG"],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
