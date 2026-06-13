import { Mail, Phone, MapPin, Shield, Award, CheckCircle } from "lucide-react";

const footerLinks = {
  Unternehmen: [
    { label: "Über uns", href: "#" },
    { label: "Karriere", href: "#" },
    { label: "Presse", href: "#" },
    { label: "Partner werden", href: "#" },
  ],
  Service: [
    { label: "Kostenloser Vergleich", href: "#anfrage" },
    { label: "Tarifvergleich", href: "#vergleich" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
    { label: "Cookie-Richtlinie", href: "#" },
  ],
};

const trustSignals = [
  { icon: <Shield className="w-5 h-5" />, text: "SSL-verschlüsselt" },
  { icon: <Award className="w-5 h-5" />, text: "DSGVO-konform" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "Unabhängiger Vergleich" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-text text-white">
      {/* Top CTA Band */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Bereit, den besten Tarif zu finden?
              </h3>
              <p className="text-white/80 text-sm">
                Kostenlos, unverbindlich und in wenigen Minuten erledigt.
              </p>
            </div>
            <a
              href="#anfrage"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              Jetzt vergleichen →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                tarifexperts<span style={{ color: "#EE6C4D" }}>.</span>
              </span>
            </a>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Deutschlands unabhängiger Vergleichsservice für
              Zahnzusatzversicherungen. Wir vergleichen alle Tarife auf dem Markt
              und finden die beste Lösung für Ihre Bedürfnisse.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="mailto:info@tarifexperts.de"
                className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" style={{ color: "#EE6C4D" }} />
                info@tarifexperts.de
              </a>
              <a
                href="tel:+4930123456789"
                className="flex items-center gap-2.5 text-white/65 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" style={{ color: "#EE6C4D" }} />
                +49 30 123 456 789
              </a>
              <div className="flex items-center gap-2.5 text-white/65 text-sm">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#EE6C4D" }} />
                Musterstraße 1, 10115 Berlin
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Tarifexperts GmbH. Alle Rechte vorbehalten.
            </p>

            {/* Trust Signals */}
            <div className="flex items-center gap-5">
              {trustSignals.map((signal, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-white/50 text-xs"
                >
                  <span className="text-primary-light">{signal.icon}</span>
                  {signal.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
