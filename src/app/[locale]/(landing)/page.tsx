"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="flex min-h-screen items-center justify-center text-4xl font-bold text-center">
      {t("welcome")}
    </div>
  );
}
