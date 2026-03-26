import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Preschool Teacher Training Kerala | ZeeQue Diploma in ECCE — Apply Now",
  description: "Join ZeeQue's professional preschool teacher training program in Kerala. 6-month Diploma in ECCE with residential options. Modern pedagogy, Islamic values, and 100% placement support. Enroll now.",
  openGraph: {
    title: "Preschool Teacher Training Kerala | ZeeQue Diploma in ECCE — Apply Now",
    description: "Empowering future educators. ZeeQue's 6-month Diploma in ECCE combines modern early childhood pedagogy with Islamic values. Join Kerala's premier teacher training network.",
    images: [{ url: "/images/gallery/gallery photos/IMG_5744 (2) - Copy.JPG", width: 1200, height: 630, alt: "ZeeQue Preschool Teacher Training Kerala" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Teacher Training Kerala | ZeeQue Diploma in ECCE",
    description: "ZeeQue's 6-month Diploma in ECCE. Modern pedagogy + Islamic values. Join now.",
    images: ["/images/gallery/gallery photos/IMG_5744 (2) - Copy.JPG"],
  },
}

export default function TeacherTraineesLayout({ children }: { children: React.ReactNode }) {
  return children
}
