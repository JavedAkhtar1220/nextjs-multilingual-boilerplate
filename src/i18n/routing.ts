import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "hi"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
