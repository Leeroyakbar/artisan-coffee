import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { toast } from "sonner"

const categories = ["All", "Coffee Beans", "Hot Coffee", "Cold Coffee", "Manual Brew", "Merchandise"]

const products = [
  { id: 1, name: "House Blend Coffee Beans", category: "Coffee Beans", price: 120000, desc: "Our signature blend with notes of chocolate and caramel.", image: "/coffee-beans.jpg", bestSelling: true },
  { id: 2, name: "Single Origin Arabica", category: "Coffee Beans", price: 160000, desc: "Premium Mandhailing Arabica with fruity and floral undertones.", image: "/coffee-beans.jpg", bestSelling: true },
  { id: 3, name: "Espresso Roast", category: "Coffee Beans", price: 20000, desc: "Bold and intense dark roast for the perfect espresso.", image: "/espresso.jpg", bestSelling: true },
  { id: 4, name: "Caffè Latte", category: "Hot Coffee", price: 23000, desc: "Smooth espresso with steamed milk and a touch of foam.", image: "/latte-art.jpg", bestSelling: true },
  { id: 5, name: "Cappuccino", category: "Hot Coffee", price: 25000, desc: "Equal parts espresso, steamed milk, and velvety foam.", image: "/hero-coffee.jpg", bestSelling: true },
  { id: 6, name: "Americano", category: "Hot Coffee", price: 25000, desc: "Rich espresso diluted with hot water for a clean taste.", image: "/espresso.jpg", bestSelling: true },
  { id: 7, name: "Cold Brew Bottle", category: "Cold Coffee", price: 18000, desc: "Smooth, low-acid cold brew steeped for 18 hours.", image: "/cold-brew.jpg", bestSelling: true },
  { id: 8, name: "Vietnam Drip Coffee", category: "Manual Brew", price: 21000, desc: "Traditional Vietnamese phin drip with condensed milk.", image: "/vietnam-drip.jpg", bestSelling: true },
  { id: 9, name: "Coffee Drip Bag Pack", category: "Merchandise", price: 80000, desc: "Convenient single-serve drip bags. Pack of 10.", image: "/drip-bag.jpg", bestSelling: true },
]

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const { addToCart } = useCart()

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="menu" className="section-container">
      <div className="text-center mb-12">
        <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Browse & Order</span>
        <h2 className="mt-4 font-bold">Explore Our Coffee Menu</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-coffee-dark text-coffee-latte" : "bg-coffee-beige border border-coffee-dark/10 text-coffee-dark hover:border-coffee-dark/30"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div layout key={product.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="product-card flex flex-col group border border-coffee-dark/5">
              <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                {/* Gambar */}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                {/* Badge Best Seller - Sekarang selalu terlihat */}
                {product.bestSelling && <span className="absolute top-3 left-3 bg-coffee-dark text-coffee-latte text-[10px] px-2 py-1 rounded font-bold z-10 shadow-sm">Best Seller</span>}
              </div>
              <h3 className="font-bold text-coffee-dark">{product.name}</h3>
              <p className="text-sm text-coffee-dark/60 mt-1 mb-4 grow">{product.desc}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-coffee-dark">Rp.{product.price}</span>
                <button
                  onClick={() => {
                    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })
                    toast.success("Added to cart", { description: `${product.name} added to order.` })
                  }}
                  className="btn-primary py-2 px-4 text-xs"
                >
                  <ShoppingBag size={14} /> Add
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default MenuSection
