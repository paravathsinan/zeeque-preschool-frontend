import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms and Conditions | ZeeQue Islamic Montessori Kerala",
  description: "Read the terms and conditions for ZeeQue Preschool admission, enrollment, and services. Information on school policies, fees, and privacy for parents and guardians.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "ZeeQue Preschool Terms & Conditions — Our Commitment to Quality and Values",
    description: "Read our terms and conditions for ZeeQue Preschool services.",
    type: "website",
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
