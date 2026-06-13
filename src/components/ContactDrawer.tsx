import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useRouterState } from "@tanstack/react-router";

interface ContactDrawerContextType {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const ContactDrawerContext = createContext<ContactDrawerContextType | undefined>(undefined);

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const openDrawer = () => setIsOpen(true);
  
  const closeDrawer = () => {
    setIsOpen(false);
    if (pathname === "/contact") {
      // Try to go back in history if possible
      if (window.history.length > 1) {
        window.history.back();
        // Fallback check: if we are still on /contact after 100ms, go to home
        setTimeout(() => {
          if (window.location.pathname === "/contact") {
            navigate({ to: "/" });
          }
        }, 100);
      } else {
        navigate({ to: "/" });
      }
    }
  };

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  return (
    <ContactDrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
    </ContactDrawerContext.Provider>
  );
}

export function useContactDrawer() {
  const context = useContext(ContactDrawerContext);
  if (!context) {
    throw new Error("useContactDrawer must be used within a ContactDrawerProvider");
  }
  return context;
}

export function ContactDrawer() {
  const { isOpen, closeDrawer } = useContactDrawer();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Bottom Sheet Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex max-h-[96vh] w-full max-w-[1250px] flex-col overflow-y-auto rounded-t-[32px] md:rounded-t-[40px] bg-white p-6 md:p-10 lg:p-12 shadow-2xl text-ink border-t border-ink/5 no-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={closeDrawer}
              aria-label="Close Contact Drawer"
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-stone text-ink hover:bg-ink hover:text-paper transition-colors z-10 text-base cursor-pointer"
            >
              ✕
            </button>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 pt-6">
              
              {/* Left Column: Info & Locations */}
              <div className="md:col-span-5 flex flex-col justify-between gap-6">
                <div>
                  <div className="text-mono text-signal mb-3">— Signal / Contact</div>
                  <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.04em] font-bold">
                    LET'S BUILD
                    <br />
                    THE FUTURE OF
                    <br />
                    <span className="text-signal">LIGHT.</span>
                  </h2>
                  
                  <p className="mt-4 text-sm leading-relaxed text-ink/75 max-w-sm">
                    Connect with our engineering desk for stadium consultations, custom optic profiles, or technical project support.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Studios */}
                  <div className="border-t border-ink/10 pt-4">
                    <div className="text-mono text-ink/40 mb-3 uppercase tracking-wider text-[9px]">Office Locations</div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { c: "Dubai", a: "DIFC" },
                        { c: "Berlin", a: "Kreuzberg" },
                        { c: "Mumbai", a: "BKC" },
                      ].map((s) => (
                        <div key={s.c}>
                          <div className="font-display text-sm font-bold text-ink">{s.c}</div>
                          <div className="text-[10px] text-ink/60">{s.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact */}
                  <div className="border-t border-ink/10 pt-4">
                    <div className="text-mono text-ink/40 mb-1.5 uppercase tracking-wider text-[9px]">Direct Channel</div>
                    <a href="mailto:hello@HINDLED-TECHNOLOGIES.in" className="font-display text-lg lg:text-xl font-bold text-ink hover:text-signal transition-colors block">
                      hello@HINDLED-TECHNOLOGIES.in
                    </a>
                    <div className="text-xs text-ink/50 mt-0.5 font-mono">+971 4 000 0000</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="md:col-span-7 bg-stone/30 rounded-[28px] p-6 md:p-8 lg:p-10">
                <h3 className="font-display text-xl lg:text-2xl font-bold mb-6 text-ink">Project Inquiry</h3>
                <ContactForm />
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      {sent ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-[24px] bg-white p-8 text-center border border-ink/5 shadow-inner"
        >
          <span className="text-4xl">✓</span>
          <h4 className="font-display font-semibold text-xl mt-3 text-ink">Signal received</h4>
          <p className="text-xs text-ink/60 mt-2 max-w-xs mx-auto">
            Our engineering desk will review your requirements and reach out within 24 hours.
          </p>
        </motion.div>
      ) : (
        <>
          <Field label="01 / Your Name" name="name" required />
          <Field label="02 / Email" name="email" type="email" required />
          <Field label="03 / Company" name="company" required />
          <Field label="04 / Project Type" name="project" placeholder="Stadium, road, hospitality…" required />
          <Field label="05 / Tell us about it" name="message" textarea required />
          <div className="pt-4">
            <button
              type="submit"
              className="text-mono group w-full justify-center inline-flex items-center gap-3 border border-ink bg-ink px-6 py-4 text-xs tracking-wider text-paper hover:bg-signal hover:border-signal transition-colors rounded-full cursor-pointer font-bold"
            >
              Send Signal
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const float = focused || value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-ink/10 relative pt-5 pb-0.5"
    >
      <label
        className={`text-mono pointer-events-none absolute left-0 transition-all duration-300 ${
          float ? "top-0 text-[9px] text-signal font-bold" : "top-5 text-sm text-ink/40"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={2}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full resize-none bg-transparent py-2 text-base md:text-lg text-ink outline-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={float ? placeholder : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent py-2 text-base md:text-lg text-ink outline-none"
        />
      )}
    </motion.div>
  );
}
