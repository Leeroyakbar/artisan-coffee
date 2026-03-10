import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqData = [
  { question: "How long is the shipping process?", answer: "We ship within 24 hours. Local delivery takes 1-2 days, while nationwide takes 3-5 business days." },
  { question: "What is your return policy?", answer: "Because coffee is a perishable item, we don't accept returns, but we guarantee quality. Contact us if there's an issue." },
  { question: "Do you provide wholesale prices?", answer: "Yes! Please contact our business team via WhatsApp for partnership inquiries." },
]

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-coffee-dark/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left font-bold text-coffee-dark">
        {question}
        <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
            <p className="pt-4 text-coffee-dark/70 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQPage = () => (
  <div className="max-w-3xl mx-auto py-24 px-6">
    <h2 className="text-3xl font-serif mb-12 text-center">Help & Information</h2>
    <div className="space-y-4">
      {faqData.map((item, i) => (
        <AccordionItem key={i} {...item} />
      ))}
    </div>
  </div>
)
