"use client";

import type { ReactNode } from "react";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import {
    Building2,
    CalendarDays,
    Camera,
    Check,
    Mail,
    MapPin,
    MessageCircle,
    Pencil,
    ShieldCheck,
    Sparkles,
    User,
} from "lucide-react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import type { AdmissionApplicationFormValues } from "@/lib/admissionFormSchema";
import { formatPhoneDisplay } from "@/lib/intlPhone";

const stagger = {
    hidden: { opacity: 0, y: 12 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

function formatDob(iso: string): string {
    if (!iso) return "—";
    try {
        return format(parseISO(iso), "dd MMM yyyy");
    } catch {
        return iso;
    }
}

function parseSchoolLabel(schoolName: string): { name: string; code: string | null } {
    const match = schoolName.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
    if (match) {
        return { name: match[1].trim(), code: match[2].trim() };
    }
    if (schoolName === "N/A") {
        return { name: "School not in list", code: null };
    }
    return { name: schoolName, code: null };
}

interface InfoTileProps {
    icon: ReactNode;
    label: string;
    value: ReactNode;
    accent?: string;
    index: number;
    className?: string;
}

function InfoTile({ icon, label, value, accent = "#ef4225", index, className }: InfoTileProps) {
    return (
        <motion.div
            custom={index}
            variants={stagger}
            initial="hidden"
            animate="show"
            className={`group relative overflow-hidden rounded-2xl border border-gray-100/80 bg-white/90 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(239,66,37,0.08)] dark:border-slate-700/60 dark:bg-slate-800/70 ${className ?? ""}`}
        >
            <div
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-[0.07] transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: accent }}
            />
            <div className="relative flex items-start gap-3">
                <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm"
                    style={{ backgroundColor: `${accent}14`, color: accent }}
                >
                    {icon}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">{label}</p>
                    <div className="mt-1 text-[15px] font-bold leading-snug text-[#222] dark:text-white">{value}</div>
                </div>
            </div>
        </motion.div>
    );
}

interface AdmissionReviewStepProps {
    values: AdmissionApplicationFormValues;
    photoPreview: string | null;
    register: UseFormRegister<AdmissionApplicationFormValues>;
    errors: FieldErrors<AdmissionApplicationFormValues>;
    onEditDetails: () => void;
    onEditPhoto: () => void;
}

