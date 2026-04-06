"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, X, Check } from "lucide-react";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    searchable?: boolean;
    hasError?: boolean;
    label?: string;
    /** Show labels and trigger text in capitals (values stay unchanged). */
    uppercase?: boolean;
}

export default function CustomSelect({
    options,
    value,
    onChange,
    placeholder = "Select Option",
    className = "",
    searchable = false,
    hasError = false,
    label,
    uppercase = false,
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    const filteredOptions = options.filter(opt =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
        setSearchTerm("");
    };

    return (
        <div className="relative w-full" ref={containerRef}>
            {label && (
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    {label}
                </label>
            )}
            
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full flex items-center justify-between cursor-pointer
                    bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-600 shadow-sm
                    transition-all duration-300 rounded-2xl px-6 py-4
                    ${isOpen ? 'border-primary/50 bg-white dark:bg-slate-800 ring-4 ring-primary/5 shadow-md' : ''}
                    ${hasError ? 'border-red-500/60 bg-red-50/40 dark:bg-red-950/25' : ''}
                    ${className}
                `}
            >
                <span
                    className={`truncate ${selectedOption ? "text-gray-700 dark:text-gray-200" : "text-gray-400"} ${uppercase ? "uppercase" : ""}`}
                >
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-[100] w-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden"
                    >
                        {searchable && (
                            <div className="p-3 border-b border-gray-50 dark:border-slate-800">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className={`w-full bg-gray-50 dark:bg-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all ${uppercase ? "uppercase" : ""}`}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(uppercase ? e.target.value.toUpperCase() : e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="max-h-60 overflow-y-auto custom-scrollbar p-2">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSelect(option.value);
                                        }}
                                        className={`
                                            flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all
                                            ${value === option.value 
                                                ? 'bg-primary/10 text-primary font-bold' 
                                                : 'hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300'}
                                            ${uppercase ? "uppercase" : ""}
                                        `}
                                    >
                                        <span>{option.label}</span>
                                        {value === option.value && <Check className="w-4 h-4" />}
                                    </div>
                                ))
                            ) : (
                                <div className="px-4 py-8 text-center text-gray-400 text-sm">
                                    No results found
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
