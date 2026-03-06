"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

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
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleQuickAction = (action: typeof quickActions[0]) => {
        const userMsg: Message = { id: Date.now(), text: action.label, isBot: false };
        setMessages((prev) => [...prev, userMsg]);

        setTimeout(() => {
            const botMsg: Message = { id: Date.now() + 1, text: action.response, isBot: true };
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
    };

    const handleSend = () => {
        if (!inputText.trim()) return;
        const userMsg: Message = { id: Date.now(), text: inputText, isBot: false };
        setMessages((prev) => [...prev, userMsg]);
        setInputText("");

        setTimeout(() => {
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
                        className="fixed bottom-[6.5rem] right-8 z-[100] w-[360px] h-[480px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700"
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
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4 text-white" />
                            </button>
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
                        className="fixed bottom-[104px] right-8 z-[90] cursor-pointer group/tooltip perspective-1000"
                        onClick={() => {
                            setIsOpen(true);
                            setShowPopup(false);
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3 pr-10 rounded-[22px] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.2)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)] border border-white/50 dark:border-slate-700/50 flex items-center gap-3.5 w-max max-w-[280px] group-hover/tooltip:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.25)] transition-shadow duration-300"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#3A95E4] flex items-center justify-center shrink-0 shadow-inner">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-gray-800 dark:text-gray-100 font-heading leading-tight mb-0.5">
                                    Have doubts?
                                </span>
                                <span className="text-[12px] text-gray-500 dark:text-gray-400 font-body leading-tight">
                                    Ask our AI assistant
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPopup(false);
                                }}
                                className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-slate-700 transition-colors"
                                aria-label="Close popup"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Triangle Pointer pointing down towards the FAB */}
                            <div className="absolute -bottom-2 right-[22px] w-4 h-4 bg-white/95 dark:bg-slate-800/95 transform rotate-45 shadow-[4px_4px_10px_rgba(0,0,0,0.02)] border-b border-r border-white/50 dark:border-slate-700/50 backdrop-blur-md"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.1, translateY: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowPopup(false);
                }}
                className="fixed bottom-8 right-8 z-[100] w-[60px] h-[60px] rounded-full bg-[#4DB8FF] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(77,184,255,0.4)] hover:shadow-[0_12px_40px_rgba(77,184,255,0.6)] cursor-pointer group overflow-hidden border-2 border-white/20"
                aria-label="Open AI chat"
            >
                {/* Pulse ring */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-white/40" style={{ animationDuration: "2.5s" }} />
                )}

                {/* Shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

                {/* Inner glass ring */}
                <div className="absolute inset-[3px] rounded-full border border-white/15" />

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative z-10"
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
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
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
}
