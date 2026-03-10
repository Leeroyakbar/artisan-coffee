import { Coffee } from "lucide-react"
import { Link, useNavigate } from "react-router-dom" // Tambahkan ini

const Footer = () => {
  const navigate = useNavigate()
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282273366718" // Tanpa simbol '+'
    const message = "Halo Admin, saya ingin bertanya mengenai Artisan Coffee."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }
  const handleNavClick = (sectionId: string) => {
    // Jika tidak di home, pindah ke home lalu scroll
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-coffee-dark text-coffee-latte py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Logo & About */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-coffee-mocha mb-6">
            <Coffee size={24} />
            <span className="font-bold text-xl tracking-tight">Artisan Coffee</span>
          </div>
          <p className="text-coffee-latte/60 text-sm leading-relaxed">Handcrafted coffee experiences since 2016. From bean to cup, every sip tells our story.</p>
        </div>

        {/* Links Sections */}
        <FooterLink
          title="Company"
          onNavClick={handleNavClick}
          links={[
            { name: "About Us", id: "story" },
            { name: "Our Coffee", id: "featured" },
            { name: "Menu", id: "menu" },
          ]}
        />

        <FooterLink
          title="Products"
          onNavClick={handleNavClick}
          links={[
            { name: "Coffee Beans", id: "menu" },
            { name: "Cold Brew", id: "menu" },
            { name: "Manual Brew", id: "menu" },
            { name: "Merchandise", id: "menu" },
          ]}
        />

        {/* Support Section - Mengarah ke /faq */}
        <div>
          <h4 className="font-bold text-white mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-coffee-latte/60">
            <li>
              <Link to="/faq" className="hover:text-coffee-mocha transition-colors">
                FAQ
              </Link>
            </li>
            <li className="cursor-pointer hover:text-coffee-mocha transition-colors" onClick={handleWhatsAppClick}>
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-coffee-latte/60">
            <li>Pidoli Lombang, Panyabungan</li>
            <li>+62822 7336 6718</li>
            <li>info@artisancoffee.com</li>
            <li className="cursor-pointer text-green-500 hover:text-green-400" onClick={handleWhatsAppClick}>
              Chat via WhatsApp
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-coffee-latte/10 text-center text-sm text-coffee-latte/40">© 2026 Artisan Coffee Roasters. All rights reserved.</div>
    </footer>
  )
}

// Update component untuk menerima objek link agar bisa routing
const FooterLink = ({ title, links, onNavClick }: { title: string; links: { name: string; id: string }[]; onNavClick: (id: string) => void }) => (
  <div>
    <h4 className="font-bold text-white mb-6">{title}</h4>
    <ul className="space-y-4 text-sm text-coffee-latte/60">
      {links.map((link) => (
        <li key={link.name}>
          <button onClick={() => onNavClick(link.id)} className="hover:text-coffee-mocha transition-colors text-left">
            {link.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Footer
