"use client";

import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");
  return (
    <div>
      {t("title")}
      <br />
      {t("description")}
    </div>
  );
};

export default AboutPage;
