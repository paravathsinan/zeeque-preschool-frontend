"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
    const pathname = usePathname();
    
    // Hide on admin dashboard pages
    if (pathname?.startsWith("/admin-dashboard")) return null;

    return (
        <Link
            href="https://wa.me/919072500435"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-8 left-8 z-[105] md:z-[9999] w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center hide-on-modal"
        >
            <Image
                src="/images/icons/whatsapp-svgrepo-com.svg"
                alt="Chat with us on WhatsApp"
                width={56}
                height={56}
                className="w-full h-full"
            />
        </Link>
    );
}
