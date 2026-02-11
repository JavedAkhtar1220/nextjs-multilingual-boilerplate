"use client";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const Navigation = () => {
  const locale = useLocale();
  const pathname = usePathname();
  console.log("pathname :>> ", pathname);
  return (
    <Link
      href={`/about`}
      locale={locale}
      className={`absolute top-5 left-4  px-4 py-2 bg-red-100 rounded-2xl 
        ${pathname === `/about` || pathname === `/${locale}/about` ? "hidden" : "visible"}`}
    >
      About Page
    </Link>
  );
};

export default Navigation;
