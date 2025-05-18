'use client'

import Link from "next/link";

export default function HomeButton() {

    return (
        <Link href="/" className="rounded-full text-sm/6 font-semibold text-gray-900 ring-1 ring-gray-950/10 hover:ring-gray-950/20 px-4 py-2">
            <span className="">回到首页</span>
        </Link>
    );
}
