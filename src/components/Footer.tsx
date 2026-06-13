import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useContactDrawer } from "./ContactDrawer";

export function Footer() {
  const { openDrawer } = useContactDrawer();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.04]">
        <div className="text-display marquee whitespace-nowrap text-[22vw] leading-[0.85] text-paper">
          HINDLED-TECHNOLOGIES · HINDLED-TECHNOLOGIES · HINDLED-TECHNOLOGIES · HINDLED-TECHNOLOGIES ·
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col px-6 pt-32 pb-12 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-display text-[12.5vw] leading-[0.82] tracking-[-0.05em] md:text-[9.2vw]"
        >
          HIND<span className="text-signal">LED</span>-TECHNOLOGIES
        </motion.h2>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-paper/15 pt-10 md:grid-cols-4">
          <div>
            <div className="text-mono mb-4 text-paper/50">Studio</div>
            <p className="text-sm leading-relaxed text-paper/80">
              HINDLED-TECHNOLOGIES Technologies India Pvt. Ltd.
              <br />
              Lighting & Energy Division
              <br />
              India · Worldwide
            </p>
          </div>
          <div>
            <div className="text-mono mb-4 text-paper/50">Contact</div>
            <p className="text-sm leading-relaxed text-paper/80">
              hello@HINDLED-TECHNOLOGIES.in
              <br />
              +91 00 0000 0000
            </p>
          </div>
          <div>
            <div className="text-mono mb-4 text-paper/50">Navigate</div>
            <div className="flex flex-col gap-2 text-sm text-paper/80">
              <Link to="/products" className="hover:text-signal">Products</Link>
              <button onClick={openDrawer} className="hover:text-signal text-left cursor-pointer">Contact</button>
            </div>
          </div>
          <div>
            <div className="text-mono mb-4 text-paper/50">Signal</div>
            <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-paper/30">
              <input
                type="email"
                placeholder="email@studio.com"
                className="w-full bg-transparent py-2 text-sm text-paper outline-none placeholder:text-paper/40"
              />
              <button className="text-mono text-signal">→</button>
            </form>
            <div className="mt-6 flex gap-4 text-mono text-paper/60">
              <a href="#" className="hover:text-signal">IG</a>
              <a href="#" className="hover:text-signal">LI</a>
              <a href="#" className="hover:text-signal">YT</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/15 pt-6 text-mono text-paper/50 md:flex-row">
          <span>© {new Date().getFullYear()} HINDLED-TECHNOLOGIES Technologies — All rights reserved.</span>
          <span>Engineered in silence. Shipped worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
