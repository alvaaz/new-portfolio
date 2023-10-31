import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		featuredImage: z.string(),
    excerpt: z.string(),
    color: z.string(),
    link: z.string().optional(),
    title1: z.string(),
    title2: z.string(),
    title3: z.string().optional(),
    content1: z.string(),
    content2: z.string(),
    content3: z.string(),
    content4: z.string().optional(),
    image1: z.string(),
    image2: z.string(),
    image3: z.string(),
    image4: z.string(),
    image5: z.string(),
    role: z.string(),
    contributors: z.array(z.string()),
    year: z.number()
	}),
});

export const collections = { projects };
