import schoolsJson from "@/data/schools.json";

export type WorkSchoolRecord = {
    label: string;
    value: string;
    original_name: string;
    code: string;
};

const schools = schoolsJson as WorkSchoolRecord[];

/** First option for applicants not at a listed centre. */
const NOT_LISTED = { value: "N/A", label: "N/A — NOT IN LIST / NOT WORKING" } as const;

/**
 * Options for “Current working school name” (searchable dropdown).
 * Stored value is the full list label (name + code) or `N/A`.
 */
export const WORK_CURRENT_SCHOOL_OPTIONS: { value: string; label: string }[] = [
    NOT_LISTED,
    ...schools.map((s) => ({ value: s.label, label: s.label })),
];

export const WORK_CURRENT_SCHOOL_VALUE_SET = new Set(WORK_CURRENT_SCHOOL_OPTIONS.map((o) => o.value));
