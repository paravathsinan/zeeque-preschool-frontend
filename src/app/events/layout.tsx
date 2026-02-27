import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Celebrations | ZeeQue Preschool",
    description: "Discover the special events and celebrations at ZeeQue Preschool. From Alif day to colours day and sports day, we make every day special for our children.",
    keywords: ["ZeeQue Preschool events", "preschool celebrations", "Alif day", "family day", "sports day", "preschool activities", "early childhood education events"],
    openGraph: {
        title: "Events & Celebrations | ZeeQue Preschool",
        description: "At ZeeQue, every day is special. Explore our diverse range of educational events and celebrations.",
        url: "https://zeeque.in/events",
        siteName: "ZeeQue Preschool",
        type: "website",
    },
    alternates: {
        canonical: "https://zeeque.in/events",
    }
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
