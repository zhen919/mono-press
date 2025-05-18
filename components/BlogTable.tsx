"use client"
import {useState, useRef, useEffect} from "react";
import {cn} from "@/libs/utils";
import {HeadingNode} from "@/types";


interface BlogContentProps {
    headings: HeadingNode[]
}

export default function BlogTable({ headings }: BlogContentProps) {
    const [activeId, setActiveId] = useState<string>('');
    const headingsRef = useRef<Element[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
        );

        const headings = Array.from(document.querySelectorAll('h2, h3'));
        headingsRef.current = headings;

        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    return (
        headings.length > 0 && (
            <aside className="hidden lg:block w-[224px] text-[14px] leading-[1.4]">
                <div className="flex flex-col w-full  sticky top-[110px]">
                    <p className="mb-[16px] text-[16px] font-medium">目录</p>
                    <ul className="border-l-1 border-gray-800 pl-3 cursor-pointer ">
                        {
                            headings.map((heading, index) => (
                                <li key={index} className="pb-[14px]">
                                    <a href={`#${heading.key}`} className={cn(`py-1 text-zinc-500 hover:text-zinc-800 hover:bg-[#dcdcdc] active:bg-[#faea9d]`,
                                        activeId === heading.key && 'bg-[#faea9d]')}>
                                        {heading.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        )
    );
}
