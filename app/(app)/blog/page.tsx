import {getBlogList} from "@/libs/sanity-queries";
import BlogListCard from "@/components/BlogListCard";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "博客",
};

export default async function Page() {

    //TODO limit is hardcoded to 10, need to be dynamic
    const posts = await getBlogList({offset: 0, limit: 10});
    
    return (
        <div className="flex flex-col space-y-4 items-start mx-auto 2xl:max-w-4xl max-w-3xl pb-8 ">
            { posts.map((blog) => (
                <BlogListCard key={blog._id} data={blog} />
            )) }

        </div>
    );
}
