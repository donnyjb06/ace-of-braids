import { PgSelectQueryBuilderBase } from "@payloadcms/db-postgres/drizzle/pg-core";
import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch();
    media.addEventListener("change", updateMatch)

    return () => media.removeEventListener("change", updateMatch)
  }, [query])

  return matches
}

export { useMediaQuery }