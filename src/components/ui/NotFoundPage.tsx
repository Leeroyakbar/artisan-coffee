// components/pages/NotFoundPage.tsx
import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-6xl font-bold text-coffee-dark mb-4">404</h1>
      <h2 className="text-2xl font-serif mb-6">Page Not Found</h2>
      <p className="text-coffee-dark/70 mb-8 max-w-sm">Oops! Sepertinya halaman yang kamu cari tidak ada atau sudah dipindahkan.</p>
      <Link to="/" className="px-8 py-3 bg-coffee-dark text-white rounded-full hover:bg-coffee-mocha transition-colors">
        Kembali ke Home
      </Link>
    </div>
  )
}
