"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/919072500435"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 left-6 z-[105] md:z-[9999] w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        >
            <Image
                src="/images/icon/whatsapp-svgrepo-com.svg"
                alt="Contact Zeeque Preschool Kozhikode instantly via WhatsApp."
                width={56}
                height={56}
                className="w-full h-full"
            />
        </Link>
    );
}
