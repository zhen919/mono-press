import {PortableText} from "next-sanity";
import {postComponents} from "@/components/PostPortableText";
import HomeButton from "@/components/HomeButton";
import {getBlog} from "@/libs/sanity-queries";
import timeFormatter from "@/utils/time-helper";
import {Clock} from "lucide-react";
import CategoryTags from "@/components/CategoryTags";

interface BlogContentProps {
    params: Promise<{ slug: string }>
}

export default async function BlogContent({params}: BlogContentProps) {

    const post = await getBlog((await params).slug);

    return <>
        {
            Boolean(post) ? (
                <div className="flex flex-col w-full mx-auto">
                    <h1 className="text-4xl font-bold text-center mt-10 leading-tight">{post?.title as string}</h1>
                    <div className="flex justify-center mt-6 space-x-4">
                        <p className="flex text-gray-500 text-sm text-center my-auto">
                            <Clock size={14} className="mr-2 my-auto" />
                            <span className="my-auto">{timeFormatter(post?.publishedAt)}</span>
                        </p>
                        {
                            post?.categories && post?.categories.length > 0 && (
                                <CategoryTags tagNames={post.categories} />
                            )
                        }
                    </div>
                    <div className="mt-10 mx-auto space-y-4 text-lg text-gray-700 prose lg:prose-xl w-full">
                        <div className="tracking-normal text-base/7 space-y-2 w-full">
                            {Array.isArray(post?.body) &&
                                <PortableText value={post.body} components={postComponents} />
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className="">
                    <h1 className="text-4xl font-bold text-center mt-10">抱歉，未找到内容！</h1>
                    <p className="text-gray-500 text-sm text-center mt-4">请检查链接是否正确。</p>
                    <div className="flex justify-center mt-4">
                        <HomeButton />
                    </div>
                </div>
            )
        }
    </>
}
