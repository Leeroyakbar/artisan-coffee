import { motion } from "framer-motion"
import { Coffee, Bean, Sparkles, Home } from "lucide-react"

const features = [
  {
    icon: Bean,
    title: "Freshly Roasted Beans",
    description: "Beans roasted in small batches for peak freshness and aroma.",
  },
  {
    icon: Coffee,
    title: "Handcrafted Brewing",
    description: "Every cup is carefully prepared by skilled baristas.",
  },
  {
    icon: Sparkles,
    title: "Premium Ingredients",
    description: "Only the finest, ethically sourced ingredients in every sip.",
  },
  {
    icon: Home,
    title: "Cozy Atmosphere",
    description: "A warm, inviting space designed for connection and comfort.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-coffee-dark py-24 px-6 text-coffee-latte">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="text-center mb-16">
          <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="mt-4 text-coffee-latte">The Coffee Experience</h2>
          <p className="text-coffee-latte/60 mt-2">Every detail crafted to make your coffee moment extraordinary.</p>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 bg-coffee-mocha/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-coffee-mocha" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-coffee-latte/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
