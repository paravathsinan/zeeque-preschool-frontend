import { z } from "zod";

import {
    TRAINING_REGULAR_BATCH_VALUES,
    TRAINING_RESIDENTIAL_BATCH_VALUES,
} from "./employmentFormConstants";
import { isValidFullPhoneInput, parseToE164 } from "./intlPhone";
import { WORK_CURRENT_SCHOOL_VALUE_SET } from "./workSchoolOptions";

const dateStr = (label: string) =>
    z.string().min(1, `${label} is required`).regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date");

const optionalDateStr = z
    .string()
    .default("")
    .refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), "Invalid date");

const fullIntlPhone = (label: string) =>
    z
        .string()
        .min(1, `${label} is required`)
        .refine((v) => isValidFullPhoneInput(v), "Enter a valid number with country code (e.g. +911234567890)");

export const employmentRowSchema = z.object({
    organizationName: z
        .string()
        .min(1, "Select organization / school from the list")
        .refine((v) => WORK_CURRENT_SCHOOL_VALUE_SET.has(v), "Choose a school from the list or N/A"),
    designation: z.string().optional(),
    fromDate: dateStr("From date"),
    toDate: optionalDateStr,
});

export const trainingRowSchema = z
    .object({
        basicBatch: z.string().min(1, "Basic batch is required"),
        year: z
            .string()
            .trim()
            .min(1, "Year is required")
            .regex(/^\d{4}$/, "Enter a 4-digit year"),
        batch: z.string().min(1, "Batch is required"),
        registerNumber: z.string().optional().default(""),
    })
    .superRefine((row, ctx) => {
        if (row.basicBatch !== "regular-batch" && row.basicBatch !== "residential-batch") {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Select regular or residential batch",
                path: ["basicBatch"],
            });
            return;
        }
        const allowed: readonly string[] =
            row.basicBatch === "residential-batch" ? TRAINING_RESIDENTIAL_BATCH_VALUES : TRAINING_REGULAR_BATCH_VALUES;
        if (!allowed.includes(row.batch)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Select a valid batch for the chosen basic batch type",
                path: ["batch"],
            });
        }
    });

const naStatus = (s: string | undefined) => {
    const t = (s ?? "").trim().toLowerCase();
    return t === "n/a" || t === "na" || t === "none" || t === "not applicable";
};

export const longLeaveRowSchema = z
    .object({
        status: z.string().optional(),
        fromDate: z.string().optional(),
        toDate: z.string().optional(),
        months: z.string().optional(),
        rejoinDate: z.string().optional(),
    })
    .superRefine((row, ctx) => {
        const fields = [row.status, row.fromDate, row.toDate, row.months, row.rejoinDate];
        const any = fields.some((f) => f && String(f).trim() !== "");
        if (!any) return;
        if (!row.status?.trim()) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Status is required for this entry", path: ["status"] });
        }
        if (naStatus(row.status)) return;
        if (!row.fromDate?.trim()) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "From date is required", path: ["fromDate"] });
        }
        if (!row.toDate?.trim()) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "To date is required", path: ["toDate"] });
        }
        if (!row.months?.trim()) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Number of months is required", path: ["months"] });
        }
        if (!row.rejoinDate?.trim()) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Rejoin date is required", path: ["rejoinDate"] });
        }
    });

