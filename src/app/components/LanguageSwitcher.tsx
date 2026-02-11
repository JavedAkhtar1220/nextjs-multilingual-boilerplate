"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  return (
    <ul className="absolute top-0 right-0 flex gap-2 text-lg justify-end p-4">
      {routing.locales.map((loc) => (
        <li key={loc}>
          <Link
            href={pathname}
            locale={loc}
            className="px-4 py-2 bg-red-100 rounded-2xl cursor-pointer"
          >
            {loc.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
