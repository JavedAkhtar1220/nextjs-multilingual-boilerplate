"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  console.log("landing page");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {t("welcome")}
    </div>
  );
}
