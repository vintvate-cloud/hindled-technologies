import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContactDrawer } from "./ContactDrawer";
import { Leaf } from "lucide-react";

export function Footer() {
  const { openDrawer } = useContactDrawer();
  return (
    <footer className="bg-ink text-paper pt-24 pb-8 md:pt-32 md:pb-12 mt-12 rounded-t-[40px] md:rounded-t-[80px] overflow-hidden">
      <div className="mx-auto flex max-w-[1600px] flex-col px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 md:pb-24 border-b border-paper/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform group-hover:scale-105">
                <path d="M22 10 H30 V16 H26 V22 H22 V10 Z" fill="var(--color-paper)" />
                <path d="M10 18 H14 V12 H18 V30 H10 V18 Z" fill="var(--color-signal)" />
              </svg>
              <span className="whitespace-nowrap font-display text-3xl font-bold tracking-[-0.01em]">
                <span className="text-signal">HINDL</span>
                <span className="relative inline-block">
                  <span className="text-paper">ED</span>
                  <span className="absolute top-[52%] left-[-2px] right-[-10px] h-[3px] bg-paper -translate-y-1/2" />
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-paper/60 text-sm leading-relaxed font-light">
              Designing instruments that shape photons into architecture. 
              Precision outdoor lighting engineered for the world's most demanding environments.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Catalogue</h4>
            <ul className="space-y-4 text-sm text-paper/80 font-light">
              <li><Link to="/products" className="hover:text-signal transition-colors">Solar Systems</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">Stadium Floodlights</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">Industrial High-Bays</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">Area Lighting</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Studio</h4>
            <div className="space-y-4 text-sm text-paper/80 font-light leading-relaxed">
              <p>
                <strong className="block text-paper">HINDLED TECHNOLOGIES INDIA PVT. LTD.</strong>
                B-302, Plot No.95, Maurya Apartment<br />
                Patparganj, New Delhi - 110092
              </p>
              <div className="pt-2">
                <p>Anitya Kumar Rai, <span className="text-paper/50">Managing Director</span></p>
                <a href="mailto:hindled77@gmail.com" className="block hover:text-signal transition-colors">hindled77@gmail.com</a>
                <a href="tel:+919560121310" className="block hover:text-signal transition-colors">+91 9560121310</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Connect</h4>
            <ul className="space-y-4 text-sm text-paper/80 font-light">
              <li><a href="#" className="hover:text-signal transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-signal transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-signal transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Huge Bottom Typography */}
        <div className="w-full flex items-center justify-center py-8 md:py-12 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.15, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[22vw] md:text-[18vw] leading-none tracking-[-0.04em] font-extrabold text-paper select-none"
          >
            HINDLED.
          </motion.h1>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-paper/40 font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Hindled Technologies India Pvt. Ltd.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
