import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build The Future Of Light" },
      { name: "description", content: "Talk to Lumen/X engineering. Stadium consultations, technical specifications and project quotes." },
      { property: "og:title", content: "Contact — Lumen/X" },
      { property: "og:description", content: "Let's build the future of light." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-paper pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="text-mono mb-8 text-ink/60">— Signal / Contact</div>
          <h1 className="text-display text-ink text-[12vw] leading-[0.88] md:text-[9vw]">
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
            <div className="text-mono text-ink/50 mb-6">Studios</div>
            <div className="space-y-8">
              {[
                { c: "Dubai", a: "Suite 7, Lighting Pavilion, DIFC" },
                { c: "Berlin", a: "Atelier 04, Kreuzberg Werks" },
                { c: "Mumbai", a: "BKC Engineering Block, 12F" },
              ].map((s) => (
                <div key={s.c} className="hairline-t pt-4">
                  <div className="text-display text-2xl text-ink">{s.c}</div>
                  <div className="text-sm text-ink/60">{s.a}</div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <div className="text-mono text-ink/50 mb-2">Direct</div>
              <a href="mailto:hello@lumenx.studio" className="text-display text-3xl text-ink hover:text-signal">
                hello@lumenx.studio
              </a>
              <div className="text-mono mt-2 text-ink/60">+971 4 000 0000</div>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="hairline-t bg-paper py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="relative aspect-[16/7] overflow-hidden bg-ink">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "radial-gradient(circle at 30% 40%, #D50000 0%, transparent 35%), radial-gradient(circle at 70% 60%, #fff 0%, transparent 25%)"
            }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center text-paper">
                <div className="text-mono text-paper/60">Headquarters</div>
                <div className="text-display mt-2 text-4xl md:text-6xl">25.2048° N · 55.2708° E</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="space-y-2"
    >
      <Field label="01 / Your Name" name="name" />
      <Field label="02 / Email" name="email" type="email" />
      <Field label="03 / Company" name="company" />
      <Field label="04 / Project Type" name="project" placeholder="Stadium, road, hospitality…" />
      <Field label="05 / Tell us about it" name="message" textarea />
      <div className="pt-8">
        <button
          type="submit"
          className="text-mono group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-4 text-paper hover:bg-signal hover:border-signal"
        >
          {sent ? "Signal received ✓" : "Send Signal"}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", textarea, placeholder,
}: { label: string; name: string; type?: string; textarea?: boolean; placeholder?: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const float = focused || value.length > 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="hairline-b relative pt-6"
    >
      <label
        className={`text-mono pointer-events-none absolute left-0 transition-all duration-300 ${
          float ? "top-0 text-[0.65rem] text-signal" : "top-6 text-ink/50"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full resize-none bg-transparent py-3 text-lg text-ink outline-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={float ? placeholder : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent py-3 text-lg text-ink outline-none"
        />
      )}
    </motion.div>
  );
}
