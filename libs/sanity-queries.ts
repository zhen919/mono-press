import groq from "groq";
import {client} from "@/libs/sanity-client";
import {Post, PostDetail} from "@/types/post";

type BlogPostsOptions = {
    limit?: number,
    offset?: number,
    forDisplay?: boolean,
}


export const queryBlogListQuery = ({offset = 0, limit = 10} : BlogPostsOptions) =>
    groq`{
        "posts": *[_type == "post"
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
    updatedAt,
    "mainImage": mainImage.asset->url,
    description
    },
    "total": count(*[_type == "post" && defined(slug.current)])
    }`;

export const queryBolgTotalQuery = () => groq`
    count(*[_type == "post" && defined(slug.current)])
`;

export const getBlogList = (params: BlogPostsOptions) => {
    return client.fetch<{ posts: Post[], total: number }>(queryBlogListQuery(params));
}

export const getBlogTotal = () => {
  return client.fetch<number>(queryBolgTotalQuery());
};


export const blogQuery = groq`*[_type == "post" && slug.current == $slug][0] {
    _id, 
    title, 
    "slug": slug.current,
    "author": author->name,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    publishedAt, 
    updatedAt,
    body
}`;

export const getBlog = (slug: string) => {
    return client.fetch<PostDetail>(blogQuery, {slug});
}


