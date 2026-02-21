import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { run } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"

// MDX component overrides for consistent styling
const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="text-2xl sm:text-3xl font-bold text-charcoal mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="text-xl sm:text-2xl font-semibold text-charcoal mt-10 mb-3"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-stone leading-relaxed mb-5" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="list-disc list-outside pl-6 text-stone leading-relaxed mb-5 space-y-2"
      {...props}
    />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol
      className="list-decimal list-outside pl-6 text-stone leading-relaxed mb-5 space-y-2"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="text-stone leading-relaxed" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-copper hover:text-copper-dark underline underline-offset-2 transition-colors"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-copper/30 pl-6 my-6 text-stone italic"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-charcoal" {...props} />
  ),
  hr: () => <hr className="my-10 border-stone/15" />,
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = await getPostBySlug(slug)

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: `https://nomad-ops.com/blog/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://nomad-ops.com/blog/${slug}`,
      siteName: "Nomad Ops",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { frontmatter, code } = await getPostBySlug(slug)

  // Run the compiled MDX code to get a React component
  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  })

  return (
    <>
      {/* Article */}
      <article className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-charcoal transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <p className="text-sm text-stone mb-3">
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" · "}
              {frontmatter.author}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              {frontmatter.title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose-nomad">
            <MDXContent components={components} />
          </div>
        </div>
      </article>

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

      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: frontmatter.title,
            description: frontmatter.description,
            datePublished: frontmatter.date,
            author: {
              "@type": "Organization",
              name: frontmatter.author,
              url: "https://nomad-ops.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Nomad Ops",
              url: "https://nomad-ops.com",
              logo: {
                "@type": "ImageObject",
                url: "https://nomad-ops.com/logo.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://nomad-ops.com/blog/${slug}`,
            },
          }),
        }}
      />
    </>
  )
}
