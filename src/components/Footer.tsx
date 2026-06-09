import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="text-display marquee whitespace-nowrap text-[22vw] leading-[0.85] text-paper">
          LUMEN/X · LIGHT WITHOUT LIMITS · LUMEN/X · LIGHT WITHOUT LIMITS ·
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-6 py-16 lg:px-10">
        <div>
          <span className="text-mono text-paper/60">— 05 / Make Light Happen</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display my-20 text-[18vw] leading-[0.82] lg:text-[14vw]"
        >
          WE MAKE
          <br />
          <span className="text-signal">LIGHT</span>
          <br />
          HAPPEN.
        </motion.h2>

        <div className="grid grid-cols-2 gap-10 border-t border-paper/15 pt-10 md:grid-cols-4">
          <div>
            <div className="text-mono mb-4 text-paper/50">Studio</div>
            <p className="text-sm leading-relaxed text-paper/80">
              Lumen/X Engineering
              <br />
              Suite 7, Lighting Pavilion
              <br />
              Dubai · Berlin · Mumbai
            </p>
          </div>
          <div>
            <div className="text-mono mb-4 text-paper/50">Contact</div>
            <p className="text-sm leading-relaxed text-paper/80">
              hello@lumenx.studio
              <br />
              +971 4 000 0000
            </p>
          </div>
          <div>
            <div className="text-mono mb-4 text-paper/50">Navigate</div>
            <div className="flex flex-col gap-2 text-sm text-paper/80">
              <Link to="/products" className="hover:text-signal">Products</Link>
              <Link to="/applications" className="hover:text-signal">Applications</Link>
              <Link to="/technology" className="hover:text-signal">Technology</Link>
              <Link to="/contact" className="hover:text-signal">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-mono mb-4 text-paper/50">Signal</div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-paper/30"
            >
              <input
                type="email"
                placeholder="email@studio.com"
                className="w-full bg-transparent py-2 text-sm text-paper outline-none placeholder:text-paper/40"
              />
              <button className="text-mono text-signal">→</button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/15 pt-6 text-mono text-paper/50 md:flex-row">
          <span>© {new Date().getFullYear()} Lumen/X — All rights reserved.</span>
          <span>Engineered in silence. Shipped worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
