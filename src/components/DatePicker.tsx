"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, getYear, getMonth, setYear, setMonth, isAfter } from "date-fns";

interface DatePickerProps {
    value?: string;
    onChange: (date: string) => void;
    placeholder?: string;
    className?: string;
    hasError?: boolean;
    isValid?: boolean;
}

export default function DatePicker({
    value,
    onChange,
    placeholder = "Select Date",
    className = "",
    hasError,
    isValid
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(value ? new Date(value) : new Date());
    const [view, setView] = useState<"days" | "months" | "years">("days");
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const daysInMonth = () => {
        const start = startOfWeek(startOfMonth(currentMonth));
        const end = endOfWeek(endOfMonth(currentMonth));
        const days = [];
        let day = start;
        while (day <= end) {
            days.push(day);
            day = addDays(day, 1);
        }
        return days;
    };

    const handleDateClick = (date: Date) => {
        onChange(format(date, "yyyy-MM-dd"));
        setIsOpen(false);
    };

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const years = Array.from({ length: 100 }, (_, i) => getYear(new Date()) - i);
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (
        <div className="relative" ref={containerRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between cursor-pointer ${className} ${isOpen ? 'ring-2 ring-primary/50 bg-white dark:bg-slate-800' : ''}`}
            >
                <span className={value ? "text-gray-900 dark:text-white" : "text-gray-400"}>
                    {value ? format(new Date(value), "dd MMM yyyy") : placeholder}
                </span>
                <CalendarIcon className={`w-4 h-4 ${hasError ? 'text-red-500' : isValid ? 'text-green-500' : 'text-gray-400'}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full mt-2 left-0 w-[250px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-3 z-[110] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                            <button
                                type="button"
                                onClick={prevMonth}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-gray-500 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            <div className="flex gap-1 font-heading font-bold text-sm">
                                <button
                                    type="button"
                                    onClick={() => setView(view === "months" ? "days" : "months")}
                                    className="hover:text-primary transition-colors px-1"
                                >
                                    {format(currentMonth, "MMMM")}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setView(view === "years" ? "days" : "years")}
                                    className="hover:text-primary transition-colors px-1"
                                >
                                    {format(currentMonth, "yyyy")}
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={nextMonth}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-gray-500 transition-colors"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Views */}
                        <div className="relative min-h-[180px]">
                            {view === "days" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="grid grid-cols-7 gap-1"
                                >
                                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                                        <div key={d} className="h-6 flex items-center justify-center text-[10px] font-bold text-gray-400 uppercase">
                                            {d}
                                        </div>
                                    ))}
                                    {daysInMonth().map((day, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => handleDateClick(day)}
                                            className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs transition-all relative group
                                                ${!isSameMonth(day, currentMonth) ? 'text-gray-300 dark:text-gray-700' : 'text-gray-700 dark:text-gray-300'}
                                                ${isSameDay(day, value ? new Date(value) : new Date()) ? 'bg-primary text-white font-bold' : 'hover:bg-primary/10 hover:text-primary'}
                                                ${isSameDay(day, new Date()) && !isSameDay(day, value ? new Date(value) : new Date(0)) ? 'border border-primary/30' : ''}
                                            `}
                                        >
                                            {format(day, "d")}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {view === "months" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="grid grid-cols-3 gap-2"
                                >
                                    {months.map((m, i) => (
                                        <button
                                            key={m}
                                            type="button"
                                            onClick={() => {
                                                setCurrentMonth(setMonth(currentMonth, i));
                                                setView("days");
                                            }}
                                            className={`h-12 rounded-xl flex items-center justify-center text-sm transition-all
                                                ${getMonth(currentMonth) === i ? 'bg-primary text-white font-bold' : 'hover:bg-primary/10 hover:text-primary'}
                                            `}
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {view === "years" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="grid grid-cols-3 gap-2 h-[180px] overflow-y-auto pr-1 custom-scrollbar"
                                >
                                    {years.map(y => (
                                        <button
                                            key={y}
                                            type="button"
                                            onClick={() => {
                                                setCurrentMonth(setYear(currentMonth, y));
                                                setView("days");
                                            }}
                                            className={`h-10 rounded-xl flex items-center justify-center text-sm transition-all
                                                ${getYear(currentMonth) === y ? 'bg-primary text-white font-bold' : 'hover:bg-primary/10 hover:text-primary'}
                                            `}
                                        >
                                            {y}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="mt-2 pt-2 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
                            <button
                                type="button"
                                onClick={() => {
                                    setCurrentMonth(new Date());
                                    setView("days");
                                }}
                                className="text-[11px] font-bold text-primary hover:underline"
                            >
                                Today
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-[11px] font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
