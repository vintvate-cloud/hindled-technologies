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
              <Leaf className="h-7 w-7 text-signal transition-transform group-hover:rotate-12" />
              <span className="font-display text-3xl font-bold tracking-tight text-paper">HINDLED</span>
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

          <div className="md:col-span-2">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Studio</h4>
            <ul className="space-y-4 text-sm text-paper/80 font-light">
              <li><Link to="/about" className="hover:text-signal transition-colors">About Us</Link></li>
              <li><Link to="/technology" className="hover:text-signal transition-colors">Engineering</Link></li>
              <li><Link to="/applications" className="hover:text-signal transition-colors">Applications</Link></li>
              <li><button onClick={openDrawer} className="hover:text-signal transition-colors cursor-pointer text-left">Contact</button></li>
            </ul>
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
            whileInView={{ opacity: 0.05, y: 0 }}
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
