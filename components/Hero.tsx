import { CheckCircle, ShieldCheck, Award, ChevronRight, Star } from "lucide-react";

const trustBadges = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "500+ Tarife verglichen" },
  { icon: <CheckCircle className="w-4 h-4" />, text: "100% kostenlos" },
  { icon: <Award className="w-4 h-4" />, text: "Unverbindlich & sicher" },
];

const stats = [
  { value: "500+", label: "Verglichene Tarife" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "50+", label: "Versicherungsanbieter" },
  { value: "24h", label: "Schnelle Beratung" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="text-white">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#EE6C4D" }} />
              <span className="text-sm font-medium text-white/90">
                Deutschlandweiter Versicherungsvergleich
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Der smarteste{" "}
              Zahnschutz-
              <br />
              <span style={{ color: "#EE6C4D" }}>Vergleich</span> für Sie
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              Wir vergleichen alle Zahnzusatzversicherungen auf dem deutschen Markt –
              transparent, unabhängig und auf Ihre persönlichen Bedürfnisse abgestimmt.
              Finden Sie den besten Tarif in wenigen Minuten.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
                >
                  <span style={{ color: "#EE6C4D" }}>{badge.icon}</span>
                  <span className="text-sm font-medium text-white">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#anfrage"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text rounded-xl font-bold text-base transition-all duration-200 hover:bg-gray-50 hover:shadow-xl"
              >
                Jetzt kostenlos vergleichen
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#vergleich"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/20"
              >
                Tarife ansehen
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/40"
                    style={{
                      background: `hsl(${185 + i * 15}, 45%, ${40 + i * 8}%)`,
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-white/65 mt-0.5">
                  Über <strong className="text-white">12.000 zufriedene Kunden</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8">
              <h3 className="text-white font-semibold text-lg mb-6 text-center">
                tarifexperts<span style={{ color: "#EE6C4D" }}>.</span> auf einen Blick
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-5 text-center border border-white/10"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/65">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl border" style={{ backgroundColor: "rgba(238,108,77,0.15)", borderColor: "rgba(238,108,77,0.3)" }}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#EE6C4D" }} />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Ihr persönlicher Vorteil
                    </p>
                    <p className="text-white/65 text-xs mt-1">
                      Sparen Sie bis zu <strong className="text-white">40%</strong> im
                      Vergleich zum Durchschnittstarif – durch unseren unabhängigen Vergleich.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="#anfrage"
                  className="block w-full py-3.5 bg-white text-text text-center rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                >
                  Vergleich starten →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 10 960 0 720 0C480 0 240 10 0 40L0 80Z" fill="#F4F5F6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
