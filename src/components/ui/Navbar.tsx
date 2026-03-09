import { Search, ShoppingBag, X, Menu, Coffee } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Signature", href: "#featured" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const { items, setIsCartOpen } = useCart()
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-40 bg-coffee-beige border-b border-coffee-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-coffee-dark hover:text-coffee-mocha transition-colors" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <a href="#home" className="flex items-center gap-2">
              <Coffee className="w-7 h-7 text-secondary" />
              <span className="font-serif text-xl lg:text-2xl font-bold text-coffee-dark">Artisan Coffee</span>
            </a>
          </div>

          {/* Desktop Menu Links - Menggunakan .nav-link dari index.css */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Search size={20} className="text-coffee-dark cursor-pointer hover:text-coffee-mocha transition-colors" />

            <div className="relative cursor-pointer p-2" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag size={20} className="text-coffee-dark hover:text-coffee-mocha transition-colors" />
              {totalItems > 0 && <span className="absolute top-0 right-0 bg-coffee-mocha text-coffee-latte text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{totalItems}</span>}
            </div>

            <a href="#Menu" className="hidden sm:inline-flex px-5 py-2.5 bg-coffee-dark text-sm font-medium rounded-full hover:bg-coffee-mocha transition-colors text-coffee-beige">
              Order Coffee
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-50 bg-coffee-dark/40 backdrop-blur-sm lg:hidden" />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-60 w-3/4 max-w-sm bg-coffee-beige p-6 shadow-xl lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-xl text-coffee-dark">Artisan Coffee</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-coffee-dark">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-coffee-dark hover:text-coffee-mocha transition-colors border-b border-coffee-dark/5 pb-2">
                    {link.label}
                  </a>
                ))}

                <button onClick={() => setMobileOpen(false)} className="btn-primary w-full mt-4">
                  Order Coffee
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
