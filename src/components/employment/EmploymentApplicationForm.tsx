"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import {
    useForm,
    useFieldArray,
    Controller,
    useWatch,
    type Resolver,
    type UseFormRegister,
    type UseFormSetValue,
    type Control,
    type FieldErrors,
    type UseFieldArrayReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
    User,
    Users,
    GraduationCap,
    Briefcase,
    BookOpen,
    CalendarDays,
    CheckCircle2,
    Loader2,
    Plus,
    Trash2,
    Send,
    ChevronLeft,
    ChevronRight,
    ImageIcon,
    AlertCircle,
    Check,
    Sparkles,
} from "lucide-react";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";
import {
    employmentApplicationSchema,
    defaultEmploymentFormValues,
    toEmploymentApiPayload,
    type EmploymentApplicationFormValues,
} from "@/lib/employmentFormSchema";
import { formatPhoneDisplay, sanitizePhoneTyping } from "@/lib/intlPhone";
import { WORK_CURRENT_SCHOOL_OPTIONS } from "@/lib/workSchoolOptions";
import {
    INDIAN_STATES,
    TRAINING_BASIC_BATCH_OPTIONS,
    trainingBatchOptionsForBasic,
    GENDER_OPTIONS,
    MARITAL_OPTIONS,
    ZAHRAWI_OPTIONS,
} from "@/lib/employmentFormConstants";

const PHOTO_MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

const CONFETTI_CLASS = [
    "bg-primary",
    "bg-[#ffb606]",
    "bg-emerald-500",
    "bg-sky-500",
    "bg-violet-500",
    "bg-rose-400",
] as const;

type ConfettiPiece = {
    id: number;
    angle: number;
    distance: number;
    w: number;
    h: number;
    delay: number;
    spin: number;
    colorI: number;
};

const SUCCESS_AUTO_CLOSE_MS = 11000;

function SubmissionSuccessScreen({
    enrollmentNumber,
    onDismiss,
}: {
    enrollmentNumber: string;
    onDismiss: () => void;
}) {
    const [reduceMotion, setReduceMotion] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(() => Math.ceil(SUCCESS_AUTO_CLOSE_MS / 1000));

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mq.matches);
        const onChange = () => setReduceMotion(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        const started = Date.now();
        const tick = () => {
            const msLeft = Math.max(0, SUCCESS_AUTO_CLOSE_MS - (Date.now() - started));
            setSecondsLeft(Math.ceil(msLeft / 1000));
            if (msLeft <= 0) onDismiss();
        };
        const id = window.setInterval(tick, 250);
        return () => window.clearInterval(id);
    }, [onDismiss]);

    const pieces = useMemo((): ConfettiPiece[] => {
        if (reduceMotion) return [];
        return Array.from({ length: 42 }, (_, i) => ({
            id: i,
            angle: Math.random() * Math.PI * 2,
            distance: 100 + Math.random() * 220,
            w: 5 + Math.random() * 9,
            h: 4 + Math.random() * 6,
            delay: Math.random() * 0.45,
            spin: (Math.random() - 0.5) * 720,
            colorI: i % CONFETTI_CLASS.length,
        }));
    }, [reduceMotion]);

    return (
        <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-[0_24px_80px_rgba(239,66,37,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(239,66,37,0.18),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_100%,rgba(255,182,6,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgba(59,130,246,0.08),transparent_45%)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(239,66,37,0.25),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_100%,rgba(255,182,6,0.12),transparent_50%)]"
                aria-hidden
            />

            <div
                className="pointer-events-none absolute left-1/2 top-[22%] z-[1] -translate-x-1/2 -translate-y-1/2"
                aria-hidden
            >
                {pieces.map((p) => (
                    <motion.span
                        key={p.id}
                        className={`absolute left-0 top-0 rounded-[2px] shadow-sm ${CONFETTI_CLASS[p.colorI]}`}
                        style={{ width: p.w, height: p.h }}
                        initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                        animate={{
                            x: Math.cos(p.angle) * p.distance,
                            y: Math.sin(p.angle) * p.distance,
                            opacity: 0,
                            rotate: p.spin,
                        }}
                        transition={{ duration: 2.4, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
                    />
                ))}
            </div>

            <div className="relative z-[2] px-6 py-12 text-center sm:px-10 md:px-14 md:py-16">
                <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary/15 dark:bg-primary/25"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.05 }}
                    />
                    <motion.div
                        className="absolute inset-2 rounded-full border-2 border-dashed border-primary/35 dark:border-primary/45"
                        animate={reduceMotion ? undefined : { rotate: 360 }}
                        transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#d63620] shadow-lg shadow-primary/35 ring-4 ring-white/80 dark:ring-slate-900/80"
                        initial={{ scale: 0, rotate: -25 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.12 }}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.35 }}
                        >
                            <Check className="h-10 w-10 text-white" strokeWidth={3} aria-hidden />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="mx-auto max-w-lg"
                >
                    <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-orange-400">
                        <Sparkles className="h-4 w-4" aria-hidden />
                        You did it
                        <Sparkles className="h-4 w-4" aria-hidden />
                    </p>
                    <h2 className="mb-3 font-heading text-3xl font-extrabold uppercase tracking-wide text-[#222] dark:text-white md:text-4xl">
                        Application submitted
                    </h2>

                    <div className="mb-8 rounded-2xl border border-emerald-200/70 bg-emerald-50/70 px-5 py-5 text-left dark:border-emerald-900/50 dark:bg-emerald-950/20">
                        <p className="font-heading text-base font-extrabold text-emerald-800 dark:text-emerald-200 normal-case tracking-normal">
                            നിങ്ങളുടെ രജിസ്‌ട്രേഷൻ വിജയകരമായി പൂർത്തിയായിരിക്കുന്നു
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-emerald-900/90 dark:text-emerald-100/90 normal-case tracking-normal leading-relaxed">
                            <p>
                                പ്രൈമറി അസസ്‌മെന്റിനായി (Primary Assessment) ഒരു സീക്യൂ പ്ലസ് കോർഡിനേറ്റർ നിങ്ങളെ പിന്നീട്
                                ബന്ധപ്പെടുന്നതാണ്. അസസ്‌മെന്റിന് ശേഷം മാത്രമായിരിക്കും നിങ്ങൾക്കുള്ള ക്ലാസുകൾ നിശ്ചയിക്കുന്നത്.
                            </p>
                            <p>ക്ലാസുകൾ ആരംഭിക്കുന്നത്: 2026 ജൂൺ മുതൽ</p>
                            <p className="font-semibold">നിങ്ങളുടെ സഹകരണത്തിന് നന്ദി!</p>
                        </div>
                    </div>

                    <div className="mb-8 rounded-2xl border border-gray-200/80 bg-gray-50/90 px-5 py-5 dark:border-slate-700 dark:bg-slate-800/60">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                            Your enrollment number
                        </p>
                        <p className="font-mono text-xl font-bold tracking-[0.12em] text-primary sm:text-2xl md:text-3xl">
                            {enrollmentNumber}
                        </p>
                        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                            This code is unique to your application. Please mention it in any email or call to our team.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="mx-auto max-w-sm">
                            <div className="h-1.5 overflow-hidden rounded-full bg-gray-200/70 dark:bg-slate-700/70">
                                <motion.div
                                    aria-hidden
                                    className="h-full rounded-full bg-primary"
                                    initial={{ width: "100%" }}
                                    animate={{ width: "0%" }}
                                    transition={{ duration: SUCCESS_AUTO_CLOSE_MS / 1000, ease: "linear" }}
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 normal-case tracking-normal">
                                This screen will close automatically in <span className="font-bold">{secondsLeft}s</span>.
                            </p>
                        </div>

                        <motion.button
                            type="button"
                            onClick={onDismiss}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-primary px-8 py-3.5 font-heading text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/35 sm:w-auto"
                        >
                            Close
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function formatFastApiDetail(detail: unknown): string {
    if (detail == null) return "";
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) {
        return detail
            .map((item) => {
                if (item && typeof item === "object" && "msg" in item) {
                    const loc = "loc" in item && Array.isArray((item as { loc: unknown }).loc)
                        ? (item as { loc: string[] }).loc.join(".")
                        : "";
                    const m = (item as { msg?: string }).msg ?? "";
                    return loc ? `${loc}: ${m}` : m;
                }
                return JSON.stringify(item);
            })
            .filter(Boolean)
            .join("; ");
    }
    return String(detail);
}

