import { motion } from "framer-motion";
import { useMeta } from "../hooks/use-meta";
import { leadershipTeam } from "@/assets/products";
import { CheckCircle2 } from "lucide-react";
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

      <section className="bg-stone py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
          {[
            { v: "125+", l: "Years Combined Leadership" },
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

      {/* Leadership & Technical Advisory Section */}
      <section className="bg-paper text-ink py-24 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 space-y-24">

          {/* Main Section Header */}
          <div className="pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-2">
                — EXECUTIVE LEADERSHIP & TECHNICAL MASTERY
              </span>
              <h2 className="text-display text-ink text-[7vw] leading-[0.92] tracking-[-0.04em] md:text-[3.8vw] font-bold">
                Guided by Over <span className="text-signal">125+ Years</span> of Combined Expertise.
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink/70 font-light leading-relaxed">
              Decades of veteran leadership in strategic infrastructure consulting, international R&D, product engineering, and PSU execution.
            </p>
          </div>

          {/* Leadership Profiles Sequential Showcase */}
          <div className="space-y-20">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Individual Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
                  <div>
                    <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-1">
                      — {member.categoryTag}
                    </span>
                    <h3 className="text-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink">
                      {member.headline}
                    </h3>
                  </div>
                  <p className="max-w-lg text-xs sm:text-sm text-ink/70 font-light leading-relaxed">
                    {member.subhead}
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-[36px] bg-stone border border-ink/15 p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                  {/* Photo Container */}
                  <div className={`lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left ${index % 2 === 1 ? 'lg:order-2' : ''
                    }`}>
                    <div className="w-full max-w-[440px] flex flex-col gap-4">
                      <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] rounded-[32px] overflow-hidden border-2 border-ink/20 shadow-2xl bg-paper group">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <span className="w-full text-center font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-paper text-ink py-3.5 px-4 rounded-2xl border border-ink/15 shadow-sm">
                        {member.experienceYears} Industry Leadership
                      </span>
                    </div>
                  </div>

                  {/* Biography & Impact */}
                  <div className={`lg:col-span-7 space-y-8 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''
                    }`}>
                    <div className="space-y-6">
                      <div>
                        <span className="text-mono text-xs font-bold uppercase tracking-widest text-signal block mb-2">
                          — BIOGRAPHY & IMPACT
                        </span>
                        <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                          {member.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-signal font-mono font-bold tracking-wider uppercase mt-2">
                          {member.title}
                        </p>
                      </div>

                      {/* Editorial Bio Quote */}
                      <div className="border-l-3 border-signal pl-5 py-1">
                        <p className="text-sm sm:text-base lg:text-lg text-ink/85 font-light leading-relaxed">
                          "{member.bio}"
                        </p>
                      </div>

                      {/* Highlights Pill Badges */}
                      <div className="pt-4 border-t border-ink/10">
                        <span className="text-mono text-[10px] uppercase tracking-wider text-ink/50 font-bold block mb-3">
                          CORE LEADERSHIP PILLARS
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {member.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-paper text-ink px-3.5 py-1.5 rounded-xl border border-ink/10 shadow-xs"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-signal" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-paper py-32 overflow-hidden">
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
