import { motion } from "framer-motion";
import { useMeta } from "../hooks/use-meta";
import { advisorProfile } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";

export default function AboutPage() {
  const { openDrawer } = useContactDrawer();
  useMeta({
    title: "About — HINDLED Technologies",
    description: "A professional outdoor lighting manufacturer engineering luminaires for the world's most demanding venues.",
  });

  return (
    <>
      <section className="bg-paper pt-40 pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="text-mono mb-8 text-ink/60">— Studio / About</div>
          <h1 className="text-display text-ink text-[10.5vw] sm:text-[9vw] md:text-[7.5vw] leading-[1.02] font-bold [word-spacing:0.3em] tracking-normal">
            WE DON'T MAKE
            <br />
            FIXTURES. WE
            <br />
            <span className="text-signal block mt-2 sm:mt-4">SHAPE LIGHT.</span>
          </h1>
        </div>
      </section>

      <section className="bg-paper pb-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <div className="text-mono text-ink/50 text-xs uppercase tracking-widest font-bold">Manifesto</div>
          </div>
          <div className="md:col-span-7">
            <p className="text-display text-2xl sm:text-3xl leading-tight text-ink md:text-5xl font-bold">
              Light is infrastructure. We engineer it like aerospace, every optic, driver, vertical PV module, and
              housing tested against the environments most manufacturers retreat from.
            </p>
            <p className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-ink/70 font-light">
              From international sports stadiums to off-grid 360° solar smart poles, HINDLED Technologies ships luminaires that perform
              when the lights matter most. Operating 100% without electricity on solar platforms with zero maintenance overheads.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24 border-t border-b border-ink/10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
          {[
            { v: "45+", l: "Years Advisor Leadership" },
            { v: "100%", l: "Solar Grid Autonomy" },
            { v: "360K", l: "Lumens Peak Output" },
            { v: "21", l: "Engineered Platforms" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-display text-5xl md:text-7xl font-bold text-ink">{s.v}</div>
              <div className="text-mono mt-2 text-ink/60 text-xs uppercase tracking-wider font-bold">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chief Technical Advisor Section */}
      <section className="bg-paper text-ink py-24 border-t border-ink/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="mb-12 border-b border-ink/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-2">
                — TECHNICAL LEADERSHIP & ADVISORY
              </span>
              <h2 className="text-display text-ink text-[7vw] leading-[0.92] tracking-[-0.04em] md:text-[3.8vw] font-bold">
                Guided by 45+ Years of <span className="text-signal">Excellence.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink/70 font-light leading-relaxed">
              Strategic consulting, energy efficiency, industry standards, and sustainable lighting solutions.
            </p>
          </div>

          <div className="rounded-[36px] bg-stone border border-ink/15 p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-full max-w-[440px] h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] rounded-[32px] overflow-hidden border-2 border-ink/20 shadow-2xl bg-paper group">
                <img
                  src={advisorProfile.image}
                  alt={advisorProfile.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                <span className="absolute bottom-5 left-5 right-5 text-center font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-paper/95 backdrop-blur-md text-ink py-3 rounded-2xl border border-ink/10 shadow-lg">
                  {advisorProfile.experienceYears} Industry Leadership
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-mono text-xs font-bold uppercase tracking-widest text-signal block mb-2">
                    — BIOGRAPHY & IMPACT
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                    {advisorProfile.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-signal font-mono font-bold tracking-wider uppercase mt-2">
                    {advisorProfile.title}
                  </p>
                </div>

                {/* Refined Editorial Bio */}
                <div className="border-l-3 border-signal pl-5 py-1">
                  <p className="text-base sm:text-lg lg:text-xl text-ink/85 font-light leading-relaxed">
                    "{advisorProfile.bio}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-32 hairline-t">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <h2 className="text-display text-ink text-[10vw] leading-[0.9] md:text-[6vw] font-bold">
            VENUES WE'VE LIT.
          </h2>
          <div className="text-display marquee mt-12 flex gap-12 whitespace-nowrap text-3xl sm:text-4xl text-ink/30 md:text-6xl font-bold">
            <span>AL JANOUB · WANKHEDE · OLYMPIA NORD · KING FAHD · NARENDRA MODI · SOFI · ETIHAD · ALLIANZ · </span>
            <span>AL JANOUB · WANKHEDE · OLYMPIA NORD · KING FAHD · NARENDRA MODI · SOFI · ETIHAD · ALLIANZ · </span>
          </div>
        </div>
      </section>
    </>
  );
}
