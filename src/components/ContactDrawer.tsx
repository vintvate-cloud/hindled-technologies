import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, ZapOff, CheckCircle2 } from "lucide-react";

interface ContactDrawerContextType {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const ContactDrawerContext = createContext<ContactDrawerContextType | undefined>(undefined);

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const openDrawer = () => setIsOpen(true);
  
  const closeDrawer = () => {
    setIsOpen(false);
    if (pathname === "/contact") {
      if (window.history.length > 1) {
        window.history.back();
        setTimeout(() => {
          if (window.location.pathname === "/contact") {
            navigate("/");
          }
        }, 100);
      } else {
        navigate("/");
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
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex max-h-[96vh] w-full max-w-[1250px] flex-col overflow-y-auto rounded-t-[32px] md:rounded-t-[40px] bg-white px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-10 lg:px-12 lg:pb-12 lg:pt-10 shadow-2xl text-ink border-t border-ink/5 no-scrollbar"
            data-lenis-prevent
          >
            {/* Close Button */}
            <button
              onClick={closeDrawer}
              aria-label="Close Contact Drawer"
              className="absolute top-5 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-stone text-ink hover:bg-ink hover:text-paper transition-colors z-10 text-base cursor-pointer"
            >
              ✕
            </button>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 pt-1">
              
              {/* Left Column: Info & Official Details */}
              <div className="md:col-span-5 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-mono text-signal font-bold text-xs uppercase tracking-widest">— Signal / Contact</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-signal font-bold bg-signal/10 px-2.5 py-0.5 rounded-full">
                      <ZapOff className="w-3 h-3" />
                      Zero-Grid Infrastructure
                    </span>
                  </div>

                  <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.04em] font-bold">
                    LET'S BUILD
                    <br />
                    THE FUTURE OF
                    <br />
                    <span className="text-signal">LIGHT.</span>
                  </h2>
                  
                  <p className="mt-4 text-sm leading-relaxed text-ink/75 max-w-sm font-light">
                    Connect with our engineering desk for 360° solar lighting solutions, zero-grid infrastructure consulting, custom photometric DIALux profiles, and turnkey project execution.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Official Headquarters */}
                  <div className="border-t border-ink/10 pt-4">
                    <div className="text-mono text-ink/40 mb-2 uppercase tracking-wider text-[10px] font-bold">Registered Office</div>
                    <div className="space-y-1 text-xs text-ink/80 leading-relaxed font-light">
                      <div className="font-display text-sm font-bold text-ink flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-signal shrink-0" />
                        HINDLED TECHNOLOGIES INDIA PVT. LTD.
                      </div>
                      <p className="pl-5 text-ink/70">
                        B-302, Plot No.95, Maurya Apartment<br />
                        Patparganj, New Delhi - 110092, India
                      </p>
                    </div>
                  </div>

                  {/* Direct Contact Channels */}
                  <div className="border-t border-ink/10 pt-4">
                    <div className="text-mono text-ink/40 mb-2 uppercase tracking-wider text-[10px] font-bold">Direct Channels</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-signal shrink-0" />
                        <a href="mailto:hindled77@gmail.com" className="font-display text-base font-bold text-ink hover:text-signal transition-colors">
                          hindled77@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-signal shrink-0" />
                        <a href="mailto:info@hindled.com" className="text-xs font-mono text-ink/70 hover:text-signal transition-colors">
                          info@hindled.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-signal shrink-0" />
                        <a href="tel:+919560121310" className="text-xs font-mono font-bold text-ink hover:text-signal transition-colors">
                          +91 9560121310
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="md:col-span-7 bg-stone/40 rounded-[28px] p-6 md:p-8 lg:p-10 border border-ink/5">
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
          <div className="w-12 h-12 rounded-full bg-signal/15 text-signal flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-display font-semibold text-xl text-ink">Signal received</h4>
          <p className="text-xs text-ink/60 mt-2 max-w-xs mx-auto font-light">
            Our engineering desk will review your requirements and reach out within 24 hours.
          </p>
        </motion.div>
      ) : (
        <>
          <Field label="01 / Your Name" name="name" required />
          <Field label="02 / Email" name="email" type="email" required />
          <Field label="03 / Company / Organization" name="company" required />
          <Field label="04 / Project Application" name="project" placeholder="Solar smart pole, stadium, highway, campus, CCTV..." required />
          <Field label="05 / Project Brief & Requirements" name="message" textarea required />
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
