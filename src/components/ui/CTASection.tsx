import { motion } from "framer-motion"
import { Coffee, MapPin } from "lucide-react"

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/interior.png')", // Pastikan path gambar sesuai
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-coffee-dark/80 z-0" />

      {/* Content */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-coffee-latte mb-6">Start Your Perfect Coffee Moment</h2>
        <p className="text-coffee-latte/80 text-lg mb-10 max-w-xl mx-auto">Whether you're ordering for home or visiting our café, the perfect cup awaits.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="px-8 py-4 bg-coffee-mocha text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-coffee-mocha/90 transition-colors">
            Order Coffee <Coffee size={18} />
          </a>
          <a href="#contact" className="px-8 py-4 border border-coffee-latte/30 text-coffee-latte rounded-full font-medium flex items-center justify-center gap-2 hover:bg-coffee-latte/10 transition-colors">
            <MapPin size={18} /> Visit Our Store
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection
