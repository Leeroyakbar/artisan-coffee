import { motion } from "framer-motion"

const stats = [
  { label: "Years of Craft", value: "10+" },
  { label: "Origins", value: "15+" },
  { label: "Cups Daily", value: "50K+" },
  { label: "Arabica", value: "100%" },
]

const StorySection = () => {
  return (
    <section id="story" className="section-container overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Roasting Image with Animation */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="rounded-[2.5rem] overflow-hidden h-125 shadow-2xl">
            <img src="/coffee-roasting.jpg" alt="Coffee Roasting Process" className="w-full h-full object-cover" />
          </div>
          {/* Decorative Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute -bottom-10 -right-10 bg-coffee-latte p-8 rounded-3xl shadow-lg hidden md:block">
            <p className="text-4xl font-bold text-coffee-dark">10+</p>
            <p className="text-sm text-coffee-dark/70 font-medium">Years of Craft</p>
          </motion.div>
        </motion.div>

        {/* Right: Story Narrative */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Our Story</span>
          <h2 className="mt-4 mb-8">From Bean to Cup</h2>

          <div className="space-y-6 text-coffee-dark/70 leading-relaxed">
            <p>Our journey begins in the highlands of Ethiopia, Colombia, and Indonesia, where we source the finest coffee cherries from small-scale farmers who share our passion for quality.</p>
            <p>Every batch is carefully roasted in small quantities to bring out the unique character of each origin. Our master roaster monitors every moment of the process, ensuring consistency and depth of flavor.</p>
            <p>From the moment the beans arrive to the final pour, we honor the artisan traditions that make exceptional coffee possible. Each cup is a testament to the journey from soil to soul.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-coffee-dark/10 pt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-2xl font-bold text-coffee-dark">{stat.value}</p>
                <p className="text-xs text-coffee-dark/60 uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
