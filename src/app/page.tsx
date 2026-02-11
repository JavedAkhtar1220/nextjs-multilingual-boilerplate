import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

const page = () => {
  redirect(routing.defaultLocale);
};

export default page;
