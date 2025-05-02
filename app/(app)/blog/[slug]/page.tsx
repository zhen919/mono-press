import {Suspense} from "react";
import Loading from "@/app/(app)/loading";
import BlogContent from "@/components/BlogContent";

export default async function Blog({params,}: { params: Promise<{ slug: string }> }) {

    return (
        <div className="mx-auto w-full h-full 2xl:max-w-4xl max-w-3xl pb-10 md:pb-20">
            <Suspense fallback={<Loading />}>
                <BlogContent params={params} />
            </Suspense>
        </div>
    );
}
