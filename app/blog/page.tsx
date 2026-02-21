import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

const POSTS_PER_PAGE = 10

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Straight talk about websites, SEO, and what actually works for small businesses. No jargon, no fluff — just practical advice you can use today.",
  alternates: {
    canonical: "https://nomad-ops.com/blog",
  },
  openGraph: {
    title: "Blog | Nomad Ops",
    description:
      "Straight talk about websites, SEO, and what actually works for small businesses.",
    url: "https://nomad-ops.com/blog",
    siteName: "Nomad Ops",
    type: "website",
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1)
  const allPosts = getAllPosts()
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const posts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <>
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-copper text-sm font-medium tracking-widest uppercase mb-4">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Practical advice for small business websites.
            </h1>
            <p className="mt-6 text-lg text-stone leading-relaxed">
              No jargon. No fluff. Just honest answers to the questions small
              business owners actually ask about their websites.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-12 max-w-3xl">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border-b border-stone/10 pb-12 last:border-0"
              >
                <p className="text-sm text-stone mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-2xl font-bold text-charcoal group-hover:text-copper transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-stone leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-copper hover:text-copper-dark transition-colors"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="flex items-center justify-between max-w-3xl mt-16 pt-8 border-t border-stone/10"
              aria-label="Blog pagination"
            >
              {currentPage > 1 ? (
                <Link
                  href={
                    currentPage === 2
                      ? "/blog"
                      : `/blog?page=${currentPage - 1}`
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-copper hover:text-copper-dark transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </Link>
              ) : (
                <span />
              )}

              <span className="text-sm text-stone">
                Page {currentPage} of {totalPages}
              </span>

              {currentPage < totalPages ? (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-copper hover:text-copper-dark transition-colors"
                >
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Find out what&apos;s holding your website back.
          </h2>
          <p className="mt-4 text-lg text-stone max-w-2xl mx-auto">
            Get a free, honest audit of your website. We&apos;ll show you
            what&apos;s working, what isn&apos;t, and exactly what to fix first.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-4 text-sm font-semibold text-warm-white hover:bg-copper-dark transition-colors"
            >
              Get Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-stone/70">
            Takes 30 seconds. Your report lands within 24 hours.
          </p>
        </div>
      </section>
    </>
  )
}
