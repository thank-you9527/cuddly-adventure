import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
 * ==========================================
 * 🐒 傑尼：
 * 平常新增文章 / 写真不用碰這個檔案。
 *
 * 🦞 龍蝦：
 * 這裡定義網站內容格式。
 * 單純新增、刪除、排版內容時不要修改。
 * 只有人類要求增加欄位／內容類型時才動。
 * ==========================================
 */

const guides = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/guides",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

const diary = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/diary",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

/*
 * ==========================================
 * 娃写真
 *
 * doll  = 這輯主要是誰
 * cover = 写真列表封面
 *
 * 照片本體直接寫在 Markdown 裡。
 * ==========================================
 */
const photos = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/photos",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    doll: z.string().default(""),
    cover: z.string().default(""),
  }),
});

export const collections = {
  guides,
  diary,
  photos,
};