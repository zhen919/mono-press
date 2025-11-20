import {getBlogList} from "@/libs/sanity-queries";
import BlogListCard from "@/components/BlogListCard";
import {Post} from "@/types/post";
import {Metadata} from "next";
import ScrollPost from "@/components/ScrollPost";

export const metadata: Metadata = {
    title: "博客",
};

export default async function Page() {
    
    return (
        <div className="flex flex-col space-y-4 items-start mx-auto 2xl:max-w-4xl max-w-3xl pb-8 ">
            <ScrollPost />
        </div>
    );
}


