import { easeOut, motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { toast } from "sonner"

const products = [
  { id: 1, name: "House Blend Coffee Beans", price: 120000, notes: ["Chocolate", "Caramel", "Nutty"], roast: 4, image: "/coffee-beans.jpg" },
  { id: 2, name: "Single Origin Arabica", price: 160000, notes: ["Fruity", "Floral", "Citrus"], roast: 2, image: "/coffee-beans.jpg" },
  { id: 3, name: "Espresso Roast", price: 20000, notes: ["Bold", "Smoky", "Dark Chocolate"], roast: 5, image: "/espresso.jpg" },
  { id: 4, name: "Caffé Latte", price: 230000, notes: ["Creamy", "Smooth"], roast: 3, image: "/latte-art.jpg" },
  { id: 5, name: "Cold Brew Bottle", price: 18000, notes: ["Refreshing", "Clean"], roast: 3, image: "/cold-brew.jpg" },
]

const SignatureCoffee = () => {
  const { addToCart } = useCart()

  return (
    <section id="featured" className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeOut }} className="text-center mb-16">
        <span className="text-coffee-mocha tracking-widest uppercase text-md">Premium Selection</span>
        <h2 className="mt-4 font-bold">Our Signature Coffee</h2>
        <p className="text-coffee-dark/60 mt-2">Each blend tells a story of origin, craft, and passion.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: product.id * 0.1 }}
            whileHover={{ y: -10 }}
            className="product-card flex flex-col group border border-coffee-dark/5"
          >
            {/* Image container with zoom effect */}
            <div className="relative overflow-hidden rounded-xl mb-4 h-48">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-coffee-dark text-coffee-latte text-[10px] px-2 py-1 rounded">Best Seller</span>
            </div>

            {/* Product Details */}
            <h3 className="text-base font-bold text-coffee-dark mb-2">{product.name}</h3>

            <div className="flex flex-wrap gap-1 mb-3">
              {product.notes.map((note) => (
                <span key={note} className="text-[10px] bg-coffee-beige px-2 py-0.5 rounded text-coffee-dark/70">
                  {note}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`roast-level-dot ${i < product.roast ? "roast-level-dot-active" : ""}`} />
              ))}
            </div>

            {/* Action */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-coffee-dark/5">
              <span className="font-bold text-coffee-dark">Rp.{product.price}</span>
              <button
                onClick={() => {
                  addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })
                  toast.success("Added to cart", { description: `${product.name} added.` })
                }}
                className="p-2 bg-coffee-beige hover:bg-coffee-mocha hover:text-coffee-latte rounded-full transition-colors"
              >
                <ShoppingBag size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SignatureCoffee
