import {z} from "zod";

export const Post = z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.string(),
    publishedAt: z.string(),
    description: z.string(),
    categories: z.array(z.string()).optional(),
    mainImage: z.object({
        _ref: z.string(),
        asset: z.object({
            url: z.string(),
            lqip: z.string().optional(),
            dominant: z
                .object({
                    background: z.string(),
                    foreground: z.string(),
                })
                .optional(),
        }),
    }),
});

export type Post = z.infer<typeof Post>;

export const PostDetail = Post.extend({
    body: z.any(),
});

export type PostDetail = z.infer<typeof PostDetail>;
