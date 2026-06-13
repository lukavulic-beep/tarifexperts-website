"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Was ist eine Zahnzusatzversicherung?",
    answer:
      "Eine Zahnzusatzversicherung ergänzt die Leistungen der gesetzlichen Krankenkasse (GKV) beim Zahnarzt. Die gesetzliche Versicherung übernimmt meist nur Basisleistungen – eine Zahnzusatzversicherung schließt diese Lücken bei Zahnersatz, Zahnbehandlungen, Kieferorthopädie und Prophylaxe. Je nach Tarif werden 70–100 % der Kosten erstattet.",
  },
  {
    question: "Wie viel kostet eine Zahnzusatzversicherung?",
    answer:
      "Die Kosten variieren je nach Alter, Gesundheitszustand und gewünschten Leistungen. Einfache Tarife beginnen bereits ab ca. 8–15 € pro Monat, umfangreichere Premium-Tarife liegen bei 25–50 €. Unser Vergleich zeigt Ihnen transparent alle Kosten und Leistungen – so finden Sie das beste Preis-Leistungs-Verhältnis für Ihre Situation.",
  },
  {
    question: "Wann sollte ich eine Zahnzusatzversicherung abschließen?",
    answer:
      "Je früher, desto besser! Viele Versicherungen haben Wartezeiten von 3–8 Monaten und lehnen Anträge bei vorhandenen Vorerkrankungen ab. Im jungen Alter sind die Beiträge am günstigsten und Sie profitieren länger von den Leistungen. Wichtig: Schließen Sie die Versicherung ab, bevor ein konkreter Behandlungsbedarf entsteht.",
  },
  {
    question: "Welche Leistungen sind bei einer Zahnzusatzversicherung wichtig?",
    answer:
      "Die wichtigsten Leistungsbereiche sind: (1) Zahnersatz – hier können schnell hohe Kosten entstehen (Implantate kosten mehrere tausend Euro), (2) Zahnbehandlung – für Füllungen und Wurzelbehandlungen, (3) Prophylaxe – für die professionelle Zahnreinigung (PZR), die die GKV kaum erstattet, sowie (4) Kieferorthopädie – besonders wichtig für Kinder und Jugendliche.",
  },
  {
    question: "Gibt es Wartezeiten bei einer Zahnzusatzversicherung?",
    answer:
      "Bei den meisten Zahnzusatzversicherungen gilt eine Wartezeit von 3–8 Monaten. In dieser Zeit können keine Leistungen abgerufen werden. Ausnahmen gelten häufig für Unfälle. Einige Premium-Tarife verzichten auf Wartezeiten – allerdings zu höheren Prämien. Wir zeigen Ihnen im Vergleich, welche Tarife ohne Wartezeit auskommen.",
  },
  {
    question: "Was bedeutet Erstattungshöhe und Staffelung?",
    answer:
      "Viele Tarife erstatten in den ersten Jahren nur einen begrenzten Betrag (z. B. maximal 500 € im ersten Jahr, 1.000 € im zweiten Jahr). Diese Staffelung schützt die Versicherung vor Schäden direkt nach Vertragsabschluss. Achten Sie im Vergleich auf die genauen Maximalgrenzen und Staffelungen – Tarifexperts weist alle diese Details transparent aus.",
  },
  {
    question: "Kann ich die Zahnzusatzversicherung steuerlich absetzen?",
    answer:
      "Ja, Beiträge zur Zahnzusatzversicherung können in der Steuererklärung als Sonderausgaben (Vorsorgeaufwendungen) geltend gemacht werden. Je nach Höhe der anderen Vorsorgeaufwendungen kann dies die Steuerlast reduzieren. Lassen Sie sich dazu am besten von einem Steuerberater informieren.",
  },
  {
    question: "Was passiert, wenn ich den Anbieter wechseln möchte?",
    answer:
      "Ein Wechsel der Zahnzusatzversicherung ist grundsätzlich möglich, jedoch müssen Sie die Kündigungsfristen Ihres aktuellen Vertrages beachten (meist 1–3 Monate zum Jahresende). Beim neuen Anbieter beginnen Wartezeiten und Staffelungen neu. Laufende Behandlungen können in der Regel nicht durch den neuen Anbieter übernommen werden. Wir beraten Sie gerne zu einem optimalen Wechselzeitpunkt.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            Häufige Fragen
          </div>
          <h2 className="section-title mb-4">
            Alles, was Sie über{" "}
            <span className="text-gradient-primary">Zahnzusatzversicherungen</span>{" "}
            wissen müssen
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Unsere Experten beantworten die häufigsten Fragen – klar, verständlich
            und ohne Fachchinesisch.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-primary/30 shadow-md bg-primary-50/30"
                    : "border-border bg-white hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base leading-snug ${
                      isOpen ? "text-primary" : "text-text"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-bg text-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <div className="h-px bg-primary/10 mb-4" />
                    <p className="text-muted leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-bg rounded-2xl border border-border">
          <h3 className="font-bold text-text text-lg mb-2">
            Noch Fragen? Wir helfen gerne!
          </h3>
          <p className="text-muted text-sm mb-5">
            Unser Expertenteam steht Ihnen werktags von 9–18 Uhr zur Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@tarifexperts.de" className="btn-outline text-sm">
              E-Mail schreiben
            </a>
            <a href="#anfrage" className="btn-primary text-sm">
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
