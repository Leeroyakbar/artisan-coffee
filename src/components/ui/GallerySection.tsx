import { motion } from "framer-motion"

const galleryImages = [
  { src: "/interior.png", alt: "Interior Coffee", span: "md:col-span-2 md:row-span-2" },
  { src: "/coffee-roasting.jpg", alt: "Barista preparing coffee", span: "md:col-span-1 md:row-span-1" },
  { src: "/latte-art.jpg", alt: "Beautiful latte art", span: "md:col-span-1 md:row-span-2" },
  { src: "/barista.jpg", alt: "Coffee roasting process", span: "md:col-span-1 md:row-span-1" },
  { src: "/vietnam-drip.jpg", alt: "Vietnamese drip coffee", span: "md:col-span-1 md:row-span-2" },
  { src: "/coffee-with-friend.png", alt: "Coffee with friends", span: "md:col-span-1 md:row-span-2" },
  { src: "/coffee-gallery.png", alt: "Coffee gallery", span: "md:col-span-2 md:row-span-2" },
]

const GallerySection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <span className="text-coffee-mocha font-medium tracking-widest uppercase text-sm">Gallery</span>
        <h2 className="mt-4 font-bold">Our Coffee Space</h2>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
        {galleryImages.map((img, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1, duration: 0.5 }} className={`overflow-hidden rounded-2xl ${img.span}`}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default GallerySection
