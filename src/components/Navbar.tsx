import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactDrawer } from "./ContactDrawer";

const links = [
  { to: "/products", label: "Products" },
  { to: "/technology", label: "Technology" },
  { to: "/applications", label: "Applications" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <motion.nav
        initial={{ y: -100, x: 24, opacity: 0 }}
        animate={{ y: 0, x: 24, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-[4%] right-[4%] z-50 mx-auto flex max-w-[1200px] items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 sm:py-3.5 shadow-lg transition-all duration-500 backdrop-blur-md ${
          scrolled
            ? "top-4 border-ink/10 bg-paper/85 shadow-black/[0.04] hover:bg-paper/90"
            : "top-6 border-white/20 bg-white/70 shadow-black/[0.02] hover:bg-white/80"
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center gap-1.5 sm:gap-2 font-display text-[13px] sm:text-[15px] font-semibold tracking-[-0.02em] text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          HINDLED<span className="hidden sm:inline">-TECHNOLOGIES</span>
        </Link>

        {/* Center menu links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            if (l.to === "/contact") {
              const active = pathname === "/contact";
              return (
                <button
                  key={l.to}
                  onClick={openDrawer}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    active ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {l.label}
                </button>
              );
            }
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right menu CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={openDrawer}
            className="rounded-full bg-ink px-3.5 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal hover:shadow-md hover:shadow-signal/15 cursor-pointer"
          >
            Get Quote
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink hover:bg-ink hover:text-paper transition-colors md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-24 left-1/2 z-40 flex w-[90%] -translate-x-1/2 flex-col gap-2 rounded-[28px] border border-ink/10 bg-paper p-6 shadow-xl md:hidden"
          >
            {links.map((l, i) => {
              if (l.to === "/contact") {
                const active = pathname === "/contact";
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => {
                        setOpen(false);
                        openDrawer();
                      }}
                      className={`w-full text-left block rounded-2xl px-4 py-3 text-base font-display font-semibold transition-colors cursor-pointer ${
                        active ? "bg-stone text-signal" : "text-ink hover:bg-stone/50"
                      }`}
                    >
                      {l.label}
                    </button>
                  </motion.div>
                );
              }
              const active = pathname === l.to;
              return (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className={`block rounded-2xl px-4 py-3 text-base font-display font-semibold transition-colors ${
                      active ? "bg-stone text-signal" : "text-ink hover:bg-stone/50"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              );
            })}
            <div className="mt-4 pt-4 border-t border-ink/5">
              <button
                onClick={() => {
                  setOpen(false);
                  openDrawer();
                }}
                className="w-full text-center block rounded-2xl bg-ink py-3 text-xs font-bold uppercase tracking-wider text-paper hover:bg-signal transition-colors cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
