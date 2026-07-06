"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface Source {
    title: string;
    source: string;
}

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    sources?: Source[];
    isStreaming?: boolean;
}

const quickActions = [
    { label: "Admission Info", query: "How can I apply for admission at Zeeque Preschool?" },
    { label: "Programs", query: "What programs does Zeeque Preschool offer?" },
    { label: "Contact Us", query: "What are the contact details for Zeeque Preschool?" },
    { label: "Fee Structure", query: "What is the fee structure at Zeeque Preschool?" },
    { label: "ZET Exam", query: "Tell me about the ZeeQue Entrance Test (ZET) 2025-26" },
];

const SOURCE_LINKS: Record<string, string> = {
    about: "/about-zeeque-preschool-kerala",
    programs: "/preschool-programs-kerala",
    admissions: "/preschool-admission-kerala-2026",
    contact: "/contact",
    features: "/best-preschool-features-kerala",
    faq: "/",
};

const welcomeMessage: Message = {
    id: 0,
    text: "Hi! 👋 I'm Zeeque's AI assistant. I can answer questions about our programs, admissions, fees, and more. How can I help you today?",
    isBot: true,
};

export default function AIChatBot() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatHistoryRef = useRef<{ role: "user" | "assistant"; content: string }[]>([]);

    // Lock page scroll when chatbot is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Auto-show popup disabled as per user request
    }, []);

    /**
     * Send a message to the RAG chat API and stream the response.
     */
    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMsg: Message = { id: Date.now(), text, isBot: false };
        setMessages((prev) => [...prev, userMsg]);
        setInputText("");
        setIsLoading(true);

        // Placeholder streaming message
        const botMsgId = Date.now() + 1;
        const botMsg: Message = {
            id: botMsgId,
            text: "",
            isBot: true,
            isStreaming: true,
        };
        setMessages((prev) => [...prev, botMsg]);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    history: chatHistoryRef.current,
                }),
            });

            if (!response.ok || !response.body) {
                throw new Error("API request failed");
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let accumulated = "";
            let sources: Source[] = [];

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                accumulated += decoder.decode(value, { stream: true });

                // Check if sources marker is present
                const sourcesIdx = accumulated.indexOf("\n\n__SOURCES__:");
                if (sourcesIdx !== -1) {
                    const cleanText = accumulated.slice(0, sourcesIdx);
                    const sourcesJson = accumulated.slice(sourcesIdx + "\n\n__SOURCES__:".length);
                    try {
                        sources = JSON.parse(sourcesJson);
                    } catch { /* ignore parse errors */ }
                    accumulated = cleanText;
                }

                // Update the streaming message in place
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === botMsgId
                            ? { ...m, text: accumulated, isStreaming: true }
                            : m
                    )
                );
            }

            // Finalize the message — remove streaming flag, attach sources
            setMessages((prev) =>
                prev.map((m) =>
                    m.id === botMsgId
                        ? { ...m, text: accumulated, isStreaming: false, sources }
                        : m
                )
            );

            // Update conversation history for next turn
            chatHistoryRef.current = [
                ...chatHistoryRef.current,
                { role: "user" as const, content: text },
                { role: "assistant" as const, content: accumulated },
            ].slice(-12); // Keep last 12 messages

        } catch {
            setMessages((prev) =>
                prev.map((m) =>
                    m.id === botMsgId
                        ? {
                            ...m,
                            text: "Sorry, something went wrong. Please try again or contact us at +91 9072 500 435.",
                            isStreaming: false,
                        }
                        : m
                )
            );
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);

    const handleQuickAction = (action: typeof quickActions[0]) => {
        sendMessage(action.query);
    };

    const handleSend = () => {
        if (inputText.trim()) sendMessage(inputText.trim());
    };

    if (pathname?.startsWith("/admin-dashboard")) return null;

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
                        className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 z-[110] w-auto sm:w-[360px] max-h-[calc(100vh-32px)] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col bg-white dark:bg-slate-900 hide-on-modal transition-all duration-300 ease-in-out ${messages.length > 1 ? "h-[720px]" : "h-[520px]"}`}
                    >
                        {/* Header */}
                        <div className="bg-primary p-5 flex items-center gap-3 shrink-0">
                            <div className="relative w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/assets/images/aichatbot-icon.png"
                                    alt="AI Chatbot Icon"
                                    fill
                                    className="object-cover scale-[1.2]"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-heading font-bold text-white text-sm">Zeeque AI Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${isLoading ? "bg-yellow-300 animate-pulse" : "bg-green-400 animate-pulse"}`} />
                                    <span className="text-white/70 text-xs font-body">
                                        {isLoading ? "Thinking…" : "Online"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
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
                                    <div className="max-w-[88%]">
                                        <div
                                            className={`px-4 py-3 rounded-2xl text-sm font-body leading-relaxed ${msg.isBot
                                                ? "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-bl-md shadow-sm border border-gray-100 dark:border-slate-600"
                                                : "bg-primary text-white rounded-br-md shadow-md"
                                                }`}
                                        >
                                            {msg.text ? (
                                                <div className="markdown-content">
                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                                                            strong: ({ node, ...props }) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
                                                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1 marker:text-gray-400 dark:marker:text-gray-400" {...props} />,
                                                            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2 space-y-1 marker:text-gray-400 dark:marker:text-gray-400" {...props} />,
                                                            li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                                            a: ({ node, ...props }) => <a className="text-primary hover:text-[#e83e8c] hover:underline font-medium transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                                                            h3: ({ node, ...props }) => <h3 className="font-bold text-base mb-1 mt-3 text-gray-900 dark:text-white" {...props} />,
                                                            h4: ({ node, ...props }) => <h4 className="font-bold text-sm mb-1 mt-2 text-gray-900 dark:text-white" {...props} />,
                                                        }}
                                                    >
                                                        {msg.text}
                                                    </ReactMarkdown>
                                                </div>
                                            ) : (msg.isStreaming && (
                                                <span className="flex gap-1 items-center h-4">
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                                </span>
                                            ))}
                                        </div>

                                        {/* Source pills — shown after streaming is done */}
                                        {msg.isBot && !msg.isStreaming && msg.sources && msg.sources.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mt-1.5 pl-1">
                                                {msg.sources.map((s) => (
                                                    <a
                                                        key={s.source}
                                                        href={SOURCE_LINKS[s.source] ?? "/"}
                                                        className="inline-flex items-center gap-1 text-[10px] font-heading font-bold text-primary/70 hover:text-primary bg-primary/5 hover:bg-primary/10 border border-primary/15 rounded-full px-2 py-0.5 transition-colors"
                                                        title={`View ${s.title} page`}
                                                    >
                                                        <ExternalLink className="w-2.5 h-2.5" />
                                                        {s.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-4 py-3 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0 transition-all duration-300">
                            <p className="text-xs text-gray-400 dark:text-gray-500 font-body mb-2">Quick actions</p>
                            <div className="flex flex-wrap gap-2">
                                {quickActions.map((action) => (
                                    <button
                                        key={action.label}
                                        onClick={() => handleQuickAction(action)}
                                        disabled={isLoading}
                                        className="px-3 py-1.5 rounded-full text-xs font-heading font-bold bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0">
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-2xl px-4 py-2">
                                <input
                                    type="text"
                                    id="chat-input"
                                    name="chat-message"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
                                    placeholder={isLoading ? "Please wait…" : "Ask anything about Zeeque…"}
                                    disabled={isLoading}
                                    className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none font-body disabled:opacity-60"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputText.trim() || isLoading}
                                    className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform disabled:opacity-40 disabled:hover:scale-100 shrink-0"
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
                        className="fixed bottom-[84px] right-4 sm:bottom-[114px] sm:right-8 z-[110] cursor-pointer group/tooltip perspective-1000 hide-on-modal"
                        onClick={() => {
                            setIsOpen(true);
                            setShowPopup(false);
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-1.5 pr-8 rounded-[16px] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/40 dark:border-slate-700/40 flex items-start gap-2 w-max max-w-[260px] group-hover/tooltip:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] transition-all duration-300"
                        >
                            <div className="flex flex-col mt-0.5">
                                <span className="text-[12px] font-extrabold text-gray-800 dark:text-gray-100 font-heading leading-tight mb-0.5">
                                    Have doubts?
                                </span>
                                <span className="text-[10.5px] text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                                    Ask <strong className="font-bold text-gray-800 dark:text-white">Zeeque AI Assistant</strong> about admissions, programs, or fees.
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPopup(false);
                                }}
                                className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 bg-white/40 hover:bg-white/80 dark:text-gray-300 dark:hover:text-white dark:bg-slate-700/40 dark:hover:bg-slate-700/80 transition-colors backdrop-blur-md border border-white/30 dark:border-slate-600/30"
                                aria-label="Close popup"
                            >
                                <X className="w-3 h-3" />
                            </button>

                            {/* Triangle Pointer */}
                            <div className="absolute -bottom-1 right-[20px] w-2.5 h-2.5 bg-white/50 dark:bg-slate-800/50 transform rotate-45 border-b border-r border-white/40 dark:border-slate-700/40 backdrop-blur-xl"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="fab"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        whileHover={{ scale: 1.1, translateY: -3 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setIsOpen(true);
                            setShowPopup(false);
                        }}
                        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] w-[60px] h-[60px] rounded-full bg-transparent flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer group overflow-hidden hide-on-modal"
                        aria-label="Open AI chat"
                    >
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
                            className="relative z-10 w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src="/images/assets/images/aichatbot-icon.png"
                                alt="AI Chatbot Icon"
                                fill
                                sizes="60px"
                                className="object-cover scale-[1.35]"
                            />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