/** `label`: one line under the step dot. `title`: full name for tooltip / screen readers. */
const STEPS = [
    { id: 0, title: "Personal & address", label: "Personal", icon: User },
    { id: 1, title: "Family & contact", label: "Family", icon: Users },
    { id: 2, title: "Education", label: "Education", icon: GraduationCap },
    { id: 3, title: "Training history", label: "Training", icon: BookOpen },
    { id: 4, title: "Employment history", label: "Employment", icon: Briefcase },
    { id: 5, title: "Long leave", label: "Long leave", icon: CalendarDays },
    { id: 6, title: "Review & submit", label: "Review", icon: CheckCircle2 },
] as const;

function fieldWrapClass(err?: boolean) {
    return err ? "text-red-500" : "text-gray-700 dark:text-gray-300";
}

function inputClass(err?: boolean) {
    const base =
        "w-full bg-white dark:bg-slate-900 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none text-gray-700 dark:text-gray-200 shadow-sm";
    return err
        ? `${base} border-red-500/60 focus:border-red-500 bg-red-50/40 dark:bg-red-950/25`
        : `${base} border-gray-200 dark:border-slate-600 focus:border-primary/50 focus:shadow-md dark:focus:bg-slate-800`;
}

/** Forces stored value and display to uppercase (for employment form parity with paper forms). */
function capsInputProps(reg: ReturnType<UseFormRegister<EmploymentApplicationFormValues>>) {
    const { onChange, ...rest } = reg;
    return {
        ...rest,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const input = e.target;
            const s = input.selectionStart;
            const en = input.selectionEnd;
            input.value = input.value.toUpperCase();
            if (s !== null && en !== null) {
                try {
                    input.setSelectionRange(s, en);
                } catch {
                    /* ignore */
                }
            }
            onChange(e);
        },
    };
}

function capsFieldClass(cls: string) {
    return `${cls} uppercase`;
}

/** Training year etc.: digits only, optional max length (default 4). */
function digitsOnlyInputProps(
    reg: ReturnType<UseFormRegister<EmploymentApplicationFormValues>>,
    maxLen = 4
) {
    const { onChange, ...rest } = reg;
    return {
        ...rest,
        inputMode: "numeric" as const,
        autoComplete: "off",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const input = e.target;
            const raw = input.value;
            const cleaned = raw.replace(/\D/g, "").slice(0, maxLen);
            const lost = raw.length - cleaned.length;
            const s = input.selectionStart;
            const en = input.selectionEnd;
            input.value = cleaned;
            if (s !== null && en !== null) {
                const ns = Math.min(Math.max(0, s - lost), cleaned.length);
                try {
                    input.setSelectionRange(ns, ns);
                } catch {
                    /* ignore */
                }
            }
            onChange(e);
        },
    };
}

