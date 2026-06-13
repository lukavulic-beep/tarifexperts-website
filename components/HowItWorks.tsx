import { ClipboardList, BarChart3, ThumbsUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="w-7 h-7" />,
    title: "Angaben machen",
    description:
      "Geben Sie Ihr Alter, Ihre Postleitzahl und die für Sie wichtigen Leistungen an – in unter 2 Minuten.",
    color: "bg-primary-50 text-primary border-primary-100",
    iconBg: "bg-primary text-white",
  },
  {
    number: "02",
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Alle Tarife vergleichen",
    description:
      "Wir analysieren automatisch über 500 Tarife von 50+ Versicherungsanbietern – transparent und unabhängig.",
    color: "bg-accent-50 text-accent-dark border-accent/20",
    iconBg: "bg-accent text-white",
  },
  {
    number: "03",
    icon: <ThumbsUp className="w-7 h-7" />,
    title: "Besten Tarif erhalten",
    description:
      "Sie erhalten Ihren persönlichen Top-Tarif – abgestimmt auf Ihre Bedürfnisse und Ihren Geldbeutel.",
    color: "bg-primary-50 border-primary-100",
    iconBg: "bg-primary-dark text-white",
  },
];

export default function HowItWorks() {
  return (
    <section id="leistungen" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
            So einfach geht&apos;s
          </div>
          <h2 className="section-title mb-4">
            In 3 Schritten zum{" "}
            <span className="text-gradient-primary">besten Tarif</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Unser Prozess ist so gestaltet, dass Sie in wenigen Minuten den optimalen
            Zahnschutz für sich finden – ohne Fachchinesisch, ohne Druck.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center text-xs font-bold text-muted shadow-sm">
                    {step.number.replace("0", "")}
                  </div>
                </div>

                {/* Content card */}
                <div className={`card w-full p-6 border ${step.color}`}>
                  <div className="text-xs font-bold tracking-widest mb-2 opacity-60">
                    SCHRITT {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-16 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-border rounded-full items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-border rounded-2xl px-8 py-6 shadow-card">
            <p className="text-text font-semibold mb-1">
              Bereit für Ihren persönlichen Vergleich?
            </p>
            <p className="text-muted text-sm mb-4">
              Kostenlos, unverbindlich und in wenigen Minuten erledigt.
            </p>
            <a href="#anfrage" className="btn-primary">
              Jetzt starten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
