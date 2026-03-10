import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How to Brew the Perfect Coffee at Home",
    preview: "Master the art of home brewing with our step-by-step guide to achieving...",
    image: "/vietnam-drip.jpg",
  },
  {
    id: 2,
    title: "Difference Between Arabica and Robusta",
    preview: "Understanding the two most popular coffee species and what makes each...",
    image: "/coffee-beans.jpg",
  },
  {
    id: 3,
    title: "Best Coffee Beans for Espresso",
    preview: "Discover which beans deliver the richest crema and most balanced...",
    image: "/espresso.jpg",
  },
  {
    id: 4,
    title: "Beginner Guide to Pour Over Coffee",
    preview: "Everything you need to know to start your pour over journey from equipment...",
    image: "/latte-art.jpg",
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="section-container">
      <div className="text-center mb-16">
        <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Learn & Discover</span>
        <h2 className="mt-4 font-bold">Coffee Journal</h2>
        <p className="text-coffee-dark/60 mt-2">Stories, tips, and insights from the world of specialty coffee.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col justify-between over group cursor-pointer"
          >
            {/* Blog Image */}
            <div className="flow-hidden rounded-2xl mb-4 h-64">
              <img src={post.image} alt={post.title} className="w-full h-full roudned-2xl object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-coffee-dark group-hover:text-coffee-mocha transition-colors">{post.title}</h3>
            <p className="text-coffee-dark/60 text-sm mt-2 mb-4 leading-relaxed">{post.preview}</p>

            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-coffee-dark hover:gap-3 transition-all">
              Read More <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
