"use client"

import {useState, useEffect} from "react";

export default function useScrollDetector(detectorValue: number) {
    const [isScrolledPast100, setIsScrolledPast100] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolledPast100(scrollPosition > detectorValue);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isScrolledPast100;
}
