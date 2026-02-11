"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center text-center">
      <p className="text-4xl font-bold ">{t("title")}</p>
      <span className="text-xl max-w-3xl text-center">{t("description")}</span>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        type="button"
        onClick={() => router.push("/")}
      >
        {t("cta_label")}
      </button>
    </div>
  );
};

export default AboutPage;
