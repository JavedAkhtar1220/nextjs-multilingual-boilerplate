import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // const requested = await requestLocale;

  const isLocale: Locale = hasLocale(routing.locales, locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return {
    locale: isLocale,
    messages: (await import(`../../public/locale/${isLocale}/${isLocale}.json`))
      .default,
  };
});
