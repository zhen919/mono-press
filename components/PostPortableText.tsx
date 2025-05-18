import Image from "next/image";
import {urlFor} from "@/libs/sanity-image";
import CodeBlock from "@/components/CodeBlock";
import {PortableTextComponents} from "@portabletext/react";


export const postComponents : PortableTextComponents = {
    block: {
        normal: ({children}) =>
            <p className="mb-4 text-[16px]">{children}</p>,
        h1: ({children, value}) =>
            <h1 id={value._key} className="text-3xl font-bold text-zinc-900 mb-6">{children}</h1>,
        h2: ({children, value}) =>
            <h2 id={value._key} className="text-2xl font-bold text-zinc-900 mb-6">{children}</h2>,
        h3: ({children, value}) =>
            <h3 id={value._key} className="text-xl font-bold text-zinc-900 mb-6">{children}</h3>,
        blockquote: ({children}) => <blockquote className="border-l-gray-500">{children}</blockquote>,
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }

            return (
                <Image
                    alt={value.alt || ' '}
                    loading="lazy"
                    height={value.height || 300}
                    width={value.width || 500}
                    src={urlFor(value).url()}
                    style={{
                        width: '100%',
                        marginBottom: '24px',
                    }}
                />
            )
        },
        code: ({ value }) => {
            return <CodeBlock value={value} />
        },
    },
    marks: {
        link: ({ children, value }) => {
            const { href } = value;
            const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined;
            return (
                <a
                    href={href}
                    className="underline hover:text-zinc-500 hover:no-underline"
                    target="_blank"
                    rel={rel}
                >
                    {children}
                </a>
            );
        }
    }
}
