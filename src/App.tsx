import { CartModal } from "./components/layout/CartModal"
import BlogSection from "./components/ui/BlogSection"
import ContactSection from "./components/ui/ContactSection"
import CTASection from "./components/ui/CTASection"
import ExperienceSection from "./components/ui/ExperienceSection"
import Footer from "./components/ui/Footer"
import GallerySection from "./components/ui/GallerySection"
import HeroSection from "./components/ui/HeroSection"
import MenuSection from "./components/ui/MenuSection"
import Navbar from "./components/ui/Navbar"
import SignatureCoffee from "./components/ui/SignatureCoffee"
import StorySection from "./components/ui/StorySection"
import TestimonialSection from "./components/ui/Testimonial"

function App() {
  return (
    <>
      <Navbar />
      <CartModal />
      <HeroSection />
      <SignatureCoffee />
      <StorySection />
      <ExperienceSection />
      <MenuSection />
      <BlogSection />
      <TestimonialSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
