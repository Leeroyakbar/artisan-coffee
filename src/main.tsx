import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { CartProvider } from "./context/CartProvider.tsx"
import { Toaster } from "sonner"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Toaster position="top-right" richColors />
      <App />
    </CartProvider>
  </StrictMode>,
)
