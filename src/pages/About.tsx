export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <p className="text-gray-500 leading-relaxed mb-4">
        Hi, I'm sudo-bcli. I'm a developer interested in systems, tooling, and the web.
      </p>
      <p className="text-gray-500 leading-relaxed mb-8">
        This blog is where I write about things I learn and build.
      </p>

      <h2 className="text-lg font-semibold mb-3">Links</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <a
            href="https://github.com/sudo-bcli"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}
