import groq from "groq";
import {client} from "@/libs/sanity-client";
import {Post, PostDetail} from "@/types/post";

type BlogPostsOptions = {
    limit?: number,
    offset?: number,
    forDisplay?: boolean,
}

export const queryBlogListQuery = ({offset = 0, limit = 10} : BlogPostsOptions) =>
    groq`
    *[_type == "post"
    && defined(slug.current)]
    |order(publishedAt desc)
    [${offset}...${limit}]
    {
    _id, 
    title, 
    "slug": slug.current,
    "author": author->name,
    "categories": categories[]->title,
    publishedAt,
    "mainImage": mainImage.asset->url,
    description
    }`;

export const getBlogList = (params: BlogPostsOptions) => {
    return client.fetch<Post[]>(queryBlogListQuery(params));
}


export const blogQuery = groq`*[_type == "post" && slug.current == $slug][0] {
    _id, 
    title, 
    "slug": slug.current,
    "author": author->name,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    publishedAt, 
    body
}`;

export const getBlog = (slug: string) => {
    return client.fetch<PostDetail>(blogQuery, {slug});
}


