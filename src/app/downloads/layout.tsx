import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Downloads | ZeeQue Preschool",
    description: "Download essential resources, forms, curriculum details, and educational materials from ZeeQue Preschool.",
    keywords: ["ZeeQue Preschool downloads", "preschool forms", "educational resources", "ZeeQue curriculum pdf", "admission forms"],
    openGraph: {
        title: "Downloads | ZeeQue Preschool",
        description: "Access and download all necessary documents and resources for ZeeQue Preschool.",
        url: "https://zeeque.in/downloads",
        siteName: "ZeeQue Preschool",
        type: "website",
    },
    alternates: {
        canonical: "https://zeeque.in/downloads",
    }
};

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
