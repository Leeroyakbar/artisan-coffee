// pages/HomePage.tsx
import { CartModal } from "../layout/CartModal"
import BlogSection from "../ui/BlogSection"
import ContactSection from "../ui/ContactSection"
import CTASection from "../ui/CTASection"
import ExperienceSection from "../ui/ExperienceSection"
import GallerySection from "../ui/GallerySection"
import HeroSection from "../ui/HeroSection"
import MenuSection from "../ui/MenuSection"
import SignatureCoffee from "../ui/SignatureCoffee"
import StorySection from "../ui/StorySection"
import TestimonialSection from "../ui/Testimonial"
// ... (import section lainnya)

const HomePage = () => {
  return (
    <>
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
    </>
  )
}
export default HomePage
