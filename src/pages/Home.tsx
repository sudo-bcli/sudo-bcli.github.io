import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="py-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Hi, I'm sudo-bcli 👋</h1>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          A developer who writes about code, tools, and things I find interesting.
        </p>
        <Link
          to="/blog"
          className="font-semibold border-b-2 border-gray-900 pb-0.5 hover:opacity-60 transition-opacity"
        >
          Read the Blog →
        </Link>
      </section>
    </div>
  )
}
