import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center gap-1 mx-auto h-28 md:h-28 px-16 md:px-40 md:pb-0 bg-whitex/95 dark:bg-whitex/10 ">
            <Link href="/" className="text-2xl font-semibold font-satoshi text-redx/80">
            Let's go to keralaaa.
            </Link>
            <a href="https://v19.tech/?utm_source=why_kerala&utm_medium=referral&utm_campaign=built_by_v19" target="_blank" rel="noopener noreferrer" className="text-xs text-redx/50 hover:text-redx/80 transition-colors">Built by V19</a>
            {/* <ThemeSwitcher /> */}
        </div>
    );
}