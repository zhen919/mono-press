"use client";

import {useState, useEffect, ReactNode} from "react";

export function ClientOnly({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (!isClient) return null;

    return children;
}
