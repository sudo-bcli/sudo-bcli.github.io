import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="flex flex-col gap-8 list-none p-0">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-200 pb-8">
            <Link
              to={`/blog/${post.slug}`}
              className="text-xl font-semibold no-underline hover:underline"
            >
              {post.title}
            </Link>
            <time className="block text-sm text-gray-400 mt-1 mb-2">{post.date}</time>
            <p className="text-gray-500 leading-relaxed m-0">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
