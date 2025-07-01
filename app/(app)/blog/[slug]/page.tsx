import {Suspense} from "react";
import Loading from "@/app/(app)/loading";
import BlogContent from "@/components/BlogContent";
import {Metadata} from "next";
import Footer from "@/components/Footer";
import Utterances from "@/components/Utterances";

export const metadata: Metadata = {
    title: "博客",
};

export default async function Blog({params,}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    metadata.title = slug;

    return (
        <section className="flex flex-col mx-auto w-full h-full">
            <Suspense fallback={<Loading />}>
                <div className="mx-auto w-full 2xl:max-w-7xl xl:max-w-5xl max-w-3xl">
                    <BlogContent slug={slug} />
                </div>

                <div>
                    <Utterances
                        repo={"zhen919/mono-press"}
                        issueTerm={"pathname"}
                        theme={"github-light"}
                        label={"Comment"}
                        crossorigin={"anonymous"} >
                    </Utterances>
                </div>

                <Footer />
            </Suspense>


        </section>
    );
}
