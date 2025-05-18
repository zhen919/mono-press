import {PortableText} from "next-sanity";
import {postComponents} from "@/components/PostPortableText";
import {getBlog} from "@/libs/sanity-queries";
import timeFormatter from "@/utils/time-helper";
import CategoryTags from "@/components/CategoryTags";
import NoContent from "@/components/NoContent";
import BlogTable from "@/components/BlogTable";
import {HeadingNode} from "@/types";

interface BlogContentProps {
    slug: string
}

export default async function BlogContent({slug}: BlogContentProps) {

    const post = await getBlog(slug);

    const headings: HeadingNode[] = [];

    post.body.forEach((item: {_key: string, style: string; children: { text: string; }[]; }) => {
        if (item.style === 'h3') {
            headings.push({ text: item.children.length ? item.children[0].text : '', key: item._key });
        }
    });

    return <>
        {
            Boolean(post) ? (
                    <div className="flex flex-col w-full mx-auto">
                        <header>
                            <h1 className="text-4xl font-bold text-start mt-10 leading-tight">{post?.title as string}</h1>
                            <div className="flex justify-start mt-6 space-x-4 mb-16">
                                {
                                    post?.categories && post?.categories.length > 0 && (
                                        <CategoryTags tagNames={post.categories} />
                                    )
                                }
                            </div>

                            <div className="dashed-meta flex justify-between pt-2 relative w-full">
                                <span className="text-[12px] my-auto">{timeFormatter(post?.publishedAt)}</span>
                                {/*<span className="text-sm">分享</span>*/}
                            </div>
                        </header>

                        <div className="flex mt-14">
                            <BlogTable headings={headings} />

                            <article className="mx-auto space-y-4 text-lg text-gray-700 prose lg:prose-xl w-full md:w-[calc(100%-224px)]">
                                <div className="tracking-normal text-base/7 space-y-2 w-full md:px-[5%]">
                                    {Array.isArray(post?.body) &&
                                        <PortableText value={post.body} components={postComponents} />
                                    }
                                </div>
                            </article>
                        </div>
                    </div>

            ) :
                <NoContent />
        }
    </>
}
