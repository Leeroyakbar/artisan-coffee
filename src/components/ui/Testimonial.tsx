import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Lee Roy Akbar",
    role: "Coffee Enthusiast",
    quote: "One of the best coffee experiences I've had. The beans are incredibly fresh and aromatic. Every cup feels like a warm hug.",
    image: "/testimonial/lee.jpg",
  },
  {
    name: "Lili Rahma Yani",
    role: "Food Blogger",
    quote: "The single origin Arabica is outstanding. You can really taste the careful sourcing and roasting that goes into every batch.",
    image: "/testimonial/lili.jpg",
  },
  {
    name: "Lili Lee",
    role: "Regular Customer",
    quote: "I've been ordering their cold brew for months. The consistency and smoothness is unmatched. My morning ritual.",
    image: "/testimonial/lili-lee.png",
  },
]

const TestimonialSection = () => {
  return (
    <section className="section-container bg-coffee-beige">
      <div className="text-center mb-16">
        <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Testimonials</span>
        <h2 className="mt-4">What Our Customers Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-coffee-dark/5 relative"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-coffee-mocha text-coffee-mocha" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-coffee-dark/70 italic mb-8 leading-relaxed">"{t.quote}"</p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-coffee-beige shadow-sm" />{" "}
              <div>
                <p className="font-bold text-coffee-dark">{t.name}</p>
                <p className="text-xs text-coffee-dark/50 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
