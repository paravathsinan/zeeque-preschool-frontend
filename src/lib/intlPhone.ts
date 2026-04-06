import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js/max";

/** Strip characters that are never valid in international phone input (letters, etc.). */
export function sanitizePhoneTyping(value: string): string {
    return value.replace(/[^\d+\s\-().]/g, "");
}

/**
 * Parse user input to E.164 (e.g. +911234567890). Accepts +, spaces, dashes, optional 00 prefix.
 */
export function parseToE164(raw: string): string | null {
    let s = raw.trim().replace(/\s|-|\(|\)/g, "");
    if (!s) return null;
    if (s.startsWith("00")) {
        s = `+${s.slice(2).replace(/\D/g, "")}`;
    } else if (!s.startsWith("+")) {
        s = `+${s.replace(/\D/g, "")}`;
    } else {
        s = `+${s.slice(1).replace(/\D/g, "")}`;
    }
    if (s.length < 2) return null;
    try {
        if (!isValidPhoneNumber(s)) return null;
        return parsePhoneNumber(s).format("E.164");
    } catch {
        return null;
    }
}

export function isValidFullPhoneInput(raw: string): boolean {
    return parseToE164(raw) !== null;
}

/** Review / display line from raw or E.164 input. */
export function formatPhoneDisplay(raw: string): string {
    const e164 = parseToE164(raw);
    if (!e164) return raw.trim() || "—";
    try {
        return parsePhoneNumber(e164).formatInternational();
    } catch {
        return e164;
    }
}
