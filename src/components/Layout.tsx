import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-200">
        <p>© {new Date().getFullYear()} sudo-bcli · Built with React + Vite</p>
      </footer>
    </div>
  )
}
