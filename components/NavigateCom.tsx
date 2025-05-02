import React from 'react';
import {NavigateProps} from "@/types";
import Link from "next/link";
import {cn} from "@/libs/utils";

interface NavigateComProps {
    items: NavigateProps[],
    currentPath: string,
}

export default function NavigateCom({items, currentPath}: NavigateComProps) {

    return (
        <nav className="flex space-x-8 md:space-x-12">
            {items.map(nav => {
                return (
                    <Link
                        key={nav.name}
                        href={nav.href}
                        className={cn('text-sm font-medium', currentPath === nav.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900')}
                    >
                        {nav.name}
                    </Link>
                );
            })}
        </nav>
    );
}