export default function EmploymentApplicationForm() {
    const [step, setStep] = useState(0);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [photoError, setPhotoError] = useState<string | null>(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submittedEnrollment, setSubmittedEnrollment] = useState<string | null>(null);
    const photoInputRef = useRef<HTMLInputElement>(null);

    const form = useForm<EmploymentApplicationFormValues>({
        resolver: zodResolver(employmentApplicationSchema) as Resolver<EmploymentApplicationFormValues>,
        defaultValues: defaultEmploymentFormValues(),
        mode: "onTouched",
    });

    const {
        register,
        control,
        handleSubmit,
        watch,
        trigger,
        setValue,
        formState: { errors },
        reset,
    } = form;

    const maritalStatus = watch("maritalStatus");
    const isZahrawi = watch("isZahrawi");
    const employmentFA = useFieldArray({ control, name: "employmentHistory" });
    const trainingFA = useFieldArray({ control, name: "trainingHistory" });
    const longLeaveFA = useFieldArray({ control, name: "longLeaveRows" });

    const handlePhotoFile = useCallback((file: File | null | undefined) => {
        const f = file ?? null;
        setPhotoError(null);
        if (!f) {
            if (photoInputRef.current) photoInputRef.current.value = "";
            setPhotoFile(null);
            setPhotoPreview(null);
            return;
        }
        if (!ALLOWED_PHOTO_TYPES.includes(f.type)) {
            setPhotoError("Please use JPG, PNG, or WebP.");
            if (photoInputRef.current) photoInputRef.current.value = "";
            return;
        }
        if (f.size > PHOTO_MAX_BYTES) {
            setPhotoError("Photo must be 5MB or smaller.");
            if (photoInputRef.current) photoInputRef.current.value = "";
            return;
        }
        setPhotoFile(f);
        setPhotoPreview(URL.createObjectURL(f));
        if (photoInputRef.current) photoInputRef.current.value = "";
    }, []);

    const buildStepTriggerList = useCallback(
        (s: number, values: EmploymentApplicationFormValues): string[] => {
            if (s === 0) {
                return [
                    "fullName",
                    "dob",
                    "gender",
                    "houseName",
                    "place",
                    "city",
                    "state",
                    "country",
                    "postalCode",
                ];
            }
            if (s === 1) {
                const list: string[] = [
                    "maritalStatus",
                    "fatherName",
                    "fatherMobile",
                    "motherName",
                    "phone",
                    "whatsapp",
                    "email",
                ];
                if (values.maritalStatus === "married") {
                    list.push("husbandName", "husbandMobile");
                }
                return list;
            }
            if (s === 2) {
                return ["religiousEdu", "generalEdu"];
            }
            if (s === 3) {
                return values.trainingHistory.flatMap((_, i) => [
                    `trainingHistory.${i}.basicBatch` as const,
                    `trainingHistory.${i}.year` as const,
                    `trainingHistory.${i}.batch` as const,
                    `trainingHistory.${i}.registerNumber` as const,
                ]) as unknown as string[];
            }
            if (s === 4) {
                const top: string[] = [
                    "isZahrawi",
                    "currentSchoolName",
                    "currentSchoolJoinDate",
                ];
                if (values.isZahrawi === "yes") {
                    top.push("zahrawiYear");
                }
                const rows = values.employmentHistory.flatMap((_, i) => [
                    `employmentHistory.${i}.organizationName` as const,
                    `employmentHistory.${i}.designation` as const,
                    `employmentHistory.${i}.fromDate` as const,
                    `employmentHistory.${i}.toDate` as const,
                ]) as unknown as string[];
                return [...top, ...rows];
            }
            if (s === 5) {
                const paths = values.longLeaveRows.flatMap((_, i) => [
                    `longLeaveRows.${i}.status`,
                    `longLeaveRows.${i}.fromDate`,
                    `longLeaveRows.${i}.toDate`,
                    `longLeaveRows.${i}.months`,
                    `longLeaveRows.${i}.rejoinDate`,
                ]);
                return paths as string[];
            }
            return [];
        },
        []
    );

    const goNext = async () => {
        setSubmitError(null);
        const values = form.getValues();
        if (step === 1) {
            if (!photoFile) {
                setPhotoError("Please upload a photo of the candidate (JPG, PNG, or WebP).");
                return;
            }
        }
        const fields = buildStepTriggerList(step, values);
        if (fields.length) {
            const ok = await trigger(fields as never);
            if (!ok) return;
        }
        if (step === 5) {
            const okLeave = await trigger("longLeaveRows" as never);
            if (!okLeave) return;
        }
        if (step < STEPS.length - 1) setStep((x) => x + 1);
    };

    const goBack = () => {
        setSubmitError(null);
        if (step > 0) setStep((x) => x - 1);
    };

    const onValidSubmit = async (values: EmploymentApplicationFormValues) => {
        if (!photoFile) {
            setPhotoError("Candidate photo is required.");
            setStep(1);
            return;
        }
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const apiBase =
                process.env.NEXT_PUBLIC_EMPLOYMENT_API_URL?.replace(/\/$/, "") ?? "http://127.0.0.1:8000";
            const fd = new FormData();
            fd.append("payload", JSON.stringify(toEmploymentApiPayload(values)));
            fd.append("photo", photoFile, photoFile.name || "photo.jpg");
            const res = await fetch(`${apiBase}/api/v1/employment-applications/`, {
                method: "POST",
                body: fd,
            });
            const data = (await res.json().catch(() => ({}))) as {
                id?: string;
                enrollmentNumber?: string;
                enrollment_number?: string;
                detail?: string | Array<{ msg?: string; loc?: unknown }>;
            };
            if (!res.ok) {
                const msg = formatFastApiDetail(data.detail) || `Submission failed (${res.status})`;
                throw new Error(msg);
            }
            const enrollment = data.enrollmentNumber ?? data.enrollment_number ?? data.id;
            if (!enrollment) throw new Error("Invalid server response.");
            setSubmittedEnrollment(enrollment);
            setShowConfirm(false);
            reset(defaultEmploymentFormValues());
            setPhotoFile(null);
            setPhotoPreview(null);
            setStep(0);
        } catch (e) {
            setSubmitError(e instanceof Error ? e.message : "Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submittedEnrollment) {
        return (
            <SubmissionSuccessScreen
                enrollmentNumber={submittedEnrollment}
                onDismiss={() => setSubmittedEnrollment(null)}
            />
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white dark:bg-slate-900 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-slate-800 overflow-hidden"
            >
                {/* Stepper: one visual system — dots + connectors + label row (no mixed “tab” styles) */}
                <div
                    className="px-4 md:px-10 py-8 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900"
                    aria-label="Form steps"
                >
                    {/* Same max-width for title + grid so “Step X of 7” centers over the bar */}
                    <div className="mx-auto w-full max-w-4xl">
                        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                            Step {step + 1} of {STEPS.length}
                        </p>
                        <div className="overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:thin]">
                            {/* min-width keeps 7 equal columns on small screens; sm+ fills container */}
                            <div className="mx-auto w-full min-w-[36rem] sm:min-w-0">
                                <div className="grid w-full grid-cols-7 gap-x-0">
                                    {STEPS.map((s, idx) => {
                                        const Icon = s.icon;
                                        const active = step === idx;
                                        const done = step > idx;
                                        const locked = idx > step;
                                        return (
                                            <div
                                                key={s.id}
                                                className="flex min-w-0 flex-col items-center gap-2.5 px-0.5 sm:px-1"
                                            >
                                                {/* One column: connectors + dot share the same horizontal center */}
                                                <div className="relative flex h-10 w-full items-center justify-center">
                                                    {idx > 0 && (
                                                        <div
                                                            className={`absolute top-1/2 left-0 z-0 h-1 -translate-y-1/2 rounded-full ${
                                                                step > idx - 1
                                                                    ? "bg-primary"
                                                                    : "bg-gray-200 dark:bg-slate-600"
                                                            }`}
                                                            style={{ width: "calc(50% - 1.25rem)" }}
                                                            aria-hidden
                                                        />
                                                    )}
                                                    {idx < STEPS.length - 1 && (
                                                        <div
                                                            className={`absolute top-1/2 right-0 z-0 h-1 -translate-y-1/2 rounded-full ${
                                                                step > idx
                                                                    ? "bg-primary"
                                                                    : "bg-gray-200 dark:bg-slate-600"
                                                            }`}
                                                            style={{ width: "calc(50% - 1.25rem)" }}
                                                            aria-hidden
                                                        />
                                                    )}
                                                    <button
                                                        type="button"
                                                        title={s.title}
                                                        aria-label={`${s.title}${active ? ", current step" : done ? ", completed" : ", not available"}`}
                                                        aria-current={active ? "step" : undefined}
                                                        disabled={locked}
                                                        onClick={() => !locked && setStep(idx)}
                                                        className={`
                                                            relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200
                                                            ${done ? "border-primary bg-primary text-white shadow-sm shadow-primary/25" : ""}
                                                            ${active && !done ? "border-primary bg-primary text-white shadow-md ring-4 ring-primary/20" : ""}
                                                            ${!active && !done ? "border-gray-200 bg-white text-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-500" : ""}
                                                            ${locked ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-95"}
                                                        `}
                                                    >
                                                        {done ? (
                                                            <Check className="h-5 w-5 stroke-[2.5]" aria-hidden />
                                                        ) : (
                                                            <Icon className="h-[18px] w-[18px]" aria-hidden />
                                                        )}
                                                    </button>
                                                </div>
                                                <p
                                                    className={`min-h-[2.25rem] w-full text-balance text-center text-[9px] font-bold uppercase leading-snug tracking-tight sm:text-[10px] md:text-[11px] ${
                                                        active
                                                            ? "text-primary dark:text-orange-400"
                                                            : done
                                                              ? "text-gray-700 dark:text-gray-300"
                                                              : locked
                                                                ? "text-gray-300 dark:text-slate-600"
                                                                : "text-gray-400 dark:text-slate-500"
                                                    }`}
                                                >
                                                    {s.label}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form
                    className="p-6 md:p-12 space-y-8 [&_label]:uppercase [&_label]:tracking-wide [&_h3]:uppercase [&_h3]:tracking-wide [&_h4]:uppercase [&_h4]:tracking-wide"
                    onSubmit={(e) => e.preventDefault()}
                    noValidate
                >
                    <div className="min-h-[320px]" aria-live="polite">
                        {step === 0 && (
                            <StepPersonal register={register} control={control} errors={errors} />
                        )}
                        {step === 1 && (
                            <StepFamilyContact
                                register={register}
                                control={control}
                                errors={errors}
                                maritalStatus={maritalStatus}
                                photoPreview={photoPreview}
                                photoError={photoError}
                                photoInputRef={photoInputRef}
                                onPhotoFile={handlePhotoFile}
                            />
                        )}
                        {step === 2 && (
                            <StepEducationWork register={register} errors={errors} />
                        )}
                        {step === 3 && (
                            <StepTraining
                                trainingFA={trainingFA}
                                control={control}
                                register={register}
                                setValue={setValue}
                                errors={errors}
                            />
                        )}
                        {step === 4 && (
                            <StepEmployment
                                employmentFA={employmentFA}
                                control={control}
                                register={register}
                                errors={errors}
                                isZahrawi={isZahrawi}
                            />
                        )}
                        {step === 5 && (
                            <StepLongLeave
                                longLeaveFA={longLeaveFA}
                                control={control}
                                register={register}
                                errors={errors}
                            />
                        )}
                        {step === 6 && (
                            <StepReview
                                values={watch()}
                                photoPreview={photoPreview}
                                maritalStatus={maritalStatus}
                            />
                        )}
                    </div>

                    {submitError && (
                        <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900 p-4 text-red-700 dark:text-red-300 text-sm uppercase tracking-wide">
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <span>{submitError}</span>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-dashed border-gray-100 dark:border-slate-800">
                        <button
                            type="button"
                            onClick={goBack}
                            disabled={step === 0}
                            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-gray-200 dark:border-slate-700 font-heading font-bold uppercase tracking-wide text-gray-700 dark:text-gray-200 disabled:opacity-40"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Back
                        </button>
                        {step < STEPS.length - 1 ? (
                            <button
                                type="button"
                                onClick={goNext}
                                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary text-white font-heading font-extrabold uppercase tracking-wide shadow-lg shadow-primary/25"
                            >
                                Next
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => {
                                    setSubmitError(null);
                                    handleSubmit(() => setShowConfirm(true))();
                                }}
                                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#ffb606] text-white font-heading font-extrabold uppercase tracking-wide shadow-[4px_4px_0_0_#ef4225]"
                            >
                                <Send className="w-5 h-5" />
                                Submit application
                            </button>
                        )}
                    </div>
                </form>
            </motion.div>

            <AnimatePresence>
                {showConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="confirm-employment-title"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-8 shadow-2xl border border-gray-100 dark:border-slate-800"
                        >
                            <h3 id="confirm-employment-title" className="text-xl font-heading font-extrabold text-[#222] dark:text-white mb-3 uppercase tracking-wide">
                                Confirm submission
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 uppercase tracking-wide">
                                Please confirm that the information you entered is accurate. You will not be able to edit
                                after sending.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={() => setShowConfirm(false)}
                                    className="flex-1 py-3 rounded-xl border-2 border-gray-200 dark:border-slate-700 font-bold uppercase tracking-wide text-gray-700 dark:text-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit(onValidSubmit)}
                                    className="flex-1 py-3 rounded-xl bg-primary text-white font-heading font-extrabold uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending
                                        </>
                                    ) : (
                                        "Confirm & send"
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* ─── Step subcomponents ─── */

function Err({ name }: { name?: string }) {
    if (!name) return null;
    return <p className="text-red-500 text-xs font-bold mt-2 ml-1">{name}</p>;
}

function PhoneOneField({
    name,
    label,
    id,
    control,
    errorMessage,
    /** When false, shares a row with another field on md+; when true (default), uses full row width. */
    spanFullWidth = true,
}: {
    name: "fatherMobile" | "phone" | "whatsapp" | "husbandMobile";
    label: string;
    id: string;
    control: Control<EmploymentApplicationFormValues>;
    errorMessage?: string;
    spanFullWidth?: boolean;
}) {
    const hasErr = !!errorMessage;
    return (
        <div className={spanFullWidth ? "md:col-span-2" : "min-w-0"}>
            <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(hasErr)}`} htmlFor={id}>
                {label} <span className="text-red-500">*</span>
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        id={id}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+911234567890"
                        className={`${inputClass(hasErr)} normal-case`}
                        value={typeof field.value === "string" ? field.value : ""}
                        onChange={(e) => field.onChange(sanitizePhoneTyping(e.target.value))}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                    />
                )}
            />
            <Err name={errorMessage} />
        </div>
    );
}

function StepPersonal({
    register,
    control,
    errors,
}: {
    register: UseFormRegister<EmploymentApplicationFormValues>;
    control: Control<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-primary">
                    <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Personal & address</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.fullName)}`}>
                        Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("fullName"))}
                        autoComplete="name"
                        className={capsFieldClass(inputClass(!!errors.fullName))}
                    />
                    <Err name={errors.fullName?.message} />
                </div>
                <div>
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.dob)}`}>
                        Date of birth <span className="text-red-500">*</span>
                    </label>
                    <Controller
                        name="dob"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select date"
                                hasError={!!errors.dob}
                                uppercase
                                className={inputClass(!!errors.dob)}
                            />
                        )}
                    />
                    <Err name={errors.dob?.message} />
                </div>
                <div>
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.gender)}`}>
                        Gender <span className="text-red-500">*</span>
                    </label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <CustomSelect
                                options={GENDER_OPTIONS}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select"
                                hasError={!!errors.gender}
                                uppercase
                            />
                        )}
                    />
                    <Err name={errors.gender?.message} />
                </div>
                <div className="md:col-span-2">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.houseName)}`}>
                        House name / number <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("houseName"))}
                        className={capsFieldClass(inputClass(!!errors.houseName))}
                    />
                    <Err name={errors.houseName?.message} />
                </div>
                <div>
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.place)}`}>
                        Place <span className="text-red-500">*</span>
                    </label>
                    <input {...capsInputProps(register("place"))} className={capsFieldClass(inputClass(!!errors.place))} />
                    <Err name={errors.place?.message} />
                </div>
                <div>
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.city)}`}>
                        City <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("city"))}
                        autoComplete="address-level2"
                        className={capsFieldClass(inputClass(!!errors.city))}
                    />
                    <Err name={errors.city?.message} />
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                        <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.state)}`}>
                            State<span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="state"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    options={INDIAN_STATES}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Select state"
                                    searchable
                                    hasError={!!errors.state}
                                    uppercase
                                />
                            )}
                        />
                        <Err name={errors.state?.message} />
                    </div>
                    <div className="min-w-0">
                        <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.country)}`}>
                            Country <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...capsInputProps(register("country"))}
                            autoComplete="country-name"
                            placeholder="Type country name"
                            className={capsFieldClass(inputClass(!!errors.country))}
                        />
                        <Err name={errors.country?.message} />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.postalCode)}`}>
                        ZIP / Postal code <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("postalCode"))}
                        autoComplete="postal-code"
                        className={capsFieldClass(inputClass(!!errors.postalCode))}
                    />
                    <Err name={errors.postalCode?.message} />
                </div>
            </div>
        </div>
    );
}

