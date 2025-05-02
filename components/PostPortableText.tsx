import Image from "next/image";
import {urlFor} from "@/libs/sanity-image";
import CodeBlock from "@/components/CodeBlock";
import {PortableTextComponents} from "@portabletext/react";


export const postComponents : PortableTextComponents = {
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
                : undefined
            return (
                <a
                    href={href}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel={rel}
                >
                    {children}
                </a>
            );
        }
    }
}
