"use client";

import { useState } from "react";
import { CheckCircle, Send, Shield, Lock, Star } from "lucide-react";

const leistungen = [
  { id: "zahnersatz", label: "Zahnersatz", description: "Kronen, Brücken, Implantate" },
  { id: "kieferorthopadie", label: "Kieferorthopädie", description: "Zahnspangen, Korrekturen" },
  { id: "prophylaxe", label: "Prophylaxe", description: "Professionelle Zahnreinigung" },
  { id: "zahnbehandlung", label: "Zahnbehandlung", description: "Füllungen, Wurzelbehandlung" },
];

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedLeistungen, setSelectedLeistungen] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    plz: "",
    email: "",
  });

  const toggleLeistung = (id: string) => {
    setSelectedLeistungen((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="anfrage" className="py-24 bg-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="card p-12">
            <div className="w-20 h-20 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-text mb-3">
              Vielen Dank für Ihre Anfrage!
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Wir haben Ihre Daten erhalten und werden uns innerhalb von{" "}
              <strong className="text-text">24 Stunden</strong> mit Ihrem persönlichen
              Tarifvergleich bei Ihnen melden.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline"
              >
                Neue Anfrage stellen
              </button>
              <a href="#vergleich" className="btn-primary">
                Tarife ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="anfrage" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
              Kostenloser Vergleich
            </div>
            <h2 className="section-title mb-4">
              Ihr persönlicher{" "}
              <span className="text-gradient-primary">Tarifvergleich</span>
            </h2>
            <p className="section-subtitle mb-8">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden
              Ihren maßgeschneiderten Vergleich der besten Zahnzusatzversicherungen.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                {
                  icon: <Shield className="w-5 h-5 text-primary" />,
                  title: "100% unabhängig",
                  text: "Wir sind an keine Versicherung gebunden und vergleichen objektiv.",
                },
                {
                  icon: <Lock className="w-5 h-5 text-primary" />,
                  title: "Datenschutz garantiert",
                  text: "Ihre Daten werden verschlüsselt übertragen und nicht weitergegeben.",
                },
                {
                  icon: <Star className="w-5 h-5 text-primary" />,
                  title: "Persönliche Beratung",
                  text: "Unser Expertenteam berät Sie individuell und ohne Zeitdruck.",
                },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{benefit.title}</p>
                    <p className="text-muted text-sm mt-0.5">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="mt-8 p-4 bg-primary-50 border border-primary-100 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text">Über 12.000 Kunden</strong> haben mit
                tarifexperts ihre ideale Zahnzusatzversicherung gefunden. Durchschnittliche
                Ersparnis:{" "}
                <strong style={{ color: "#EE6C4D" }}>127 € pro Jahr.</strong>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card p-8">
            <h3 className="text-lg font-bold text-text mb-6">
              Ihre Angaben (kostenlos & unverbindlich)
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Vorname <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Max"
                    className="input-field"
                    value={formData.vorname}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, vorname: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Nachname <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mustermann"
                    className="input-field"
                    value={formData.nachname}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, nachname: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* Geburtsdatum + PLZ */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Geburtsdatum <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    className="input-field"
                    value={formData.geburtsdatum}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, geburtsdatum: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Postleitzahl <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="10115"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    className="input-field"
                    value={formData.plz}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, plz: e.target.value }))
                    }
                  />
                </div>
              </div>

              {/* E-Mail */}
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  E-Mail-Adresse <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="max.mustermann@email.de"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                />
              </div>

              {/* Leistungen */}
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Welche Leistungen sind Ihnen wichtig?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {leistungen.map((leistung) => {
                    const isSelected = selectedLeistungen.includes(leistung.id);
                    return (
                      <button
                        key={leistung.id}
                        type="button"
                        onClick={() => toggleLeistung(leistung.id)}
                        className={`flex flex-col items-start p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-primary bg-primary-50 text-primary"
                            : "border-border bg-surface text-muted hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <div
                            className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-border"
                            }`}
                          >
                            {isSelected && (
                              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm font-semibold text-text">
                            {leistung.label}
                          </span>
                        </div>
                        <span className="text-xs text-muted mt-0.5 ml-6">
                          {leistung.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Privacy */}
              <p className="text-xs text-muted leading-relaxed">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="#" className="text-primary hover:underline">
                  Datenschutzerklärung
                </a>{" "}
                zu. Ihre Daten werden ausschließlich zur Erstellung Ihres
                Tarifvergleichs verwendet.
              </p>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full py-4 text-base gap-2">
                <Send className="w-4 h-4" />
                Kostenlosen Vergleich anfordern
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