function StepFamilyContact({
    register,
    control,
    errors,
    maritalStatus,
    photoPreview,
    photoError,
    photoInputRef,
    onPhotoFile,
}: {
    register: UseFormRegister<EmploymentApplicationFormValues>;
    control: Control<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
    maritalStatus: string;
    photoPreview: string | null;
    photoError: string | null;
    photoInputRef: React.RefObject<HTMLInputElement | null>;
    onPhotoFile: (file: File | null | undefined) => void;
}) {
    const [photoDragOver, setPhotoDragOver] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[#3FB7E5]">
                    <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Family & contact</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                        <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.maritalStatus)}`}>
                            Marital status <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="maritalStatus"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    options={MARITAL_OPTIONS}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Select"
                                    hasError={!!errors.maritalStatus}
                                    uppercase
                                />
                            )}
                        />
                        <Err name={errors.maritalStatus?.message} />
                    </div>
                    <div className="min-w-0">
                        <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.fatherName)}`}>
                            Father&apos;s name <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...capsInputProps(register("fatherName"))}
                            className={capsFieldClass(inputClass(!!errors.fatherName))}
                        />
                        <Err name={errors.fatherName?.message} />
                    </div>
                </div>
                <PhoneOneField
                    name="fatherMobile"
                    label="Father's mobile"
                    id="employment-father-mobile"
                    control={control}
                    errorMessage={errors.fatherMobile?.message}
                    spanFullWidth={false}
                />
                <div className="min-w-0">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.motherName)}`}>
                        Mother&apos;s name <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("motherName"))}
                        className={capsFieldClass(inputClass(!!errors.motherName))}
                    />
                    <Err name={errors.motherName?.message} />
                </div>
                {maritalStatus === "married" && (
                    <>
                        <div className="min-w-0">
                            <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.husbandName)}`}>
                                Husband&apos;s name <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...capsInputProps(register("husbandName"))}
                                className={capsFieldClass(inputClass(!!errors.husbandName))}
                            />
                            <Err name={errors.husbandName?.message} />
                        </div>
                        <PhoneOneField
                            name="husbandMobile"
                            label="Husband's mobile"
                            id="employment-husband-mobile"
                            control={control}
                            errorMessage={errors.husbandMobile?.message}
                            spanFullWidth={false}
                        />
                    </>
                )}
                <PhoneOneField
                    name="phone"
                    label="Phone"
                    id="employment-phone"
                    control={control}
                    errorMessage={errors.phone?.message}
                    spanFullWidth={false}
                />
                <PhoneOneField
                    name="whatsapp"
                    label="WhatsApp"
                    id="employment-whatsapp"
                    control={control}
                    errorMessage={errors.whatsapp?.message}
                    spanFullWidth={false}
                />
                <div className="md:col-span-2">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.email)}`}>
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className={`${inputClass(!!errors.email)} normal-case`}
                    />
                    <Err name={errors.email?.message} />
                </div>
                <div className="md:col-span-2">
                    <div className="mb-2" id="employment-photo-label">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                            Photo of candidate <span className="text-red-500">*</span>
                        </p>
                        
                    </div>
                    <input
                        ref={photoInputRef}
                        type="file"
                        accept={ALLOWED_PHOTO_TYPES.join(",")}
                        onChange={(e) => onPhotoFile(e.target.files?.[0])}
                        className="sr-only"
                        id="employment-photo"
                        aria-labelledby="employment-photo-label"
                        aria-describedby="employment-photo-formats"
                    />
                    <label
                        htmlFor="employment-photo"
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setPhotoDragOver(true);
                        }}
                        onDragEnter={(e) => {
                            e.preventDefault();
                            setPhotoDragOver(true);
                        }}
                        onDragLeave={(e) => {
                            e.preventDefault();
                            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                setPhotoDragOver(false);
                            }
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setPhotoDragOver(false);
                            const dropped = e.dataTransfer.files?.[0];
                            if (dropped) onPhotoFile(dropped);
                        }}
                        className={`flex flex-row items-center gap-4 sm:gap-6 min-h-[120px] p-5 sm:p-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 shadow-sm ${
                            photoError
                                ? "border-red-400 bg-red-50/30 dark:bg-red-950/20"
                                : photoDragOver
                                  ? "border-primary bg-primary/5 scale-[1.01] shadow-md shadow-primary/10"
                                  : "border-gray-300 dark:border-slate-600 bg-white/60 dark:bg-slate-900/40 hover:border-primary/50 hover:bg-primary/[0.03]"
                        }`}
                    >
                        <div
                            className={`w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-gray-200/80 dark:border-slate-600 ${
                                photoPreview ? "bg-gray-100 dark:bg-slate-800" : "bg-gray-100 dark:bg-slate-800"
                            }`}
                        >
                            {photoPreview ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={photoPreview}
                                    alt="Your uploaded candidate photo preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <ImageIcon className="w-9 h-9 sm:w-10 sm:h-10 text-gray-400 dark:text-gray-500" strokeWidth={1.25} />
                            )}
                        </div>
                        <div className="min-w-0 flex-1 text-left uppercase tracking-wide">
                            <span className="block font-heading font-extrabold text-primary text-base sm:text-lg leading-snug uppercase tracking-wide">
                                {photoPreview ? "Tap to change photo" : "Tap to upload"}
                            </span>
                            <span className="block font-heading font-bold text-primary/85 text-sm mt-1 uppercase tracking-wide">
                                {photoPreview ? "Or drag a new file here" : "Or drag and drop — click to browse"}
                            </span>
                            <p
                                id="employment-photo-formats"
                                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold mt-2 normal-case tracking-normal"
                            >
                                JPG, PNG or WebP — max 5MB
                            </p>
                        </div>
                    </label>
                    {photoError && (
                        <p className="text-red-500 text-sm font-bold mt-2" role="alert">
                            {photoError}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

function StepEducationWork({
    register,
    errors,
}: {
    register: UseFormRegister<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800 flex items-center justify-center text-primary">
                    <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Education</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="min-w-0">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.religiousEdu)}`}>
                        Religious education <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("religiousEdu"))}
                        autoComplete="off"
                        placeholder="E.G. MADRASA GRADE 12"
                        className={capsFieldClass(inputClass(!!errors.religiousEdu))}
                    />
                    <Err name={errors.religiousEdu?.message} />
                </div>
                <div className="min-w-0">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.generalEdu)}`}>
                        General education <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...capsInputProps(register("generalEdu"))}
                        autoComplete="off"
                        placeholder="E.G. BACHELOR'S DEGREE"
                        className={capsFieldClass(inputClass(!!errors.generalEdu))}
                    />
                    <Err name={errors.generalEdu?.message} />
                </div>
            </div>
        </div>
    );
}

function StepEmployment({
    employmentFA,
    control,
    register,
    errors,
    isZahrawi,
}: {
    employmentFA: UseFieldArrayReturn<EmploymentApplicationFormValues, "employmentHistory">;
    control: Control<EmploymentApplicationFormValues>;
    register: UseFormRegister<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
    isZahrawi: string;
}) {
    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200/80 dark:border-slate-700 bg-gray-100/70 dark:bg-slate-800/50 p-6 space-y-4">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Current role</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="min-w-0">
                        <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.isZahrawi)}`}>
                            Are you Zahrawi? <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="isZahrawi"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    options={ZAHRAWI_OPTIONS}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Select"
                                    hasError={!!errors.isZahrawi}
                                    uppercase
                                />
                            )}
                        />
                        <Err name={errors.isZahrawi?.message} />
                    </div>
                    <div className="min-w-0">
                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Join date (if applicable)</label>
                        <Controller
                            name="currentSchoolJoinDate"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                    placeholder="Optional"
                                    hasError={!!errors.currentSchoolJoinDate}
                                    uppercase
                                    className={inputClass(!!errors.currentSchoolJoinDate)}
                                />
                            )}
                        />
                        <Err name={errors.currentSchoolJoinDate?.message} />
                    </div>
                    {isZahrawi === "yes" && (
                        <div className="md:col-span-2">
                            <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.zahrawiYear)}`}>
                                Year <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...digitsOnlyInputProps(register("zahrawiYear"), 4)}
                                placeholder="E.G. 2020"
                                className={inputClass(!!errors.zahrawiYear)}
                            />
                            <Err name={errors.zahrawiYear?.message} />
                        </div>
                    )}
                    <div className="md:col-span-2 min-w-0">
                        <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.currentSchoolName)}`}>
                            Current working school name <span className="text-red-500">*</span>
                        </label>
                        <Controller
                            name="currentSchoolName"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    options={WORK_CURRENT_SCHOOL_OPTIONS}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Search or select school"
                                    searchable
                                    hasError={!!errors.currentSchoolName}
                                    uppercase={false}
                                />
                            )}
                        />
                        <Err name={errors.currentSchoolName?.message} />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-700">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Employment history</h3>
                </div>
                <button
                    type="button"
                    onClick={() =>
                        employmentFA.append({
                            organizationName: "",
                            designation: "",
                            fromDate: "",
                            toDate: "",
                        })
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm uppercase tracking-wide"
                >
                    <Plus className="w-4 h-4" />
                    Add row
                </button>
            </div>

            <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Previous employers</p>

            {errors.employmentHistory?.message && (
                <p className="text-red-500 text-sm font-bold">{errors.employmentHistory.message}</p>
            )}
            {employmentFA.fields.map((field, index) => (
                <div
                    key={field.id}
                    className="p-6 rounded-2xl border border-gray-200/80 dark:border-slate-700 bg-gray-100/70 dark:bg-slate-800/50 space-y-4"
                >
                    <div className="flex justify-between items-center">
                        <span className="font-heading font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                            Employer {index + 1}
                        </span>
                        {employmentFA.fields.length > 1 && (
                            <button
                                type="button"
                                onClick={() => employmentFA.remove(index)}
                                className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                                aria-label={`Remove employer ${index + 1}`}
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2 min-w-0">
                            <label
                                className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!errors.employmentHistory?.[index]?.organizationName)}`}
                            >
                                Organization / school <span className="text-red-500">*</span>
                            </label>
                            <Controller
                                name={`employmentHistory.${index}.organizationName`}
                                control={control}
                                render={({ field }) => (
                                    <CustomSelect
                                        options={WORK_CURRENT_SCHOOL_OPTIONS}
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Search or select school"
                                        searchable
                                        hasError={!!errors.employmentHistory?.[index]?.organizationName}
                                        uppercase={false}
                                    />
                                )}
                            />
                            <Err name={errors.employmentHistory?.[index]?.organizationName?.message} />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold mb-2">Designation</label>
                            <input
                                {...capsInputProps(register(`employmentHistory.${index}.designation`))}
                                className={capsFieldClass(inputClass(false))}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">From *</label>
                            <Controller
                                name={`employmentHistory.${index}.fromDate`}
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="From"
                                        hasError={!!errors.employmentHistory?.[index]?.fromDate}
                                        uppercase
                                        className={inputClass(!!errors.employmentHistory?.[index]?.fromDate)}
                                    />
                                )}
                            />
                            <Err name={errors.employmentHistory?.[index]?.fromDate?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">To</label>
                            <Controller
                                name={`employmentHistory.${index}.toDate`}
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        placeholder="Optional / current"
                                        hasError={!!errors.employmentHistory?.[index]?.toDate}
                                        uppercase
                                        className={inputClass(!!errors.employmentHistory?.[index]?.toDate)}
                                    />
                                )}
                            />
                            <Err name={errors.employmentHistory?.[index]?.toDate?.message} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function TrainingHistoryRowCard({
    index,
    control,
    register,
    setValue,
    errors,
}: {
    index: number;
    control: Control<EmploymentApplicationFormValues>;
    register: UseFormRegister<EmploymentApplicationFormValues>;
    setValue: UseFormSetValue<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
}) {
    const basicBatchRaw = useWatch({ control, name: `trainingHistory.${index}.basicBatch` });
    const basicBatch = typeof basicBatchRaw === "string" ? basicBatchRaw : "";
    const batchOptions = trainingBatchOptionsForBasic(basicBatch);
    const prevBasicRef = useRef<string | undefined>(undefined);

    useEffect(() => {
        if (prevBasicRef.current !== undefined && prevBasicRef.current !== basicBatch) {
            setValue(`trainingHistory.${index}.batch`, "");
        }
        prevBasicRef.current = basicBatch;
    }, [basicBatch, index, setValue]);

    const rowErr = errors.trainingHistory?.[index];

    return (
        <div className="p-6 rounded-2xl border border-gray-200/80 dark:border-slate-700 bg-gray-100/70 dark:bg-slate-800/50 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="min-w-0">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!rowErr?.basicBatch)}`}>
                        Basic batch <span className="text-red-500">*</span>
                    </label>
                    <Controller
                        name={`trainingHistory.${index}.basicBatch`}
                        control={control}
                        render={({ field }) => (
                            <CustomSelect
                                options={[...TRAINING_BASIC_BATCH_OPTIONS]}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Select"
                                hasError={!!rowErr?.basicBatch}
                                uppercase
                            />
                        )}
                    />
                    <Err name={rowErr?.basicBatch?.message} />
                </div>
                <div className="min-w-0">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!rowErr?.batch)}`}>
                        Batch <span className="text-red-500">*</span>
                    </label>
                    <Controller
                        name={`trainingHistory.${index}.batch`}
                        control={control}
                        render={({ field }) => (
                            <CustomSelect
                                options={batchOptions}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder={basicBatch ? "Select batch" : "Choose basic batch first"}
                                searchable={batchOptions.length > 6}
                                hasError={!!rowErr?.batch}
                                uppercase
                                className={!basicBatch ? "opacity-60 pointer-events-none" : ""}
                            />
                        )}
                    />
                    <Err name={rowErr?.batch?.message} />
                </div>
                <div className="min-w-0">
                    <label className={`block text-sm font-bold mb-2 ${fieldWrapClass(!!rowErr?.year)}`}>
                        Year <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...digitsOnlyInputProps(register(`trainingHistory.${index}.year`), 4)}
                        placeholder="E.G. 2024"
                        className={inputClass(!!rowErr?.year)}
                    />
                    <Err name={rowErr?.year?.message} />
                </div>
                <div className="min-w-0">
                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Register number</label>
                    <input
                        {...capsInputProps(register(`trainingHistory.${index}.registerNumber`))}
                        placeholder="OPTIONAL"
                        className={capsFieldClass(inputClass(!!rowErr?.registerNumber))}
                    />
                    <Err name={rowErr?.registerNumber?.message} />
                </div>
            </div>
        </div>
    );
}

function StepTraining({
    trainingFA,
    control,
    register,
    setValue,
    errors,
}: {
    trainingFA: UseFieldArrayReturn<EmploymentApplicationFormValues, "trainingHistory">;
    control: Control<EmploymentApplicationFormValues>;
    register: UseFormRegister<EmploymentApplicationFormValues>;
    setValue: UseFormSetValue<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-slate-800 flex items-center justify-center text-green-700">
                    <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Training history</h3>
            </div>
            {trainingFA.fields.map((field, index) => (
                <TrainingHistoryRowCard
                    key={field.id}
                    index={index}
                    control={control}
                    register={register}
                    setValue={setValue}
                    errors={errors}
                />
            ))}
        </div>
    );
}

function StepLongLeave({
    longLeaveFA,
    control,
    register,
    errors,
}: {
    longLeaveFA: UseFieldArrayReturn<EmploymentApplicationFormValues, "longLeaveRows">;
    control: Control<EmploymentApplicationFormValues>;
    register: UseFormRegister<EmploymentApplicationFormValues>;
    errors: FieldErrors<EmploymentApplicationFormValues>;
}) {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-slate-800 flex items-center justify-center text-violet-700">
                        <CalendarDays className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Long leave</h3>
                </div>
                <button
                    type="button"
                    onClick={() =>
                        longLeaveFA.append({
                            status: "",
                            fromDate: "",
                            toDate: "",
                            months: "",
                            rejoinDate: "",
                        })
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm uppercase tracking-wide"
                >
                    <Plus className="w-4 h-4" />
                    Add row
                </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                If you have no long leave to declare, set status to <strong>N/A</strong> on one row.
            </p>
            {errors.longLeaveRows && typeof errors.longLeaveRows.message === "string" && (
                <p className="text-red-500 text-sm font-bold">{errors.longLeaveRows.message}</p>
            )}
            {longLeaveFA.fields.map((field, index) => (
                <div
                    key={field.id}
                    className="p-6 rounded-2xl border border-gray-200/80 dark:border-slate-700 bg-gray-100/70 dark:bg-slate-800/50 space-y-4"
                >
                    <div className="flex justify-between items-center">
                        <span className="font-heading font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                            Entry {index + 1}
                        </span>
                        {longLeaveFA.fields.length > 1 && (
                            <button
                                type="button"
                                onClick={() => longLeaveFA.remove(index)}
                                className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-bold mb-2">Long leave status</label>
                            <input
                                {...capsInputProps(register(`longLeaveRows.${index}.status`))}
                                placeholder="E.G. N/A OR MEDICAL"
                                className={capsFieldClass(inputClass(!!errors.longLeaveRows?.[index]?.status))}
                            />
                            <Err name={errors.longLeaveRows?.[index]?.status?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">From</label>
                            <Controller
                                name={`longLeaveRows.${index}.fromDate`}
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        placeholder="From"
                                        hasError={!!errors.longLeaveRows?.[index]?.fromDate}
                                        uppercase
                                        className={inputClass(!!errors.longLeaveRows?.[index]?.fromDate)}
                                    />
                                )}
                            />
                            <Err name={errors.longLeaveRows?.[index]?.fromDate?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">To</label>
                            <Controller
                                name={`longLeaveRows.${index}.toDate`}
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        placeholder="To"
                                        hasError={!!errors.longLeaveRows?.[index]?.toDate}
                                        uppercase
                                        className={inputClass(!!errors.longLeaveRows?.[index]?.toDate)}
                                    />
                                )}
                            />
                            <Err name={errors.longLeaveRows?.[index]?.toDate?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">No. of months</label>
                            <input
                                {...capsInputProps(register(`longLeaveRows.${index}.months`))}
                                className={capsFieldClass(inputClass(!!errors.longLeaveRows?.[index]?.months))}
                            />
                            <Err name={errors.longLeaveRows?.[index]?.months?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Rejoin date</label>
                            <Controller
                                name={`longLeaveRows.${index}.rejoinDate`}
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        placeholder="Rejoin"
                                        hasError={!!errors.longLeaveRows?.[index]?.rejoinDate}
                                        uppercase
                                        className={inputClass(!!errors.longLeaveRows?.[index]?.rejoinDate)}
                                    />
                                )}
                            />
                            <Err name={errors.longLeaveRows?.[index]?.rejoinDate?.message} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function labelFor(key: keyof EmploymentApplicationFormValues): string {
    const map: Partial<Record<keyof EmploymentApplicationFormValues, string>> = {
        fullName: "Full name",
        dob: "Date of birth",
        gender: "Gender",
        houseName: "House name",
        place: "Place",
        city: "City",
        state: "State",
        country: "Country",
        postalCode: "Postal code",
        maritalStatus: "Marital status",
        fatherName: "Father",
        fatherMobile: "Father mobile",
        motherName: "Mother",
        husbandName: "Husband",
        husbandMobile: "Husband mobile",
        phone: "Phone",
        whatsapp: "WhatsApp",
        email: "Email",
        religiousEdu: "Religious education",
        generalEdu: "General education",
        isZahrawi: "Zahrawi",
        zahrawiYear: "Zahrawi year",
        currentSchoolName: "Current school",
        currentSchoolJoinDate: "School join date",
    };
    return map[key] ?? String(key);
}

function ReviewPhoneRow({ label, value }: { label: string; value: string }) {
    if (!value?.trim()) return null;
    return (
        <div>
            <dt className="text-gray-500 dark:text-gray-400 font-medium">{label}</dt>
            <dd className="font-semibold text-gray-900 dark:text-white break-words normal-case tracking-normal">
                {formatPhoneDisplay(value)}
            </dd>
        </div>
    );
}

function StepReview({
    values,
    photoPreview,
    maritalStatus,
}: {
    values: EmploymentApplicationFormValues;
    photoPreview: string | null;
    maritalStatus: string;
}) {
    const scalarRow = (k: keyof EmploymentApplicationFormValues) => {
        if (k === "zahrawiYear" && values.isZahrawi !== "yes") return null;
        if (k === "husbandName" && maritalStatus !== "married") return null;
        if (k === "husbandMobile" && maritalStatus !== "married") return null;
        if (k === "fatherMobile" || k === "phone" || k === "whatsapp" || k === "husbandMobile") return null;
        const v = values[k];
        if (v === undefined || v === null || v === "") return null;
        if (typeof v === "object") return null;
        return (
            <div key={String(k)}>
                <dt className="text-gray-500 dark:text-gray-400 font-medium">{labelFor(k)}</dt>
                <dd
                    className={`font-semibold text-gray-900 dark:text-white break-words ${k === "email" ? "normal-case" : ""}`}
                >
                    {String(v)}
                </dd>
            </div>
        );
    };

    return (
        <div className="space-y-6 uppercase tracking-wide">
            <h3 className="text-xl font-heading font-bold text-[#222] dark:text-white">Review your application</h3>
            {photoPreview && (
                <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photoPreview} alt="" className="w-16 h-16 rounded-xl object-cover border border-gray-200" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Candidate photo attached</span>
                </div>
            )}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {scalarRow("fullName")}
                {scalarRow("dob")}
                {scalarRow("gender")}
                {scalarRow("houseName")}
                {scalarRow("place")}
                {scalarRow("city")}
                {scalarRow("state")}
                {scalarRow("country")}
                {scalarRow("postalCode")}
                {scalarRow("maritalStatus")}
                {scalarRow("fatherName")}
                <ReviewPhoneRow label="Father mobile" value={values.fatherMobile} />
                {scalarRow("motherName")}
                {maritalStatus === "married" && scalarRow("husbandName")}
                {maritalStatus === "married" && <ReviewPhoneRow label="Husband mobile" value={values.husbandMobile} />}
                <ReviewPhoneRow label="Phone" value={values.phone} />
                <ReviewPhoneRow label="WhatsApp" value={values.whatsapp} />
                {scalarRow("email")}
                {scalarRow("religiousEdu")}
                {scalarRow("generalEdu")}
                {scalarRow("isZahrawi")}
                {scalarRow("zahrawiYear")}
                {scalarRow("currentSchoolName")}
                {scalarRow("currentSchoolJoinDate")}
            </dl>
            <div className="space-y-4">
                <h4 className="font-heading font-bold text-gray-800 dark:text-gray-200">Training</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {values.trainingHistory.map((row, i) => (
                        <li key={i}>
                            {row.batch}
                            {row.year?.trim() ? ` · ${row.year}` : ""}
                            {row.registerNumber?.trim() ? ` · Reg. ${row.registerNumber}` : ""}
                        </li>
                    ))}
                </ul>
                <h4 className="font-heading font-bold text-gray-800 dark:text-gray-200">Employment</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {values.employmentHistory.map((row, i) => (
                        <li key={i}>
                            {row.organizationName} — {row.fromDate}
                            {row.toDate ? ` to ${row.toDate}` : ""}
                        </li>
                    ))}
                </ul>
                <h4 className="font-heading font-bold text-gray-800 dark:text-gray-200">Long leave</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {values.longLeaveRows.map((row, i) => (
                        <li key={i}>
                            {row.status || "—"} {row.fromDate && `${row.fromDate} → ${row.toDate}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
