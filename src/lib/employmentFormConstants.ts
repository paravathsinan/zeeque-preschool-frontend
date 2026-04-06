export const INDIAN_STATES = [
    { value: "andhra-pradesh", label: "Andhra Pradesh" },
    { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
    { value: "assam", label: "Assam" },
    { value: "bihar", label: "Bihar" },
    { value: "chhattisgarh", label: "Chhattisgarh" },
    { value: "goa", label: "Goa" },
    { value: "gujarat", label: "Gujarat" },
    { value: "haryana", label: "Haryana" },
    { value: "himachal-pradesh", label: "Himachal Pradesh" },
    { value: "jharkhand", label: "Jharkhand" },
    { value: "karnataka", label: "Karnataka" },
    { value: "kerala", label: "Kerala" },
    { value: "madhya-pradesh", label: "Madhya Pradesh" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "manipur", label: "Manipur" },
    { value: "meghalaya", label: "Meghalaya" },
    { value: "mizoram", label: "Mizoram" },
    { value: "nagaland", label: "Nagaland" },
    { value: "odisha", label: "Odisha" },
    { value: "punjab", label: "Punjab" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "sikkim", label: "Sikkim" },
    { value: "tamil-nadu", label: "Tamil Nadu" },
    { value: "telangana", label: "Telangana" },
    { value: "tripura", label: "Tripura" },
    { value: "uttar-pradesh", label: "Uttar Pradesh" },
    { value: "uttarakhand", label: "Uttarakhand" },
    { value: "west-bengal", label: "West Bengal" },
    { value: "andaman-nicobar", label: "Andaman and Nicobar Islands" },
    { value: "chandigarh", label: "Chandigarh" },
    { value: "dadra-nagar-haveli", label: "Dadra and Nagar Haveli and Daman and Diu" },
    { value: "delhi", label: "Delhi" },
    { value: "jammu-kashmir", label: "Jammu and Kashmir" },
    { value: "ladakh", label: "Ladakh" },
    { value: "lakshadweep", label: "Lakshadweep" },
    { value: "puducherry", label: "Puducherry" },
    { value: "other", label: "Other" },
];

export const RELIGIOUS_EDU_OPTIONS = [
    { value: "madrasa", label: "Madrasa Grade 7/10/12" },
    { value: "afzal", label: "Afzal-ul-ulama Degree" },
    { value: "ma-phd", label: "M.A / Ph.D" },
    { value: "other", label: "Other" },
];

export const GENERAL_EDU_OPTIONS = [
    { value: "sslc", label: "SSLC / Class 10" },
    { value: "plus-two", label: "Plus Two / Class 12" },
    { value: "degree", label: "Bachelor's Degree" },
    { value: "pg", label: "Post Graduation" },
];

export const GENDER_OPTIONS = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
];

export const MARITAL_OPTIONS = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
];

export const ZAHRAWI_OPTIONS = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
];

/** Training step: basic type (dropdown). */
export const TRAINING_BASIC_BATCH_OPTIONS = [
    { value: "regular-batch", label: "Regular batch" },
    { value: "residential-batch", label: "Residential batch" },
] as const;

/** When basic batch = residential — fixed RB1–RB6. */
export const TRAINING_RESIDENTIAL_BATCH_OPTIONS = [
    { value: "RB1", label: "RB1" },
    { value: "RB2", label: "RB2" },
    { value: "RB3", label: "RB3" },
    { value: "RB4", label: "RB4" },
    { value: "RB5", label: "RB5" },
    { value: "RB6", label: "RB6" },
] as const;

/**
 * When basic batch = regular — update labels/values here as programmes change.
 */
export const TRAINING_REGULAR_BATCH_OPTIONS = [
    { value: "regular-01", label: "Regular batch 01" },
    { value: "regular-02", label: "Regular batch 02" },
    { value: "regular-03", label: "Regular batch 03" },
    { value: "regular-04", label: "Regular batch 04" },
] as const;

export const TRAINING_RESIDENTIAL_BATCH_VALUES = TRAINING_RESIDENTIAL_BATCH_OPTIONS.map((o) => o.value);
export const TRAINING_REGULAR_BATCH_VALUES = TRAINING_REGULAR_BATCH_OPTIONS.map((o) => o.value);

export function trainingBatchOptionsForBasic(basicBatch: string) {
    if (basicBatch === "residential-batch") return [...TRAINING_RESIDENTIAL_BATCH_OPTIONS];
    if (basicBatch === "regular-batch") return [...TRAINING_REGULAR_BATCH_OPTIONS];
    return [];
}
