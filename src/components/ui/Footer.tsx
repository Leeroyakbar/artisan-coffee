import { Coffee } from "lucide-react"

const Footer = () => {
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
        <FooterLink title="Company" links={["About Us", "Our Coffee", "Menu", "Careers"]} />
        <FooterLink title="Products" links={["Coffee Beans", "Cold Brew", "Manual Brew", "Merchandise"]} />
        <FooterLink title="Support" links={["FAQ", "Shipping Info", "Contact"]} />

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-coffee-latte/60">
            <li>Pidoli Lombang, Panyabungan</li>
            <li>+62822 7336 6718</li>
            <li>info@artisancoffee.com</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-coffee-latte/10 text-center text-sm text-coffee-latte/40">© 2026 Artisan Coffee Roasters. All rights reserved.</div>
    </footer>
  )
}

const FooterLink = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="font-bold text-white mb-6">{title}</h4>
    <ul className="space-y-4 text-sm text-coffee-latte/60">
      {links.map((link) => (
        <li key={link} className="hover:text-coffee-mocha transition-colors cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  </div>
)

export default Footer
