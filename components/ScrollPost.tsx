"use client";

import InfiniteScroll from 'react-infinite-scroll-component';
import {useEffect, useState} from "react";
import {getBlogList} from "@/libs/sanity-queries";
import {Post} from "@/types/post";
import BlogListCard from "@/components/BlogListCard";
import Loading from "@/app/(app)/loading";

export default function ScrollPost() {
    const [items, setItems] = useState<Post[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const fetchMoreData = async () => {
        try {
            const { posts } = await getServerSideProps({page: page, limit: 10});

            if (posts.length === 0) {
                setHasMore(false);
                return;
            }

            if (page === 1) {
                setItems(posts);
            } else {
                setItems(prevItems => [...prevItems, ...posts]);
                setPage(prevPage => prevPage + 1);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchMoreData().then();
    }, []);

    return (
       <div className="w-full">
           <InfiniteScroll
               dataLength={items.length}
               next={fetchMoreData}
               hasMore={hasMore}
               loader={<Loading />}
               className="flex flex-col space-y-4 items-start"
           >
               {items.map((blog) => (
                   <BlogListCard key={blog._id} data={blog} />
               ))}
           </InfiniteScroll>
       </div>
    );
}

interface query {
    page: number;
    limit: number;
}

export async function getServerSideProps({ page, limit = 10 }: query) {
    const currentPage = isNaN(page) ? 1 : page;
    const offset = (currentPage - 1) * limit;

    const data = await getBlogList({offset, limit});

    const totalPages = Math.ceil(data.total / limit);

    return {
        posts: data.posts,
        currentPage: currentPage,
        totalPages: totalPages,
    }
}
