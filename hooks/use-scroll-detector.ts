"use client"

import {useState, useEffect} from "react";

export default function useScrollDetector(detectorValue: number) {
    const [isScrolledPast, setIsScrolledPast] = useState<boolean>(false);

    useEffect(() => {
        setIsScrolledPast(window.scrollY > detectorValue);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolledPast(scrollPosition > detectorValue);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isScrolledPast;
}
