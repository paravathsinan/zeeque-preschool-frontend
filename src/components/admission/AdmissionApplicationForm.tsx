"use client";

import { useCallback, useRef, useState } from "react";
import { useForm, Controller, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
    Baby,
    Camera,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Loader2,
    Send,
    Check,
    ImageIcon,
    Sparkles,
    User,
    AlertCircle,
} from "lucide-react";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";
import {
    admissionApplicationSchema,
    defaultAdmissionFormValues,
    toAdmissionApiPayload,
    type AdmissionApplicationFormValues,
} from "@/lib/admissionFormSchema";
import { useAdmissionSchoolOptions } from "@/hooks/useAdmissionSchoolOptions";
import { formatPhoneDisplay, sanitizePhoneTyping } from "@/lib/intlPhone";
import AdmissionReviewStep from "@/components/admission/AdmissionReviewStep";

const PHOTO_MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

const STEPS = [
    { id: 0, title: "Student details", label: "Student", icon: Baby },
    { id: 1, title: "Child photo", label: "Photo", icon: Camera },
    { id: 2, title: "Review & submit", label: "Review", icon: CheckCircle2 },
] as const;

function inputClass(err?: boolean) {
    const base =
        "w-full bg-white dark:bg-slate-900 border-2 transition-all duration-300 rounded-2xl px-6 py-4 outline-none text-gray-700 dark:text-gray-200 shadow-sm";
    return err
        ? `${base} border-red-500/60 focus:border-red-500 bg-red-50/40 dark:bg-red-950/25`
        : `${base} border-gray-200 dark:border-slate-600 focus:border-primary/50 focus:shadow-md dark:focus:bg-slate-800`;
}

function capsFieldClass(cls: string) {
    return `${cls} uppercase`;
}

function Err({ name }: { name?: string }) {
    if (!name) return null;
    return <p className="mt-1 text-sm font-medium text-red-500">{name}</p>;
}

function formatApiDetail(detail: unknown): string {
    if (detail == null) return "";
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) {
        return detail
            .map((item) => {
                if (item && typeof item === "object" && "msg" in item) {
                    return String((item as { msg?: string }).msg ?? "");
                }
                return JSON.stringify(item);
            })
            .filter(Boolean)
            .join("; ");
    }
    return String(detail);
}

function AdmissionSuccessScreen({
    applicationNumber,
    onDismiss,
}: {
    applicationNumber: string;
    onDismiss: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[40px] border border-gray-100 bg-white p-10 text-center shadow-[0_24px_80px_rgba(239,66,37,0.12)] dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#d63620] text-white shadow-lg">
                <Check className="h-10 w-10" strokeWidth={3} />
            </div>
            <p className="mb-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" />
                Application received
            </p>
            <h2 className="mb-4 font-heading text-3xl font-extrabold text-[#222] dark:text-white">
                Thank you for applying
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Our admissions team will contact you on WhatsApp with the next steps for your child&apos;s
                assessment and enrollment.
            </p>
            <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                    Your application reference
                </p>
                <p className="font-mono text-2xl font-bold tracking-[0.12em] text-primary">{applicationNumber}</p>
            </div>
            <button
                type="button"
                onClick={onDismiss}
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-primary px-10 py-3.5 font-heading text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-primary/30"
            >
                Close
            </button>
        </motion.div>
    );
}

