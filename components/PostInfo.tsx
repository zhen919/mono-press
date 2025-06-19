"use client"

import timeFormatter, {getTimeDistance} from "@/utils/time-helper";
import {PostDetail} from "@/types/post";
import {useEffect, useState} from "react";
import {CopyIcon} from "lucide-react";
import toast from 'react-hot-toast';

interface PostInfo {
    post: PostDetail;
}

export default function PostInfo({ post }: PostInfo) {
    const [currentLink, setCurrentLink] = useState<string>('');

    useEffect(() => {
        setCurrentLink(window.location.origin + window.location.pathname);
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentLink);
            toast.success('已复制文章链接');
        } catch (error) {
            console.log(error);
            toast.error('复制失败');
        }
    };

    return (
        <div className="w-full md:px-[5%] flex flex-col justify-start space-y-4 pt-4 pb-8 text-sm text-gray-500">
            <p>
                <span>文章标题：<span>{post.title}</span></span>
            </p>
            <p>
                <span>文章作者：<span>{post.author}</span></span>
            </p>
            <p className="flex justify-start">
                <span>文章链接：<span>{ currentLink }</span></span>
                <CopyIcon onClick={handleCopy} className="my-auto mx-2 cursor-pointer w-6 md:w-4" />
            </p>
            <p>
                <span>文章发布已过去：<span>{ getTimeDistance(post.publishedAt) }</span></span>
            </p>
            <p>
                <span>最后修改时间：<span>{ post.updatedAt ? timeFormatter(post.updatedAt) : '暂时没有修改' }</span></span>
            </p>
        </div>
    );
}