export default function AdmissionReviewStep({
    values,
    photoPreview,
    register,
    errors,
    onEditDetails,
    onEditPhoto,
}: AdmissionReviewStepProps) {
    const school = parseSchoolLabel(values.schoolName);
    const declarationAccepted = values.declarationAccepted;

    return (
        <div className="mx-auto max-w-3xl space-y-6">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-gradient-to-br from-[#fff8f6] via-white to-[#fff9e8] p-6 shadow-[0_20px_60px_rgba(239,66,37,0.08)] dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 md:p-8"
            >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ffb606]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-8 left-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="relative mx-auto shrink-0 md:mx-0">
                        {photoPreview ? (
                            <img
                                src={photoPreview}
                                alt="Child passport photo"
                                className="h-28 w-28 rounded-[22px] border-4 border-white object-cover shadow-xl ring-4 ring-primary/15 dark:border-slate-800 md:h-32 md:w-32"
                            />
                        ) : (
                            <div className="flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-[22px] border-2 border-dashed border-gray-200 bg-white/80 text-gray-400 dark:border-slate-600 dark:bg-slate-800/80 md:h-32 md:w-32">
                                <Camera className="h-8 w-8" />
                                <span className="text-[10px] font-bold uppercase">No photo</span>
                            </div>
                        )}
                        <button
                            type="button"
                            onClick={onEditPhoto}
                            className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-lg transition-transform hover:scale-105 dark:border-slate-800"
                            aria-label="Edit photo"
                        >
                            <Pencil className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                            <Sparkles className="h-3 w-3" />
                            Almost done
                        </div>
                        <h3 className="font-heading text-2xl font-extrabold text-[#222] dark:text-white md:text-3xl">
                            Review & submit
                        </h3>
                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            Confirm your child&apos;s details below. We&apos;ll reach you on WhatsApp with assessment
                            and enrollment steps.
                        </p>
                        <p className="mt-3 font-heading text-lg font-extrabold uppercase tracking-wide text-[#222] dark:text-white">
                            {values.studentName || "—"}
                        </p>
                        {school.code ? (
                            <span className="mt-1 inline-block rounded-lg bg-[#ffb606]/15 px-2.5 py-1 font-mono text-xs font-bold text-[#c98a00] dark:text-[#ffb606]">
                                {school.code}
                            </span>
                        ) : null}
                    </div>
                </div>
            </motion.div>

            {/* Summary grid */}
            <div className="flex items-center justify-between gap-3 px-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">Application details</p>
                <button
                    type="button"
                    onClick={onEditDetails}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-primary shadow-sm transition-all hover:border-primary/30 hover:bg-primary/5 dark:border-slate-600 dark:bg-slate-800"
                >
                    <Pencil className="h-3 w-3" />
                    Edit all
                </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoTile
                    index={0}
                    icon={<User className="h-5 w-5" />}
                    label="Student name"
                    value={<span className="uppercase">{values.studentName || "—"}</span>}
                    accent="#ef4225"
                />
                <InfoTile
                    index={1}
                    icon={<CalendarDays className="h-5 w-5" />}
                    label="Date of birth"
                    value={formatDob(values.dob)}
                    accent="#4361EE"
                />
                <InfoTile
                    index={2}
                    icon={<MapPin className="h-5 w-5" />}
                    label="Place"
                    value={<span className="uppercase">{values.place || "—"}</span>}
                    accent="#0fb85c"
                />
                <InfoTile
                    index={3}
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    value={<span className="normal-case">{values.email || "—"}</span>}
                    accent="#4361EE"
                />
                <InfoTile
                    index={4}
                    icon={<MessageCircle className="h-5 w-5" />}
                    label="WhatsApp"
                    value={formatPhoneDisplay(values.whatsapp) || "—"}
                    accent="#25D366"
                />
                <InfoTile
                    index={5}
                    icon={<Building2 className="h-5 w-5" />}
                    label="Preferred school"
                    value={
                        <span className="uppercase">
                            {school.name}
                            {school.code ? (
                                <span className="mt-1 block font-mono text-xs font-semibold normal-case text-primary">
                                    {school.code}
                                </span>
                            ) : null}
                        </span>
                    }
                    accent="#fbaf01"
                    className="sm:col-span-2"
                />
            </div>

            {/* Declaration */}
            <motion.label
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className={`relative flex cursor-pointer items-start gap-4 overflow-hidden rounded-[24px] border-2 p-5 transition-all duration-300 md:p-6 ${
                    declarationAccepted
                        ? "border-primary/50 bg-gradient-to-br from-primary/[0.06] to-[#ffb606]/[0.04] shadow-[0_12px_40px_rgba(239,66,37,0.1)]"
                        : "border-gray-200/80 bg-white/80 hover:border-gray-300 dark:border-slate-700 dark:bg-slate-800/50"
                } ${errors.declarationAccepted ? "border-red-400 bg-red-50/50" : ""}`}
            >
                <input
                    type="checkbox"
                    className="peer sr-only"
                    {...register("declarationAccepted")}
                />
                <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 ${
                        declarationAccepted
                            ? "border-primary bg-primary text-white shadow-md shadow-primary/30"
                            : "border-gray-300 bg-white dark:border-slate-500 dark:bg-slate-900"
                    }`}
                    aria-hidden
                >
                    {declarationAccepted ? <Check className="h-4 w-4" strokeWidth={3} /> : null}
                </div>
                <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <span className="font-heading text-sm font-extrabold text-[#222] dark:text-white">
                            Declaration
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        I confirm that the information provided is accurate. I understand that admission is subject to
                        assessment and seat availability at the selected ZeeQue center.
                    </p>
                </div>
            </motion.label>
            {errors.declarationAccepted?.message ? (
                <p className="px-1 text-sm font-medium text-red-500">{errors.declarationAccepted.message}</p>
            ) : null}
        </div>
    );
}
