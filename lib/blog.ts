import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface Post {
  title: string
  slug: string
  date: string
  description: string
  excerpt: string
  author: string
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
    const { data } = matter(source)

    return {
      title: data.title,
      slug,
      date: data.date,
      description: data.description,
      excerpt: data.excerpt,
      author: data.author,
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)

  const { compile } = await import("@mdx-js/mdx")

  const compiled = await compile(content, {
    outputFormat: "function-body",
  })

  return {
    frontmatter: {
      title: data.title,
      slug,
      date: data.date,
      description: data.description,
      excerpt: data.excerpt,
      author: data.author,
    } as Post,
    code: String(compiled),
  }
}
