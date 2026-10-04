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
  const [topCompacted, setTopCompacted] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setTopCompacted(y > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Premium Glassmorphism Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-[2%] right-[2%] sm:left-[3%] sm:right-[3%] lg:left-[4%] lg:right-[4%] z-50 mx-auto flex max-w-[1600px] items-center justify-between rounded-full px-5 py-3 sm:px-8 sm:py-3.5 transition-all duration-500 backdrop-blur-2xl backdrop-saturate-180 border border-black/10 bg-paper/90 text-ink shadow-md ${
          topCompacted ? "top-3 sm:top-4 shadow-lg" : "top-5 sm:top-6"
        }`}
      >
        {/* Official Brand Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 group"
          aria-label="HINDLED Technologies Home"
        >
          <img
            src="/logo_horizontal.png"
            alt="HINDLED Technologies Official Logo"
            className="h-8 sm:h-9 md:h-10 w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center menu links (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.to;

            const baseStyle = `rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              active
                ? "bg-ink text-paper shadow-md"
                : "text-ink/80 hover:text-ink hover:bg-black/5"
            }`;

            if (l.to === "/contact") {
              return (
                <button
                  key={l.to}
                  onClick={openDrawer}
                  className={baseStyle}
                >
                  {l.label}
                </button>
              );
            }

            return (
              <Link
                key={l.to}
                to={l.to}
                className={baseStyle}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: Contact CTA on desktop & hamburger on mobile */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={openDrawer}
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-signal hover:bg-signal/90 text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            Engineering Desk →
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-ink hover:bg-black/5 transition-colors md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer (Glassmorphic) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-24 left-1/2 z-40 flex w-[92%] max-w-md -translate-x-1/2 flex-col gap-2 rounded-[32px] p-7 shadow-2xl backdrop-blur-2xl md:hidden border border-black/10 bg-paper/95 text-ink"
          >
            {links.map((l, i) => {
              const active = pathname === l.to;
              const linkStyle = `block rounded-2xl px-5 py-3.5 text-base font-display font-semibold transition-colors ${
                active
                  ? "bg-black/10 text-signal font-bold"
                  : "text-ink/90 hover:bg-black/5"
              }`;

              if (l.to === "/contact") {
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => {
                        setOpen(false);
                        openDrawer();
                      }}
                      className={`w-full text-left cursor-pointer ${linkStyle}`}
                    >
                      {l.label}
                    </button>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    className={linkStyle}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
