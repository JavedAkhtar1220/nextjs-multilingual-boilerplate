"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("greeting");
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center text-center">
      <p className="text-4xl font-bold ">{t("welcome")}</p>
      <span className="text-xl">{t("label")}</span>
    </div>
  );
}
