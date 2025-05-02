'use client'

import {ArrowRight, Clock} from "lucide-react";
import Link from "next/link";
import {Post} from "@/types/post";
import timeFormatter from "@/utils/time-helper";
import CategoryTags from "@/components/CategoryTags";

export interface BlogListCardProps {
    data: Post,
}

export default function BlogListCard({data}: BlogListCardProps) {

    return (
        <Link href={`/blog/${data.slug}`} className="w-full">
            <div className="flex flex-col items-start w-full py-4 group
        cursor-pointer transition-all duration-300 ease-out
        rounded-lg px-4 border border-transparent shadow-xs
        hover:shadow-lg hover:shadow-purple-200 hover:border hover:border-purple-200
         hover:bg-gradient-to-l hover:from-pink-50/50 hover:via-purple-50 hover:to-blue-50/50"
            >
                <div className="flex justify-between w-full text-wrap">
                    <h3 className="text-lg font-bold text-gray-700">
                        {data.title}
                    </h3>
                </div>
                <div className="text-gray-500 mt-4 text-sm line-clamp-3">
                    {data.description}
                </div>
                <div className="flex flex-wrap space-y-4 space-x-2 justify-between w-full mt-4 text-xs text-gray-500">
                    {
                        data.categories && data.categories.length > 0 && (
                            <CategoryTags tagNames={data.categories} />
                        )
                    }

                    <div className="flex flex-wrap my-auto items-start align-middle space-x-1">
                        <Clock size={14}/>
                        <span className="my-auto">{timeFormatter(data.publishedAt)}</span>
                    </div>

                    <div className="flex items-center group-hover:underline ml-auto">
                        <span className="">阅读全文</span>
                        <ArrowRight className="size-3 ml-1"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}
