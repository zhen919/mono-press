"use client"

interface UtterancesProps {
    repo: string,
    issueTerm: string,
    theme: string,
    label: string,
    crossorigin: string,
}

import {useRef, useEffect} from "react";


export default function Utterances({repo = 'zhen919/mono-press',
                                   issueTerm = 'pathname',
                                   theme = 'github-light',
                                   label = 'Comment',
                                   crossorigin = 'anonymous'
} : UtterancesProps) {
    const commentsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', repo);
        script.setAttribute('issue-term', issueTerm);
        script.setAttribute('theme', theme);
        script.setAttribute('crossorigin', crossorigin);
        script.setAttribute('async', 'true');

        if (label) {
            script.setAttribute('label', label);
        }


        // 清除之前的评论区（避免重复加载）
        if (commentsRef.current) {
            commentsRef.current.innerHTML = '';
            commentsRef.current.appendChild(script);
        }

        // 清理函数
        return () => {
            if (commentsRef.current) {
                commentsRef.current.innerHTML = '';
            }
        };
    }, [repo, issueTerm, theme, label, crossorigin]);

    return <div ref={commentsRef} />;
}
