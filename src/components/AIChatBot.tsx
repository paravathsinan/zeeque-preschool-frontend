"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Volume2, VolumeX } from "lucide-react";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

const quickActions = [
    { label: "Admission Info", response: "Our admissions are currently open! You can apply online at admission.zeeque.in or visit our campus at Zahra Park, Koduvally, Kozhikode. We accept children from ages 2 to 6. Would you like to know more about the admission process?" },
    { label: "Programs", response: "We offer comprehensive early childhood programs including Playgroup (2-3 yrs), Nursery (3-4 yrs), LKG (4-5 yrs), and UKG (5-6 yrs). Each program includes trilingual education, creative arts, physical development, and Islamic values education." },
    { label: "Contact Us", response: "You can reach us at:\n📞 Phone: +91 9072500435\n📧 Email: contact@zeeque.in\n📍 Address: Zahra Park, Koduvally, Kozhikode, Kerala - 673572\n\nOur team is available to assist you!" },
    { label: "Fee Structure", response: "For detailed fee information, please contact our admissions team at +91 9072500435 or visit our campus. We offer flexible payment plans and early-bird discounts for advance registrations." },
];

const welcomeMessage: Message = {
    id: 0,
    text: "Hi! 👋 I'm Zeeque's AI assistant. How can I help you today?",
    isBot: true,
};

export default function AIChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
    const [inputText, setInputText] = useState("");
    const [isMuted, setIsMuted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Audio refs
    const sendSound = useRef<HTMLAudioElement | null>(null);
    const receiveSound = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio objects with softer, standard messaging pop sounds
        sendSound.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2364/2364-preview.mp3'); // soft click/send pop
        receiveSound.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3'); // soft ping/receive pop
    }, []);

    const playSound = useCallback((type: 'send' | 'receive') => {
        if (isMuted) return;

        try {
            if (type === 'send' && sendSound.current) {
                sendSound.current.currentTime = 0;
                sendSound.current.play().catch(e => console.log('Audio play failed:', e));
            } else if (type === 'receive' && receiveSound.current) {
                receiveSound.current.currentTime = 0;
                receiveSound.current.play().catch(e => console.log('Audio play failed:', e));
            }
        } catch (error) {
            console.log('Audio playback error', error);
        }
    }, [isMuted]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleQuickAction = (action: typeof quickActions[0]) => {
        playSound('send');
        const userMsg: Message = { id: Date.now(), text: action.label, isBot: false };
        setMessages((prev) => [...prev, userMsg]);

        setTimeout(() => {
            playSound('receive');
            const botMsg: Message = { id: Date.now() + 1, text: action.response, isBot: true };
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
    };

    const handleSend = () => {
        if (!inputText.trim()) return;
        playSound('send');
        const userMsg: Message = { id: Date.now(), text: inputText, isBot: false };
        setMessages((prev) => [...prev, userMsg]);
        setInputText("");

        setTimeout(() => {
            playSound('receive');
            const botMsg: Message = {
                id: Date.now() + 1,
                text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to use the quick action buttons above for instant answers.",
                isBot: true,
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 800);
    };

    return (
        <>
            {/* Chat Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed bottom-8 right-8 z-[110] w-[360px] h-[480px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary via-[#e83e8c] to-[#7c3aed] p-5 flex items-center gap-3 shrink-0">
                            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-heading font-bold text-white text-sm">Zeeque AI Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-white/70 text-xs font-body">Online</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    title={isMuted ? "Unmute sounds" : "Mute sounds"}
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-4 h-4 text-white/80" />
                                    ) : (
                                        <Volume2 className="w-4 h-4 text-white/80" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-800/50">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-body leading-relaxed whitespace-pre-line ${msg.isBot
                                            ? "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-bl-md shadow-sm border border-gray-100 dark:border-slate-600"
                                            : "bg-gradient-to-r from-primary to-[#e83e8c] text-white rounded-br-md shadow-md"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        {(
                            <div className="px-4 py-3 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0">
                                <p className="text-xs text-gray-400 dark:text-gray-500 font-body mb-2">Quick actions</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.label}
                                            onClick={() => handleQuickAction(action)}
                                            className="px-3 py-1.5 rounded-full text-xs font-heading font-bold bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 transition-all"
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0">
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-2xl px-4 py-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none font-body"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputText.trim()}
                                    className="w-9 h-9 rounded-xl bg-gradient-to-r from-primary to-[#e83e8c] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform disabled:opacity-40 disabled:hover:scale-100 shrink-0"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tooltip Popup */}
            <AnimatePresence>
                {showPopup && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="fixed bottom-[114px] right-8 z-[110] cursor-pointer group/tooltip perspective-1000"
                        onClick={() => {
                            setIsOpen(true);
                            setShowPopup(false);
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-4 pr-12 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/40 dark:border-slate-700/40 flex items-start gap-4 w-max max-w-[340px] group-hover/tooltip:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] transition-all duration-300"
                        >
                            <div className="flex flex-col mt-0.5">
                                <span className="text-[15px] font-extrabold text-gray-800 dark:text-gray-100 font-heading leading-tight mb-1">
                                    Have doubts?
                                </span>
                                <span className="text-[13px] text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                                    Ask <strong className="font-bold text-gray-800 dark:text-white">Zeeque AI Assistant</strong> about our admissions, trilingual programs, or fee structures.
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPopup(false);
                                }}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 bg-white/40 hover:bg-white/80 dark:text-gray-300 dark:hover:text-white dark:bg-slate-700/40 dark:hover:bg-slate-700/80 transition-colors backdrop-blur-md border border-white/30 dark:border-slate-600/30"
                                aria-label="Close popup"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Triangle Pointer pointing down towards the FAB */}
                            <div className="absolute -bottom-2 right-[22px] w-4 h-4 bg-white/50 dark:bg-slate-800/50 transform rotate-45 border-b border-r border-white/40 dark:border-slate-700/40 backdrop-blur-xl"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button or Chat Popup */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="fab"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        whileHover={{ scale: 1.1, translateY: -3 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setIsOpen(true);
                            setShowPopup(false);
                        }}
                        className="fixed bottom-8 right-8 z-[100] w-[60px] h-[60px] rounded-full bg-[#4DB8FF] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(77,184,255,0.4)] hover:shadow-[0_12px_40px_rgba(77,184,255,0.6)] cursor-pointer group overflow-hidden border-2 border-white/20"
                        aria-label="Open AI chat"
                    >
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-full animate-ping bg-white/40" style={{ animationDuration: "2.5s" }} />

                        {/* Shimmer sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

                        {/* Inner glass ring */}
                        <div className="absolute inset-[3px] rounded-full border border-white/15" />

                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative z-10"
                        >
                            <MessageCircle className="w-6 h-6" />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
