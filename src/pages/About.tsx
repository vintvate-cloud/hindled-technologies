import { motion } from "framer-motion";
import { useMeta } from "../hooks/use-meta";

export default function AboutPage() {
  useMeta({
    title: "About — HINDLED-TECHNOLOGIES Technologies",
    description: "A professional outdoor lighting manufacturer engineering luminaires for the world's most demanding venues.",
  });

  return (
    <>
      <section className="bg-paper pt-40 pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="text-mono mb-8 text-ink/60">— Studio / About</div>
          <h1 className="text-display text-ink text-[12vw] leading-[0.88] md:text-[9vw]">
            WE DON'T MAKE
            <br />
            FIXTURES. WE
            <br />
            <span className="text-signal">SHAPE LIGHT.</span>
          </h1>
        </div>
      </section>

      <section className="bg-paper pb-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <div className="text-mono text-ink/50">Manifesto</div>
          </div>
          <div className="md:col-span-7">
            <p className="text-display text-3xl leading-tight text-ink md:text-5xl">
              Light is infrastructure. We engineer it like aerospace — every optic, driver and
              housing tested against the environments most manufacturers retreat from.
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink/70">
              From international stadiums to off-grid roads, HINDLED-TECHNOLOGIES Technologies ships luminaires that perform
              when the lights matter most. Our work is quiet, our standards are not.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
          {[
            { v: "12", l: "Years of R&D" },
            { v: "40+", l: "Countries served" },
            { v: "320", l: "Stadium projects" },
            { v: "100K", l: "Hour lumen warranty" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-display text-6xl text-ink md:text-7xl">{s.v}</div>
              <div className="text-mono mt-2 text-ink/60">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <h2 className="text-display text-ink text-[10vw] leading-[0.9] md:text-[6vw]">
            VENUES WE'VE LIT.
          </h2>
          <div className="text-display marquee mt-12 flex gap-12 whitespace-nowrap text-4xl text-ink/30 md:text-6xl">
            <span>AL JANOUB · WANKHEDE · OLYMPIA NORD · KING FAHD · NARENDRA MODI · SOFI · ETIHAD · ALLIANZ · </span>
            <span>AL JANOUB · WANKHEDE · OLYMPIA NORD · KING FAHD · NARENDRA MODI · SOFI · ETIHAD · ALLIANZ · </span>
          </div>
        </div>
      </section>
    </>
  );
}
