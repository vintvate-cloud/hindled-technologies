import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContactDrawer } from "./ContactDrawer";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const { openDrawer } = useContactDrawer();
  return (
    <footer className="bg-ink text-paper pt-24 pb-8 md:pt-32 md:pb-12 mt-12 rounded-t-[40px] md:rounded-t-[80px] overflow-hidden">
      <div className="mx-auto flex max-w-[1600px] flex-col px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 md:pb-24 border-b border-paper/10">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group" aria-label="HINDLED Technologies">
              <img
                src="/logo_horizontal_dark.png"
                alt="HINDLED Technologies Official Logo"
                className="h-9 md:h-11 w-auto max-w-[220px] object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="max-w-sm text-paper/70 text-sm leading-relaxed font-light">
              Engineering instruments that shape photons into architecture. 
              Precision solar smart poles, stadium floodlighting, and turnkey infrastructure solutions operating 100% without electricity.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={openDrawer}
                className="rounded-full bg-signal hover:bg-signal/90 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all shadow-md cursor-pointer"
              >
                Project Inquiry →
              </button>
            </div>
          </div>

          {/* Connect Column (Shifted to the right of the Brand description) */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Connect</h4>
            <ul className="space-y-4 text-sm text-paper/80 font-light">
              <li>
                <a
                  href="mailto:hindled77@gmail.com"
                  className="hover:text-signal transition-colors flex items-center gap-1.5 font-medium text-signal"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Direct Email Desk
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hindled.com"
                  className="hover:text-signal transition-colors flex items-center gap-1.5"
                >
                  info@hindled.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-signal transition-colors flex items-center gap-1"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3 text-paper/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hindled7?stkn=ZGdnb2o5ZDJxNGlh"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-signal transition-colors flex items-center gap-1"
                >
                  Instagram
                  <ExternalLink className="w-3 h-3 text-paper/40" />
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Solutions</h4>
            <ul className="space-y-4 text-sm text-paper/80 font-light">
              <li><Link to="/products" className="hover:text-signal transition-colors">360° Solar Smart Poles</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">Stadium Floodlights (HL GAJ)</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">CCTV + Solar Lighting (TEJAS)</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">Solar Heritage Garden (SANDHYA)</Link></li>
              <li><Link to="/products" className="hover:text-signal transition-colors">Industrial High-Bays (200 lm/W)</Link></li>
            </ul>
          </div>

          {/* Studio Headquarters */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-mono text-[10px] uppercase tracking-widest text-paper/40 mb-6 font-bold">Registered Office</h4>
            <div className="space-y-4 text-sm text-paper/80 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                <p>
                  <strong className="block text-paper">HINDLED TECHNOLOGIES INDIA PVT. LTD.</strong>
                  B-302, Plot No.95, Maurya Apartment<br />
                  Patparganj, New Delhi - 110092, India
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <p className="text-xs text-paper/60">Anitya Kumar Rai, <span className="text-paper/40">Managing Director</span></p>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-signal" />
                  <a href="mailto:hindled77@gmail.com" className="hover:text-signal transition-colors font-mono text-xs">
                    hindled77@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-signal" />
                  <a href="tel:+919560121310" className="hover:text-signal transition-colors font-mono text-xs">
                    +91 9560121310
                  </a>
                </div>
              </div>
            </div>
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
          <p>© {new Date().getFullYear()} Hindled Technologies India Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-paper transition-colors">About Studio</Link>
            <Link to="/technology" className="hover:text-paper transition-colors">Engineering</Link>
            <Link to="/contact" className="hover:text-paper transition-colors">Contact Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
