'use client'

import Link from "next/link";

export default function HomeButton() {

    return (
        <Link href="/"
            className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]
                     hover:text-white focus:ring-0 outline-hidden">
            <span
                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                回到首页
            </span>
        </Link>
    );
}