export const employmentApplicationSchema = z
    .object({
        fullName: z.string().min(2, "Full name is required"),
        dob: dateStr("Date of birth"),
        gender: z.string().min(1, "Gender is required"),
        houseName: z.string().min(1, "House name is required"),
        maritalStatus: z.enum(["single", "married", "other"], { message: "Marital status is required" }),
        fatherName: z.string().min(1, "Father's name is required"),
        fatherMobile: fullIntlPhone("Father's mobile"),
        motherName: z.string().min(1, "Mother's name is required"),
        husbandName: z.string().default(""),
        husbandMobile: z.string().default(""),
        place: z.string().min(1, "Place is required"),
        city: z.string().min(1, "City is required"),
        state: z.string().min(1, "State is required"),
        country: z.string().min(1, "Country is required").max(120, "Country name is too long"),
        postalCode: z
            .string()
            .min(1, "Postal code is required")
            .regex(/^[0-9A-Za-z\s-]{3,10}$/, "Enter a valid postal code"),
        phone: fullIntlPhone("Phone number"),
        whatsapp: fullIntlPhone("WhatsApp number"),
        email: z.string().min(1, "Email is required").email("Invalid email address"),
        currentSchoolName: z
            .string()
            .min(1, "Select your school or N/A if not listed / not working")
            .refine((v) => WORK_CURRENT_SCHOOL_VALUE_SET.has(v), "Choose a school from the list or N/A"),
        currentSchoolJoinDate: optionalDateStr,
        isZahrawi: z.enum(["yes", "no"], { message: "Please select if you are Zahrawi" }),
        zahrawiYear: z.string().default(""),
        religiousEdu: z.string().min(1, "Religious education is required"),
        generalEdu: z.string().min(1, "General education is required"),
        employmentHistory: z.array(employmentRowSchema).min(1, "Add at least one employment record"),
        trainingHistory: z.array(trainingRowSchema).min(1, "Add at least one training record"),
        longLeaveRows: z.array(longLeaveRowSchema).min(1, "Add at least one long-leave row (use N/A if not applicable)"),
    })
    .superRefine((data, ctx) => {
        if (data.isZahrawi === "yes") {
            const zy = data.zahrawiYear?.trim() ?? "";
            if (!zy) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Year is required when you are Zahrawi",
                    path: ["zahrawiYear"],
                });
            } else if (!/^\d{4}$/.test(zy)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Enter a 4-digit year",
                    path: ["zahrawiYear"],
                });
            }
        }
        if (data.maritalStatus === "married") {
            if (!data.husbandName?.trim()) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Husband's name is required",
                    path: ["husbandName"],
                });
            }
            if (!data.husbandMobile?.trim()) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Husband's mobile is required",
                    path: ["husbandMobile"],
                });
            } else if (!isValidFullPhoneInput(data.husbandMobile)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Enter a valid number with country code (e.g. +911234567890)",
                    path: ["husbandMobile"],
                });
            }
        }

        const longLeaveOk = data.longLeaveRows.some((row) => {
            const s = row.status?.trim();
            if (!s) return false;
            if (naStatus(row.status)) return true;
            return !!(row.fromDate && row.toDate && row.months?.trim() && row.rejoinDate);
        });
        if (!longLeaveOk) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Complete long leave section: enter N/A in status if not applicable, or fill all fields per row",
                path: ["longLeaveRows"],
            });
        }
    });

export type EmploymentApplicationFormValues = z.infer<typeof employmentApplicationSchema>;
export type EmploymentRow = z.infer<typeof employmentRowSchema>;
export type TrainingRow = z.infer<typeof trainingRowSchema>;
export type LongLeaveRow = z.infer<typeof longLeaveRowSchema>;

/** API JSON: form values + normalized phones + declaration date (set at submit time). */
export type EmploymentApiPayload = EmploymentApplicationFormValues & { declarationDate: string };

function todayIsoLocal(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

export function toEmploymentApiPayload(data: EmploymentApplicationFormValues): EmploymentApiPayload {
    const fatherMobile = parseToE164(data.fatherMobile);
    const phone = parseToE164(data.phone);
    const whatsapp = parseToE164(data.whatsapp);
    if (!fatherMobile || !phone || !whatsapp) {
        throw new Error("Invalid phone fields");
    }
    const husbandMobile =
        data.maritalStatus === "married" ? parseToE164(data.husbandMobile) ?? "" : "";

    return {
        ...data,
        fatherMobile,
        phone,
        whatsapp,
        husbandMobile,
        declarationDate: todayIsoLocal(),
    };
}

export const defaultEmploymentRow = (): EmploymentRow => ({
    organizationName: "",
    designation: "",
    fromDate: "",
    toDate: "",
});

export const defaultTrainingRow = (): TrainingRow => ({
    basicBatch: "",
    year: "",
    batch: "",
    registerNumber: "",
});

export const defaultLongLeaveRow = (): LongLeaveRow => ({
    status: "",
    fromDate: "",
    toDate: "",
    months: "",
    rejoinDate: "",
});

export const defaultEmploymentFormValues = (): EmploymentApplicationFormValues => ({
    fullName: "",
    dob: "",
    gender: "",
    houseName: "",
    maritalStatus: "single",
    fatherName: "",
    fatherMobile: "",
    motherName: "",
    husbandName: "",
    husbandMobile: "",
    place: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    phone: "",
    whatsapp: "",
    email: "",
    currentSchoolName: "",
    currentSchoolJoinDate: "",
    isZahrawi: "no",
    zahrawiYear: "",
    religiousEdu: "",
    generalEdu: "",
    employmentHistory: [defaultEmploymentRow()],
    trainingHistory: [defaultTrainingRow()],
    longLeaveRows: [defaultLongLeaveRow()],
});
