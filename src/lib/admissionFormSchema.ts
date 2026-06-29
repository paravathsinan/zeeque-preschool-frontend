import { z } from "zod";

import { isValidFullPhoneInput, parseToE164 } from "./intlPhone";

const dateStr = (label: string) =>
    z
        .string()
        .min(1, `${label} is required`)
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date")
        .refine((v) => {
            const d = new Date(`${v}T12:00:00`);
            const today = new Date();
            today.setHours(23, 59, 59, 999);
            return !Number.isNaN(d.getTime()) && d <= today;
        }, "Date of birth cannot be in the future");

const fullIntlPhone = (label: string) =>
    z
        .string()
        .min(1, `${label} is required`)
        .refine((v) => isValidFullPhoneInput(v), "Enter a valid number with country code (e.g. +911234567890)");

const emailField = z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .transform((v) => v.trim().toLowerCase());

export const admissionApplicationSchema = z.object({
    studentName: z.string().min(2, "Student name is required"),
    dob: dateStr("Date of birth"),
    place: z.string().min(1, "Place is required"),
    schoolName: z.string().min(1, "Please select a school"),
    email: emailField,
    whatsapp: fullIntlPhone("WhatsApp number"),
    declarationAccepted: z
        .boolean()
        .refine((v) => v === true, { message: "You must accept the declaration to submit" }),
});

export type AdmissionApplicationFormValues = z.infer<typeof admissionApplicationSchema>;

export function defaultAdmissionFormValues(): AdmissionApplicationFormValues {
    return {
        studentName: "",
        dob: "",
        place: "",
        schoolName: "",
        email: "",
        whatsapp: "",
        declarationAccepted: true,
    };
}

export function toAdmissionApiPayload(values: AdmissionApplicationFormValues) {
    const upper = (s: string) => s.trim().toUpperCase();
    const whatsapp = parseToE164(values.whatsapp) ?? values.whatsapp.trim();
    return {
        studentName: upper(values.studentName),
        dob: values.dob,
        place: upper(values.place),
        schoolName: values.schoolName,
        email: values.email,
        whatsapp,
        declarationDate: new Date().toISOString().slice(0, 10),
    };
}
