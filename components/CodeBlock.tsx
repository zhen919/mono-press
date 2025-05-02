'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import {ClipboardCheckIcon, ClipboardListIcon} from "lucide-react";
import {useCallback, useState} from "react";
import CustomTooltip from "@/components/CustomTooltip";

interface PortableTextComponentProps {
    value: {
        code: string
        language: string,
        _key: string,
        filename?: string
    }
}

export default function CodeBlock({value}: PortableTextComponentProps) {
    const { code, language, _key, filename } = value;
    const [hasCopied, setHasCopied] = useState(false);

    const onClickCopy = useCallback(() => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                setHasCopied(true);
                setTimeout(() => {
                    setHasCopied(false);
                }, 3000);
            })
            .catch(() => {
                console.error('Failed to copy code block');
            })
    }, [code]);

    return (
        <div
            data-blockid={_key}
            data-filenname={filename}
        >
            <div className="relative flex text-xs leading-6 text-slate-400">
                {Boolean(filename) && (
                    <>
                        <div className="mt-2 flex flex-none items-center border-b border-t border-b-emerald-700 border-t-transparent px-4 py-1 font-medium text-emerald-700 dark:border-b-emerald-200 dark:text-emerald-200">
                            {filename}
                        </div>
                        <div className="flex flex-auto overflow-hidden rounded-tr-3xl pt-2">
                            <div className="-mr-px flex-auto rounded-tl border border-zinc-300/40 bg-zinc-200/50 dark:border-zinc-500/30 dark:bg-zinc-700/50" />
                        </div>
                    </>
                )}
                <div className="absolute right-0 top-2 flex h-8 items-center pr-4">
                    <div className="relative -mr-0.5 flex">
                        <CustomTooltip content="复制">
                            <button
                                type="button"
                                className="text-zinc-400 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-400"
                                onClick={onClickCopy}
                            >
                                {hasCopied ? (
                                    <ClipboardCheckIcon className="h-5 w-5" />
                                ) : (
                                    <ClipboardListIcon className="h-5 w-5" />
                                )}
                            </button>
                        </CustomTooltip>
                    </div>
                </div>
            </div>
            <SyntaxHighlighter
                showLineNumbers={true}
                showInlineLineNumbers={true}
                language={language}
                customStyle={{
                    padding: '1em',
                    marginBottom: '2em',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
