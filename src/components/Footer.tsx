"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight, Send, CheckCircle2, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const companyLinks = [
    { label: "About Us", href: "/about-zeeque-preschool-kerala" },
    { label: "Our Features", href: "/best-preschool-features-kerala" },
    { label: "Programs", href: "/preschool-programs-kerala" },
    { label: "Curriculum", href: "/preschool-curriculum-kerala" },
    { label: "Admissions 2026", href: "/preschool-admission-kerala-2026" },
    { label: "News & Events", href: "/events" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }
        return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Restrict phone input to numbers only
        if (name === "phone") {
            const onlyNums = value.replace(/[^0-9]/g, "");
            setFormData((prev) => ({ ...prev, [name]: onlyNums }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        if (isSubmitted) {
            const validationErrors = validate();
            setErrors((prev) => ({ ...prev, [name]: validationErrors[name] || "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setShowSuccess(true);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <footer className="relative overflow-hidden">

            {/* Main Footer */}
            <div className="bg-[#1a1a2e] pt-20 pb-12 relative">

                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                {/* Decorative floating shapes */}
                <div className="absolute top-8 right-[10%] w-16 h-16 rounded-full border-4 border-dotted border-[#fbaf01]/15 pointer-events-none hidden lg:block" />
                <div className="absolute bottom-24 left-[5%] w-10 h-10 rounded-full bg-[#c13088]/10 pointer-events-none hidden lg:block" />

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Column 1: Logo & Contact Info */}
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/images/logo/logo-new.svg"
                                    alt="Zeeque Preschool - Islamic Studies & Montessori Education in Kozhikode, Kerala."
                                    width={140}
                                    height={55}
                                    className="object-contain"
                                />
                            </Link>

                            <div className="space-y-4 mb-8">
                                <a
                                    href="https://maps.google.com/?q=Zahra+Park+Koduvally+Kozhikode+Kerala+India+673572"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-[#ef4225]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ef4225]/20 transition-colors">
                                        <MapPin className="w-4 h-4 text-[#ef4225]" />
                                    </div>
                                    <p className="text-gray-400 font-body text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        Head Quarters - Zahra Park, Koduvally,<br />
                                        Kozhikode, Kerala, India - 673572
                                    </p>
                                </a>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#3FB7E5]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3FB7E5]/20 transition-colors">
                                        <Phone className="w-4 h-4 text-[#3FB7E5] group-hover:animate-ringing origin-center transition-transform" />
                                    </div>
                                    <div className="text-gray-400 font-body text-sm group-hover:text-gray-300 transition-colors">
                                        <a href="tel:+919072500435" className="block hover:text-[#3FB7E5] transition-colors">+91 9072 500 435</a>
                                        <a href="tel:04952214005" className="text-gray-500 text-xs hover:text-[#3FB7E5] transition-colors block">Land: 0495 221 4005</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#0b8641]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0b8641]/20 transition-colors">
                                        <Mail className="w-4 h-4 text-[#0b8641]" />
                                    </div>
                                    <a href="mailto:zqnetwork@zeeque.in" className="text-gray-400 font-body text-sm hover:text-[#0b8641] transition-colors">
                                        zqnetwork@zeeque.in
                                    </a>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                <a href="https://facebook.com/zeequepreschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/20">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="https://instagram.com/zeeque_preschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e6683c]/20">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="https://twitter.com/markazonline" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-black flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/20">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239h-2.19L17.607 20.65z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/company/zeeque-preschool-network" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/20">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="https://youtube.com/zeequepreschool" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF0000] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/20">
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Company Links */}
                        <div>
                            <h3 className="font-heading font-bold text-white text-lg mb-6 relative">
                                Our Company
                                <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-[#ef4225] rounded-full" />
                            </h3>

                            <ul className="space-y-3">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-gray-400 font-body text-[15px] hover:text-white transition-colors duration-300"
                                        >
                                            <ArrowRight className="w-3.5 h-3.5 text-[#ef4225] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Enquire Now Form */}
                        <div>
                            <h3 className="font-heading font-bold text-white text-lg mb-6 relative">
                                Enquire Now
                                <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-[#ef4225] rounded-full" />
                            </h3>

                            <form className="space-y-3" onSubmit={handleSubmit} noValidate>
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        id="footer-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        autoComplete="name"
                                        placeholder="Your Name"
                                        className={`w-full bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300`}
                                    />
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.span
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="block text-[#ef4225] text-[10px] font-bold uppercase tracking-widest pl-2"
                                            >
                                                {errors.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        id="footer-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        autoComplete="email"
                                        placeholder="Your Email"
                                        className={`w-full bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300`}
                                    />
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.span
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="block text-[#ef4225] text-[10px] font-bold uppercase tracking-widest pl-2"
                                            >
                                                {errors.email}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="space-y-1">
                                    <input
                                        type="tel"
                                        id="footer-phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        autoComplete="tel"
                                        placeholder="Your Phone"
                                        maxLength={10}
                                        className={`w-full bg-white/5 border ${errors.phone ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300`}
                                    />
                                    <AnimatePresence>
                                        {errors.phone && (
                                            <motion.span
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="block text-[#ef4225] text-[10px] font-bold uppercase tracking-widest pl-2"
                                            >
                                                {errors.phone}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <textarea
                                    id="footer-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message"
                                    rows={3}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 font-body focus:outline-none focus:border-[#ef4225]/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex items-center justify-center gap-2 bg-[#ef4225] text-white px-8 py-3 rounded-xl font-heading font-bold text-sm uppercase tracking-wider hover:bg-[#d93a1e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ef4225]/30 hover:scale-[1.02] w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isSubmitting ? (
                                        <>
                                            Processing...
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Submit Now
                                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-[#12121f] py-5">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-gray-500 font-body text-sm">
                        All Rights Reserved by <span className="text-[#ef4225] font-medium">Zeeque Preschool</span> - 2013 to 2026
                    </p>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <Link href="/terms-and-conditions" className="text-gray-500 font-body text-sm hover:text-white transition-colors">
                            Terms and Conditions
                        </Link>
                        <Link href="/privacy-policy" className="text-gray-500 font-body text-sm hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
            {/* Success Modal Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center px-4 bg-[#1a1a2e]/60 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 max-w-lg w-full shadow-[0_32px_64px_rgba(0,0,0,0.2)] relative overflow-hidden"
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4225]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3FB7E5]/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors group"
                            >
                                <X className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                            </button>

                            <div className="text-center relative z-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 15 }}
                                    className="w-20 h-20 bg-[#0fb85c] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#0fb85c]/30"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </motion.div>

                                <h3 className="font-heading font-extrabold text-[#222] dark:text-white text-3xl mb-4">
                                    Warm Greetings!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 font-body text-lg leading-relaxed mb-10">
                                    Thank you for reaching out. We&apos;ve received your enquiry and our team is excited to help you explore the perfect learning path for your child. We&apos;ll get in touch with you within the next <span className="text-[#ef4225] font-bold">24 hours</span> to discuss your requirements.
                                    <br /><br />
                                    <span className="text-sm text-gray-500 italic block">
                                        If you don&apos;t hear from us within that time, feel free to contact us through WhatsApp or call at <a href="tel:+919072500435" className="text-[#3FB7E5] font-bold hover:underline">+91 9072 500 435</a>.
                                    </span>
                                </p>

                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="w-full bg-[#1a1a2e] dark:bg-white dark:text-[#1a1a2e] text-white py-4 rounded-2xl font-heading font-extrabold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gray-200 dark:shadow-none"
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
