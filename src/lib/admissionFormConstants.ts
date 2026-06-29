export { INDIAN_STATES } from "./employmentFormConstants";

export const ADMISSION_CLASS_OPTIONS = [
    { value: "playgroup", label: "Playgroup" },
    { value: "nursery", label: "Nursery" },
    { value: "lkg", label: "LKG" },
    { value: "ukg", label: "UKG" },
] as const;

export const ADMISSION_SEGMENT_OPTIONS = [
    { value: "lzq", label: "LZQ (Lower ZeeQue)" },
    { value: "mzq", label: "MZQ (Middle ZeeQue)" },
    { value: "uzq", label: "UZQ (Upper ZeeQue)" },
] as const;

export const CHILD_GENDER_OPTIONS = [
    { value: "male", label: "Boy" },
    { value: "female", label: "Girl" },
] as const;

export const TRANSPORT_OPTIONS = [
    { value: "no", label: "No transport required" },
    { value: "yes", label: "School transport required" },
] as const;

export const PREFERRED_CENTER_OPTIONS = [
    { value: "nearest", label: "Nearest ZeeQue center (HQ will guide)" },
    { value: "kozhikode", label: "Kozhikode / Malabar region" },
    { value: "ernakulam", label: "Ernakulam / Kochi region" },
    { value: "thiruvananthapuram", label: "Thiruvananthapuram region" },
    { value: "other", label: "Other — mention in notes" },
] as const;
