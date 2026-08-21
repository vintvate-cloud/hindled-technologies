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
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setTopCompacted(y > 24);
      // Hero section is full height (100vh), trigger light theme transition only when scrolled past 70% of viewport height
      const heroThreshold = (window.innerHeight || 800) * 0.7;
      setPastHero(y > heroThreshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Determine whether we are over a dark hero section (Index page top until scrolled past hero height)
  const isDarkHero = pathname === "/" && !pastHero;

  return (
    <>
      {/* Adaptive High-Contrast Glassmorphism Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-[2%] right-[2%] sm:left-[3%] sm:right-[3%] lg:left-[4%] lg:right-[4%] z-50 mx-auto flex max-w-[1600px] items-center justify-between rounded-full px-5 py-3.5 sm:px-8 sm:py-4.5 transition-all duration-500 backdrop-blur-2xl backdrop-saturate-180 ${
          topCompacted ? "top-4" : "top-6"
        } ${
          isDarkHero
            ? "border border-white/20 bg-black/40 text-white"
            : "border border-black/10 bg-paper/90 text-ink shadow-sm"
        }`}
      >
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 group"
        >
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 transition-transform duration-300 group-hover:scale-105">
            <path d="M22 10 H30 V16 H26 V22 H22 V10 Z" fill={isDarkHero ? "#FFFFFF" : "var(--color-ink)"} />
            <path d="M10 18 H14 V12 H18 V30 H10 V18 Z" fill="var(--color-signal)" />
          </svg>
          <span className="whitespace-nowrap font-display text-[17px] sm:text-[20px] md:text-[22px] font-bold tracking-[-0.01em]">
            <span className="text-signal">HINDL</span>
            <span className="relative inline-block">
              <span className={isDarkHero ? "text-white" : "text-ink"}>ED</span>
              <span className={`absolute top-[52%] left-[-2px] right-[-10px] h-[3px] -translate-y-1/2 ${
                isDarkHero ? "bg-white" : "bg-ink"
              }`} />
            </span>
          </span>
        </Link>

        {/* Center menu links (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.to;

            const baseStyle = `rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              active
                ? isDarkHero
                  ? "bg-white text-black shadow-md"
                  : "bg-ink text-paper shadow-md"
                : isDarkHero
                  ? "text-white/85 hover:text-white hover:bg-white/15"
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

        {/* Right side: CTA + hamburger */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={openDrawer}
            className={`rounded-full bg-signal px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap ${
              isDarkHero
                ? "text-paper hover:bg-white hover:text-black hover:shadow-xl"
                : "text-white hover:bg-ink hover:text-paper hover:shadow-lg"
            }`}
          >
            Get Quote
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors md:hidden ${
              isDarkHero
                ? "border border-white/20 text-white hover:bg-white/20"
                : "border border-black/15 text-ink hover:bg-black/5"
            }`}
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
            className={`fixed top-28 left-1/2 z-40 flex w-[92%] max-w-md -translate-x-1/2 flex-col gap-2 rounded-[32px] p-7 shadow-2xl backdrop-blur-2xl md:hidden ${
              isDarkHero
                ? "border border-white/20 bg-black/85 text-white"
                : "border border-black/10 bg-paper/95 text-ink shadow-xl"
            }`}
          >
            {links.map((l, i) => {
              const active = pathname === l.to;
              const linkStyle = `block rounded-2xl px-5 py-3.5 text-base font-display font-semibold transition-colors ${
                active
                  ? isDarkHero
                    ? "bg-white/20 text-signal"
                    : "bg-black/10 text-signal font-bold"
                  : isDarkHero
                    ? "text-white/90 hover:bg-white/10"
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
            <div className={`mt-4 pt-4 border-t ${isDarkHero ? "border-white/15" : "border-black/10"}`}>
              <button
                onClick={() => {
                  setOpen(false);
                  openDrawer();
                }}
                className="w-full text-center block rounded-2xl bg-signal py-3.5 text-sm font-bold uppercase tracking-wider text-paper hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
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
