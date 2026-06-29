"use client";

import { useEffect, useState } from "react";

import {
  fetchPublicSchools,
  type SelectOption,
  withNotListedOption,
} from "@/lib/publicSchoolsApi";

export const ADMISSION_NOT_LISTED: SelectOption = {
  value: "N/A",
  label: "N/A — SCHOOL NOT IN LIST",
};

const FALLBACK: SelectOption[] = [ADMISSION_NOT_LISTED];

export function useAdmissionSchoolOptions() {
  const [options, setOptions] = useState<SelectOption[]>(FALLBACK);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const schools = await fetchPublicSchools();
        if (!cancelled) {
          setOptions(withNotListedOption(ADMISSION_NOT_LISTED, schools));
          setError(null);
        }
      } catch (e) {
        if (!cancelled) {
          setOptions(FALLBACK);
          setError(e instanceof Error ? e.message : "Could not load schools");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { options, loading, error };
}
