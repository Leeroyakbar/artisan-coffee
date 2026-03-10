import { motion } from "framer-motion"
import { MapPin, Clock, Phone, MessageCircle, Mail } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-coffee-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-coffee-mocha font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark font-bold">Visit Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <ContactItem icon={<MapPin />} title="Address" text="Pidoli Lombang, Panyabungan, Mandailing Natal" />
            <ContactItem icon={<Clock />} title="Opening Hours" text="Mon - Fri: 7:00 AM - 9:00 PM | Sat - Sun: 8:00 AM - 10:00 PM" />
            <ContactItem icon={<Phone />} title="Phone" text="+62822 7336 6718" />
            <ContactItem icon={<MessageCircle />} title="WhatsApp" text="+62822 7336 6718" />
            <ContactItem icon={<Mail />} title="Email" text="info@artisancoffee.com" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Sub-component untuk detail kontak agar kode lebih rapi
const ContactItem = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="flex items-start gap-4">
    <div className="text-coffee-mocha mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-coffee-dark">{title}</h4>
      <p className="text-coffee-dark/70">{text}</p>
    </div>
  </div>
)

export default ContactSection
