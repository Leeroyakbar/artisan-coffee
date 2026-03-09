import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../../hooks/useCart"

export const CartModal = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, isCartOpen, setIsCartOpen } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay Background Blur */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 z-50 bg-coffee-dark/20 backdrop-blur-sm" />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-coffee-beige shadow-2xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif text-coffee-dark">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:opacity-70 transition">
                <X className="text-coffee-dark" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <ShoppingBag size={48} className="text-coffee-mocha opacity-50" />
                <p className="text-coffee-mocha font-medium">Your cart is empty</p>
                <button onClick={() => setIsCartOpen(false)} className="bg-coffee-dark text-coffee-latte px-6 py-2 rounded-full hover:bg-coffee-mocha transition">
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-serif text-lg text-coffee-dark">{item.name}</h3>
                        <p className="text-coffee-mocha font-medium">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-coffee-latte rounded">
                            <Minus size={14} />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-coffee-latte rounded">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-coffee-dark hover:text-red-600">
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-coffee-mocha/20">
                  <div className="flex justify-between items-center mb-6 text-xl">
                    <span className="font-serif">Total</span>
                    <span className="font-bold text-coffee-dark">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-coffee-dark text-coffee-latte py-4 rounded-full font-medium hover:bg-coffee-mocha transition shadow-lg">Order via WhatsApp</button>
                  <button onClick={clearCart} className="w-full mt-4 text-coffee-mocha underline text-sm hover:text-coffee-dark">
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
