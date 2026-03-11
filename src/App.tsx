import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"
import HomePage from "./components/pages/HomePage"
import { FAQPage } from "./components/pages/FAQPage"
import { NotFoundPage } from "./components/ui/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
