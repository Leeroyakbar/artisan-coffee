import { CartModal } from "./components/layout/CartModal"
import BlogSection from "./components/ui/BlogSection"
import ExperienceSection from "./components/ui/ExperienceSection"
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
    </>
  )
}

export default App
