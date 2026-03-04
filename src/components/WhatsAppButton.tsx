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
            className="fixed bottom-6 left-6 z-[9999] w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        >
            <Image
                src="/images/icon/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={56}
                height={56}
                className="w-full h-full"
            />
        </Link>
    );
}
