import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Index" },
  { to: "/products", label: "Products" },
  { to: "/applications", label: "Applications" },
  { to: "/technology", label: "Technology" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass hairline-b" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="group flex items-center gap-2">
            <span className="block h-2 w-2 rounded-full bg-signal" />
            <span className="text-display text-base tracking-[-0.02em] text-ink">
              LUMEN<span className="text-signal">/</span>X
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.slice(1).map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-mono group relative text-ink/80 transition-colors hover:text-ink"
                >
                  <span className="inline-block transition-[letter-spacing] duration-300 group-hover:tracking-[0.28em]">
                    {l.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-ink transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="text-mono hidden text-ink/70 hover:text-signal md:inline"
            >
              Inquire →
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="text-mono md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex flex-col bg-paper pt-24 md:hidden"
        >
          {links.slice(1).map((l, i) => (
            <motion.div
              key={l.to}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.06 * i }}
              className="hairline-b px-6 py-5"
            >
              <Link to={l.to} className="text-display text-4xl">
                {l.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
