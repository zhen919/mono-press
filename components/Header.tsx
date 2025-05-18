"use client";

import NavigateCom from "@/components/NavigateCom";
import {NavigateData} from "@/data/navigate-data";
import Image from "next/image";
import AvatarImage from "@/public/avatar.png";
import useScrollDetector from "@/hooks/use-scroll-detector";
import {cn} from "@/libs/utils";
import {usePathname} from "next/navigation";
import {motion} from 'framer-motion';


export default function Header() {

    const showBg = useScrollDetector(120);

    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const currentPathname = `/${pathname.split('/')[1]}`;

    return (
        <header className={cn(`fixed top-0 left-0 w-screen h-[4.5rem] z-[9]`, showBg && 'bg-gray-50 shadow-sm')}>
            <div className={`mx-auto grid grid-areas-[left_right] grid-cols-[auto_4.5rem] min-h-0 w-full h-full max-w-7xl items-center px-4 md:px-0`}>
                <NavigateCom items={NavigateData} currentPath={currentPathname} />
                {
                    !isHomePage && (

                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1,  transition: { duration: 0.5 } }} >
                        <Image src={AvatarImage} alt="Avatar" className="size-12 rounded-4xl m-auto" />
                    </motion.div>
                    )
                }
            </div>
        </header>

    );
}
