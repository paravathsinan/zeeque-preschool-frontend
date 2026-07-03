export type PublicSchoolOption = {
  label: string;
  value: string;
  code: string;
  name: string;
};

export type SelectOption = { value: string; label: string };

/** Django ERP API base (zeeapi) — not the legacy FastAPI web backend. */
export function getMainApiBase(): string {
  if (typeof window !== "undefined") return "";
  return (
    process.env.NEXT_PUBLIC_ADMISSION_API_URL?.replace(/\/$/, "") ??
    process.env.NEXT_PUBLIC_EMPLOYMENT_API_URL?.replace(/\/$/, "") ??
    "http://127.0.0.1:8000"
  );
}

export async function fetchPublicSchools(): Promise<PublicSchoolOption[]> {
  const apiBase = getMainApiBase();
  const res = await fetch(`${apiBase}/api/v1/schools/`, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Could not load schools (${res.status})`);
  }
  const data: unknown = await res.json();
  if (!Array.isArray(data)) {
    throw new Error("Invalid schools response");
  }
  return data as PublicSchoolOption[];
}

export function withNotListedOption(
  notListed: SelectOption,
  schools: PublicSchoolOption[],
): SelectOption[] {
  return [
    notListed,
    ...schools.map((s) => ({ value: s.value, label: s.label })),
  ];
}
