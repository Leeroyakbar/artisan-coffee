import { easeOut, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const featuredCoffee = {
    id: 1,
    name: "House Blend",
    price: 12,
    quantity: 1,
    image: "/coffee-beans.jpg",
  }

  const handleAddToCart = () => {
    addToCart(featuredCoffee)
    // Trigger toast notifikasi
    toast.success("Added to cart", {
      description: `${featuredCoffee.name} has been added to your order.`,
      duration: 3000,
    })
  }

  const handleNavClick = (sectionId: string) => {
    // Jika kita tidak di halaman utama, pindah ke "/"
    if (location.pathname !== "/") {
      navigate("/")
      // Beri sedikit delay agar komponen selesai di-render di home
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      // Jika sudah di halaman utama, langsung scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="section-container min-h-[80vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeOut }}>
          <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Artisan Coffee Roasters</span>
          <h1 className="mt-4 mb-6">
            Brew Moments <br />
            <span className="text-coffee-mocha">That Matter</span>
          </h1>
          <p className="text-coffee-dark/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">Discover handcrafted coffee made from carefully selected beans, roasted to perfection for a rich and unforgettable taste.</p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => handleNavClick("menu")} className="btn-primary">
              Explore Coffee <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">Order Now</button>
          </div>
        </motion.div>

        {/* Right Content - Image & Floating Card */}
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {/* Main Hero Image */}
          <div className="rounded-4xl overflow-hidden shadow-2xl">
            <img src="/hero-coffee.jpg" alt="Artisan Coffee Preparation" className="w-full h-125 object-cover" />
          </div>

          {/* Floating Product Card */}
          <motion.div className="absolute -bottom-8 -left-8 md:left-[-10%] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 w-64" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-coffee-beige">
              <img src="/coffee-beans.jpg" alt="House Blend" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-coffee-dark/50 uppercase">Featured</p>
              <p className="font-bold text-coffee-dark">House Blend</p>
              <div className="flex justify-between items-center mt-1">
                <span className="font-bold text-coffee-mocha pr-2">Rp. 120000</span>
                <button onClick={() => handleAddToCart()} className="text-[10px] bg-coffee-dark text-white px-3 py-1 rounded-full">
                  Add
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
