import { motion } from "framer-motion";
import { useEffect } from "react";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";
import { Mail, Phone, MapPin, ZapOff, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { openDrawer, closeDrawer } = useContactDrawer();

  useMeta({
    title: "Contact — HINDLED Technologies",
    description: "Talk to HINDLED Technologies engineering. 360° solar lighting, zero-grid infrastructure, stadium specifications, and turnkey project quotes.",
  });

  useEffect(() => {
    openDrawer();
    return () => {
      closeDrawer();
    };
  }, [openDrawer, closeDrawer]);

  return (
    <>
      <section className="bg-paper pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-mono text-signal font-bold text-xs uppercase tracking-widest">— Signal / Contact</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-signal font-bold bg-signal/10 px-3 py-1 rounded-full">
              <ZapOff className="w-3 h-3" />
              100% Zero-Grid Solar Infrastructure
            </span>
          </div>
          <h1 className="text-display text-ink text-[11vw] leading-[0.88] sm:text-[10vw] md:text-[8vw] font-bold">
            LET'S BUILD
            <br />
            THE FUTURE OF
            <br />
            <span className="text-signal">LIGHT.</span>
          </h1>
        </div>
      </section>

      <section className="bg-paper pb-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <div className="text-mono text-ink/50 mb-6 text-xs uppercase tracking-widest font-bold">Registered Headquarters</div>
            <div className="space-y-6">
              <div className="hairline-t pt-4">
                <div className="text-display text-xl font-bold text-ink flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-signal" />
                  New Delhi Head Office
                </div>
                <div className="text-sm text-ink/70 leading-relaxed font-light mt-2 pl-7">
                  <strong className="block text-ink font-medium">HINDLED TECHNOLOGIES INDIA PVT. LTD.</strong>
                  B-302, Plot No.95, Maurya Apartment<br />
                  Patparganj, New Delhi - 110092, India
                </div>
              </div>
            </div>

            <div className="mt-12 hairline-t pt-6 space-y-3">
              <div className="text-mono text-ink/50 text-xs uppercase tracking-widest font-bold">Direct Channels</div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-signal shrink-0" />
                <a href="mailto:hindled77@gmail.com" className="text-display text-lg sm:text-xl text-ink hover:text-signal font-bold">
                  hindled77@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-signal shrink-0" />
                <a href="mailto:info@hindled.com" className="text-sm font-mono text-ink/70 hover:text-signal">
                  info@hindled.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-signal shrink-0" />
                <a href="tel:+919560121310" className="text-sm font-mono font-bold text-ink hover:text-signal">
                  +91 9560121310
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-stone/40 p-8 sm:p-12 rounded-[32px] border border-ink/5">
            <h3 className="font-display text-2xl font-bold text-ink mb-6">Project Inquiry</h3>
            <p className="text-sm text-ink/70 font-light mb-6">
              Click below to launch the contact drawer or submit your project requirements to our engineering desk.
            </p>
            <button
              onClick={openDrawer}
              className="rounded-full bg-ink hover:bg-signal px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              Open Project Signal Drawer →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
