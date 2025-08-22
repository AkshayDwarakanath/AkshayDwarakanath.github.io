import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getPostData, getSortedPostsData } from '../../../../lib/blog'

type Params = { slug: string }

export function generateStaticParams() {
  try {
    const posts = getSortedPostsData()
    
    // Return empty array if no posts to avoid build errors
    if (!posts || posts.length === 0) {
      return []
    }
    
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    // Return empty array if there's an error reading posts
    console.warn('Error generating static params for blog posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  try {
    const { slug } = await params
    const post = await getPostData(slug)
    return {
      title: `${post.title} | Akshay D`,
      description: post.excerpt,
      keywords: post.tags.join(', '),
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    }
  } catch {
    return {
      title: 'Post Not Found | Akshay D',
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  let post
  
  try {
    const { slug } = await params
    post = await getPostData(slug)
  } catch {
    notFound()
  }
  
  // Get related posts
  const relatedPosts = getSortedPostsData()
    .filter(p => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <div className="w-full px-12 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <div className="inline-flex items-center gap-2 text-[#6c757d] hover:text-[#212529] transition-colors font-medium">
              <ArrowLeft className="h-4 w-4" />
              ← Back to Blog
            </div>
          </Link>
        </div>

        {/* Main Terminal Window */}
        <div className="bg-white border border-[#dee2e6] rounded-lg overflow-hidden shadow-sm">
          {/* Terminal Header */}
          <div className="bg-[#f8f9fa] px-4 py-2 flex items-center gap-2 border-b border-[#dee2e6]">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-[#6c757d] ml-2">akshay@dev:~/blog/{post.slug}</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            {/* Command */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <span className="text-[#6c757d]">$</span>
              <span className="text-[#212529]">cat {post.slug}.md</span>
            </div>

            {/* Post Content */}
            <article className="prose prose-sm max-w-none">
              <header className="mb-6">
                <h1 className="text-2xl font-bold text-[#66a4de] mb-2">{post.title}</h1>
                <div className="flex items-center gap-4 text-xs text-[#6c757d] mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#f8f9fa] border border-[#dee2e6] rounded text-[#6c757d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>
              
              <div 
                className="text-[#212529] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <>
                <div className="border-t border-[#dee2e6] my-6"></div>
                <div className="mb-4">
                  <h3 className="text-[#66a4de] font-semibold mb-3">Related Posts</h3>
                  <div className="space-y-2">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                        <div className="text-xs text-[#6c757d] hover:text-[#66a4de] transition-colors">
                          → {relatedPost.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Terminal Prompt */}
            <div className="text-[#6c757d] mt-6">
              $ <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
