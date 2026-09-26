import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"

// `코드`: font-mono text-sm
// **굵게**: font-semibold
// ==강조==: font-semibold text-primary
const inline = z.string().transform((s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .split(/(`[^`]+`)/)
    .map((part, i) =>
      i % 2
        ? `<code>${part.slice(1, -1)}</code>`
        : part
            .replace(/\*\*([^*]+)\*\*/g, '<span class="font-semibold">$1</span>')
            .replace(/==([^=]+)==/g, '<span class="font-semibold text-primary">$1</span>')
    )
    .join("")
)

const projects = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      period: z.object({
        start: z.string().regex(/^\d{4}\.\d{2}$/),
        end: z
          .string()
          .regex(/^\d{4}\.\d{2}$/)
          .optional(),
      }),
      techStack: z.array(z.string()).default([]),
      links: z.object({ github: z.url(), demo: z.url().optional() }),
      accounts: z
        .array(z.object({ label: z.string(), username: z.string(), password: z.string() }))
        .default([]),
      thumbnail: image(),
      images: z.array(image()).default([]),

      flowchart: z
        .object({
          label: z.string(),
          lightLr: image(),
          lightTb: image(),
          darkLr: image(),
          darkTb: image(),
        })
        .optional(),

      overview: z.array(inline).default([]),
      features: z
        .array(
          z.object({
            title: z.string(),
            details: z.array(z.object({ content: inline, tag: z.string().optional() })).default([]),
          })
        )
        .default([]),
      decisions: z.array(inline).default([]),
      troubleshooting: z
        .array(
          z.object({
            title: z.string(),
            problem: inline,
            analysis: inline,
            action: inline,
            result: inline,
          })
        )
        .default([]),
    }),
})

export const collections = { projects }
