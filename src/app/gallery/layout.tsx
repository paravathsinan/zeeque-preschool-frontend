import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image Gallery | ZeeQue Preschool",
    description: "Explore the beautiful moments and joyful learning experiences at ZeeQue Preschool through our image gallery. See our classrooms, events, and happy children.",
    keywords: ["ZeeQue Preschool gallery", "preschool photos", "kindergarten images", "preschool activities pictures", "happy kids learning", "early childhood education gallery"],
    openGraph: {
        title: "Image Gallery | ZeeQue Preschool",
        description: "A glimpse into the daily joy, learning, and colorful events at ZeeQue Preschool. View our beautiful photo gallery.",
        url: "https://zeeque.in/gallery",
        siteName: "ZeeQue Preschool",
        type: "website",
    },
    alternates: {
        canonical: "https://zeeque.in/gallery",
    }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