export default function AdmissionApplicationForm() {
    const [step, setStep] = useState(0);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [photoError, setPhotoError] = useState<string | null>(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submittedRef, setSubmittedRef] = useState<string | null>(null);
    const photoInputRef = useRef<HTMLInputElement>(null);
    const { options: schoolOptions, loading: schoolsLoading, error: schoolsError } =
        useAdmissionSchoolOptions();

    const form = useForm<AdmissionApplicationFormValues>({
        resolver: zodResolver(admissionApplicationSchema) as Resolver<AdmissionApplicationFormValues>,
        defaultValues: defaultAdmissionFormValues(),
        mode: "onTouched",
    });

    const { register, control, handleSubmit, trigger, watch, reset, formState: { errors } } = form;
    const values = watch();

    const handlePhotoFile = useCallback((file: File | null | undefined) => {
        const f = file ?? null;
        setPhotoError(null);
        if (!f) {
            setPhotoFile(null);
            setPhotoPreview(null);
            return;
        }
        if (!ALLOWED_PHOTO_TYPES.includes(f.type)) {
            setPhotoError("Please use JPG, PNG, or WebP.");
            return;
        }
        if (f.size > PHOTO_MAX_BYTES) {
            setPhotoError("Photo must be 5MB or smaller.");
            return;
        }
        setPhotoFile(f);
        setPhotoPreview(URL.createObjectURL(f));
    }, []);

    const stepFields = (s: number): (keyof AdmissionApplicationFormValues)[] => {
        if (s === 0) return ["studentName", "dob", "place", "schoolName", "email", "whatsapp"];
        return [];
    };

    const goNext = async () => {
        setSubmitError(null);
        if (step === 1 && !photoFile) {
            setPhotoError("Please upload a recent passport-size photo of your child.");
            return;
        }
        const fields = stepFields(step);
        if (fields.length) {
            const ok = await trigger(fields);
            if (!ok) return;
        }
        if (step < STEPS.length - 1) setStep((x) => x + 1);
    };

    const goBack = () => {
        setSubmitError(null);
        if (step > 0) setStep((x) => x - 1);
    };

    const onValidSubmit = async (data: AdmissionApplicationFormValues) => {
        if (!photoFile) {
            setPhotoError("Child photo is required.");
            setStep(1);
            return;
        }
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const apiBase = typeof window !== "undefined" ? "" :
                process.env.NEXT_PUBLIC_ADMISSION_API_URL?.replace(/\/$/, "") ??
                process.env.NEXT_PUBLIC_EMPLOYMENT_API_URL?.replace(/\/$/, "") ??
                "http://127.0.0.1:8000";
            const fd = new FormData();
            fd.append("payload", JSON.stringify(toAdmissionApiPayload(data)));
            fd.append("photo", photoFile, photoFile.name || "photo.jpg");
            const res = await fetch(`${apiBase}/api/v1/admission-applications/`, {
                method: "POST",
                body: fd,
            });
            const body = (await res.json().catch(() => ({}))) as {
                applicationNumber?: string;
                application_number?: string;
                detail?: unknown;
            };
            if (!res.ok) {
                throw new Error(formatApiDetail(body.detail) || `Submission failed (${res.status})`);
            }
            const ref = body.applicationNumber ?? body.application_number ?? "";
            if (!ref) throw new Error("Invalid server response.");
            setSubmittedRef(ref);
            setShowConfirm(false);
            reset(defaultAdmissionFormValues());
            setPhotoFile(null);
            setPhotoPreview(null);
            setStep(0);
        } catch (e) {
            setSubmitError(e instanceof Error ? e.message : "Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submittedRef) {
        return <AdmissionSuccessScreen applicationNumber={submittedRef} onDismiss={() => setSubmittedRef(null)} />;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                id="apply"
                className="scroll-mt-28 overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:border-slate-800 dark:bg-slate-900"
            >
                <div
                    className="border-b border-gray-100 bg-white px-4 py-8 dark:border-slate-800 dark:bg-slate-900 md:px-10"
                    aria-label="Form steps"
                >
                    <div className="mx-auto w-full max-w-2xl">
                        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                            Step {step + 1} of {STEPS.length}
                        </p>
                        <div className="overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:thin]">
                            <div className="mx-auto w-full min-w-[20rem] sm:min-w-0">
                                <div className="grid w-full grid-cols-3 gap-x-0">
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
                                                <div className="relative flex h-10 w-full items-center justify-center">
                                                    {idx > 0 && (
                                                        <div
                                                            className={`absolute left-0 top-1/2 z-0 h-1 -translate-y-1/2 rounded-full ${
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
                                                            className={`absolute right-0 top-1/2 z-0 h-1 -translate-y-1/2 rounded-full ${
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
                    onSubmit={(e) => e.preventDefault()}
                    noValidate
                    className="space-y-8 p-6 md:p-12 [&_h3]:uppercase [&_h3]:tracking-wide [&_label]:uppercase [&_label]:tracking-wide"
                >
                    <div className="min-h-[280px]" aria-live="polite">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.25 }}
                            >
                            {step === 0 && (
                                <div className="mx-auto max-w-3xl space-y-6">
                                    <h3 className="font-heading text-xl font-bold text-[#222] dark:text-white md:text-2xl">
                                        Student details
                                    </h3>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-bold">Name <span className="text-red-500">*</span></label>
                                            <input
                                                {...register("studentName", {
                                                    onChange: (e) => {
                                                        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '').toUpperCase();
                                                    },
                                                })}
                                                maxLength={50}
                                                className={capsFieldClass(inputClass(!!errors.studentName))}
                                                placeholder="STUDENT'S FULL NAME"
                                            />
                                            <Err name={errors.studentName?.message} />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-bold">Date of birth <span className="text-red-500">*</span></label>
                                            <Controller
                                                name="dob"
                                                control={control}
                                                render={({ field }) => (
                                                    <DatePicker
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        placeholder="Date of birth"
                                                        hasError={!!errors.dob}
                                                        className={inputClass(!!errors.dob)}
                                                    />
                                                )}
                                            />
                                            <Err name={errors.dob?.message} />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-bold">Place <span className="text-red-500">*</span></label>
                                            <input
                                                {...register("place", {
                                                    onChange: (e) => {
                                                        e.target.value = e.target.value.replace(/[^A-Za-z0-9\s,\.-]/g, '').toUpperCase();
                                                    },
                                                })}
                                                maxLength={50}
                                                className={capsFieldClass(inputClass(!!errors.place))}
                                                placeholder="TOWN / AREA"
                                            />
                                            <Err name={errors.place?.message} />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-bold">Email</label>
                                            <input
                                                type="email"
                                                autoComplete="email"
                                                {...register("email", {
                                                    onChange: (e) => {
                                                        e.target.value = e.target.value.toLowerCase();
                                                    },
                                                })}
                                                maxLength={100}
                                                className={`${inputClass(!!errors.email)} normal-case`}
                                                placeholder="parent@email.com"
                                            />
                                            <Err name={errors.email?.message} />
                                        </div>
                                        <div className="relative">
                                            <label className="mb-2 block text-sm font-bold">School name <span className="text-red-500">*</span></label>
                                            <Controller
                                                name="schoolName"
                                                control={control}
                                                render={({ field }) => (
                                                    <CustomSelect
                                                        options={schoolOptions}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        placeholder={
                                                            schoolsLoading
                                                                ? "Loading schools…"
                                                                : "Search and select school"
                                                        }
                                                        searchable
                                                        uppercase
                                                        hasError={!!errors.schoolName}
                                                        disabled={schoolsLoading}
                                                    />
                                                )}
                                            />
                                            <Err name={errors.schoolName?.message} />
                                            {schoolsError ? (
                                                <p className="mt-1 text-xs font-medium text-red-500">{schoolsError}</p>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-bold">WhatsApp number <span className="text-red-500">*</span></label>
                                            <input
                                                {...register("whatsapp", {
                                                    onChange: (e) => {
                                                        e.target.value = sanitizePhoneTyping(e.target.value);
                                                    },
                                                })}
                                                maxLength={15}
                                                className={inputClass(!!errors.whatsapp)}
                                                placeholder="+91..."
                                            />
                                            <Err name={errors.whatsapp?.message} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 1 && (
                                <div className="mx-auto max-w-xl space-y-6 text-center">
                                    <h3 className="font-heading text-xl font-bold text-[#222] dark:text-white md:text-2xl">
                                        Child photo
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Upload a recent passport-size photo (JPG, PNG, or WebP, max 5MB).
                                    </p>
                                    <div
                                        className={`mx-auto flex max-w-sm flex-col items-center rounded-3xl border-2 border-dashed p-8 ${
                                            photoError
                                                ? "border-red-400 bg-red-50/50"
                                                : "border-gray-200 bg-gray-50/80 dark:border-slate-600 dark:bg-slate-800/40"
                                        }`}
                                    >
                                        {photoPreview ? (
                                            <img
                                                src={photoPreview}
                                                alt=""
                                                className="mb-4 h-40 w-40 rounded-2xl border-4 border-white object-cover shadow-lg"
                                            />
                                        ) : (
                                            <div className="mb-4 flex h-40 w-40 items-center justify-center rounded-2xl bg-white text-gray-300 shadow-inner dark:bg-slate-900">
                                                <User className="h-16 w-16" />
                                            </div>
                                        )}
                                        <input
                                            ref={photoInputRef}
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            className="hidden"
                                            onChange={(e) => handlePhotoFile(e.target.files?.[0])}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => photoInputRef.current?.click()}
                                            className="inline-flex items-center gap-2 rounded-2xl bg-primary/10 px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary"
                                        >
                                            <ImageIcon className="h-4 w-4" />
                                            {photoPreview ? "Change photo" : "Upload photo"}
                                        </button>
                                        {photoError && (
                                            <p className="mt-3 text-sm font-medium text-red-500">{photoError}</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <AdmissionReviewStep
                                    values={values}
                                    photoPreview={photoPreview}
                                    register={register}
                                    errors={errors}
                                    onEditDetails={() => setStep(0)}
                                    onEditPhoto={() => setStep(1)}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                    </div>

                    {submitError && (
                        <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm uppercase tracking-wide text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
                            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                            <span>{submitError}</span>
                        </div>
                    )}

                    <div className="flex flex-col gap-4 border-t border-dashed border-gray-100 pt-4 dark:border-slate-800 sm:flex-row">
                        <button
                            type="button"
                            onClick={goBack}
                            disabled={step === 0}
                            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 py-4 font-heading text-sm font-bold uppercase tracking-wide text-gray-700 disabled:opacity-40 dark:border-slate-700 dark:text-gray-200"
                        >
                            <ChevronLeft className="h-5 w-5" />
                            Back
                        </button>
                        {step < STEPS.length - 1 ? (
                            <button
                                type="button"
                                onClick={goNext}
                                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-heading text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-primary/25"
                            >
                                Next
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={async () => {
                                    const ok = await trigger(["declarationAccepted"]);
                                    if (ok) setShowConfirm(true);
                                }}
                                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#ffb606] py-4 font-heading text-sm font-extrabold uppercase tracking-wide text-white shadow-[4px_4px_0_0_#ef4225] disabled:opacity-50"
                                disabled={!values.declarationAccepted}
                            >
                                <Send className="h-5 w-5" />
                                Submit application
                            </button>
                        )}
                    </div>
                </form>
            </motion.div>

            {showConfirm && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
                    >
                        <div className="border-b border-gray-100 bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 dark:border-slate-800">
                            <h3 className="font-heading text-xl font-bold text-[#222] dark:text-white">
                                Submit admission application?
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                Applying for{" "}
                                <span className="font-semibold uppercase text-[#222] dark:text-white">
                                    {values.studentName}
                                </span>{" "}
                                at your selected ZeeQue center.
                            </p>
                        </div>
                        <div className="space-y-2 px-8 py-5 text-sm text-gray-600 dark:text-gray-300">
                            <p>
                                WhatsApp updates will be sent to{" "}
                                <span className="font-semibold text-[#222] dark:text-white">
                                    {formatPhoneDisplay(values.whatsapp)}
                                </span>
                                .
                            </p>
                            <p>Your application reference number will appear on the next screen.</p>
                        </div>
                        <div className="flex gap-3 border-t border-gray-100 px-8 py-6 dark:border-slate-800">
                            <button
                                type="button"
                                onClick={() => setShowConfirm(false)}
                                disabled={isSubmitting}
                                className="flex-1 rounded-2xl border-2 border-gray-200 py-3 font-bold uppercase tracking-wide text-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                disabled={isSubmitting}
                                onClick={handleSubmit(onValidSubmit)}
                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-bold uppercase tracking-wide text-white"
                            >
                                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Confirm"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
