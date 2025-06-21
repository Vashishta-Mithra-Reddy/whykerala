import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

export default function Footer() {
    return (
        <div className="flex items-center justify-between mx-auto h-32 md:h-28 px-16 md:px-40 md:pb-0 bg-whitex/95 dark:bg-whitex/10 ">
            <Link href="/" className="text-2xl font-semibold font-satoshi text-redx/80">
            Let's go keralaaa.
            </Link>
            <ThemeSwitcher />
        </div>
    );
}