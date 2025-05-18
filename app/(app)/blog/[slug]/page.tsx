import {Suspense} from "react";
import Loading from "@/app/(app)/loading";
import BlogContent from "@/components/BlogContent";
import {Metadata} from "next";
import BlogTable from "@/components/BlogTable";

export const metadata: Metadata = {
    title: "博客",
};

export default async function Blog({params,}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    metadata.title = slug;

    return (
        <section className="flex mx-auto w-full h-full 2xl:max-w-7xl xl:max-w-5xl max-w-3xl pb-10 md:pb-20">
            <Suspense fallback={<Loading />}>
                <BlogContent slug={slug} />
            </Suspense>
        </section>
    );
}
