import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex items-center justify-center h-20 bg-redx/80 dark:bg-redx/50">
            {/* <Link href="/" className="text-4xl font-semibold font-satoshi tracking-wider animate-in fade-in slide-in-from-top duration-500 ">
            Ishta.
            </Link> */}
            <Image 
            src="/whykerala.png"
            alt="kerala"
            width={62}
            height={62}
            className="animate-wiggle animate-infinite"
            />
        </div>
    );
}