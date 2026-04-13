import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-gray-900 font-semibold'
      : 'text-gray-500 hover:text-gray-900 transition-colors'

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      <Link to="/" className="text-lg font-bold text-gray-900 no-underline">sudo-bcli</Link>
      <div className="flex gap-6 text-sm">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/blog" className={linkClass}>Blog</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </div>
    </nav>
  )
}
