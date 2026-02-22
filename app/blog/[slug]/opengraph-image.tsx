import { ImageResponse } from "next/og"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

export const alt = "Nomad Ops Blog"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { frontmatter } = await getPostBySlug(slug)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#292524",
          padding: "60px",
        }}
      >
        {/* Top — Branding */}
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#c47d4e",
              letterSpacing: "-0.02em",
            }}
          >
            Nomad Ops Blog
          </span>
        </div>

        {/* Center — Post title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#faf9f6",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {frontmatter.title}
          </span>
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 20,
              color: "rgba(250, 249, 246, 0.5)",
            }}
          >
            nomad-ops.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
