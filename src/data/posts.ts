// 这里将来可以从 Markdown 文件或 CMS 读取，目前先用静态数据做骨架
export interface Post {
  slug: string
  title: string
  date: string
  summary: string
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2026-04-13',
    summary: 'The first post on this blog. Just getting started.',
  },
  {
    slug: 'vite-react-github-pages',
    title: 'Deploy Vite + React to GitHub Pages',
    date: '2026-04-13',
    summary: 'How I set up this blog using Vite, React, and GitHub Actions.',
  },
]
