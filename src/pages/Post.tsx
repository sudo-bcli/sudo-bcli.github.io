import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold mb-4">Post not found</h2>
        <Link to="/blog" className="text-gray-500 hover:text-gray-900">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/blog" className="inline-block mb-6 text-sm text-gray-500 hover:text-gray-900 transition-colors">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <time className="block text-sm text-gray-400 mb-8">{post.date}</time>

      {/* 将来把正文内容渲染在这里，例如从 Markdown 解析 */}
      <div className="leading-[1.8] text-gray-700 space-y-5">
        <p>{post.summary}</p>
        <p>（正文内容待填写）</p>
      </div>
    </article>
  )
}
