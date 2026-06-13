import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { ContactDrawerProvider, ContactDrawer } from "./components/ContactDrawer";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/About";
import AppsPage from "./pages/Applications";
import ProductsPage from "./pages/Products";
import TechPage from "./pages/Technology";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ContactDrawerProvider>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen bg-paper text-ink">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/applications" element={<AppsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/technology" element={<TechPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback route - direct to index */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ContactDrawer />
        </SmoothScroll>
      </ContactDrawerProvider>
    </BrowserRouter>
  );
}
