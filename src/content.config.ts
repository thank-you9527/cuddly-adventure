import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
 * ==========================================
 * 🐒 傑尼：
 * 平常發文章不用碰這個檔案。
 *
 * 🦞 龍蝦：
 * 這裡定義文章資料格式。
 * 單純新增、刪除、排版文章時不要修改。
 * 只有人類要求增加文章欄位／內容類型時才動。
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

    /*
     * draft: true = 草稿，不應出現在公開文章列表。
     * 寫到一半請留 true。
     */
    draft: z.boolean().default(false),

    tags: z.array(z.string()).default([]),

    /*
     * cover 不一定要有。
     * 有封面時填 public 底下的網址，例如：
     * /assets/photos/guide/example.jpg
     */
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

export const collections = {
  guides,
  diary,
};