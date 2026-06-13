"use client";

import { useState } from "react";
import { Check, X, Star, TrendingUp, Info } from "lucide-react";

type Coverage = "100%" | "90%" | "80%" | "70%" | "60%" | "50%" | "—";

interface Tariff {
  provider: string;
  name: string;
  price: string;
  priceNote: string;
  zahnersatz: Coverage;
  zahnbehandlung: Coverage;
  kfo: Coverage;
  prophylaxe: Coverage;
  recommended: boolean;
  badge?: string;
  rating: number;
}

const tariffs: Tariff[] = [
  {
    provider: "DentaProtect",
    name: "Premium Plus",
    price: "24,90 €",
    priceNote: "/Monat",
    zahnersatz: "90%",
    zahnbehandlung: "100%",
    kfo: "80%",
    prophylaxe: "100%",
    recommended: true,
    badge: "Bestes Preis-Leistungs-Verhältnis",
    rating: 4.9,
  },
  {
    provider: "ZahnFlex",
    name: "Komfort",
    price: "18,50 €",
    priceNote: "/Monat",
    zahnersatz: "80%",
    zahnbehandlung: "90%",
    kfo: "70%",
    prophylaxe: "100%",
    recommended: false,
    badge: "Günstigster Tarif",
    rating: 4.6,
  },
  {
    provider: "BestDent",
    name: "Exklusiv",
    price: "32,00 €",
    priceNote: "/Monat",
    zahnersatz: "100%",
    zahnbehandlung: "100%",
    kfo: "100%",
    prophylaxe: "100%",
    recommended: false,
    badge: "Maximaler Schutz",
    rating: 4.8,
  },
  {
    provider: "VitaZahn",
    name: "Classic",
    price: "14,90 €",
    priceNote: "/Monat",
    zahnersatz: "70%",
    zahnbehandlung: "80%",
    kfo: "—",
    prophylaxe: "80%",
    recommended: false,
    rating: 4.2,
  },
  {
    provider: "ZahnStar",
    name: "Smart",
    price: "21,00 €",
    priceNote: "/Monat",
    zahnersatz: "80%",
    zahnbehandlung: "90%",
    kfo: "60%",
    prophylaxe: "100%",
    recommended: false,
    rating: 4.5,
  },
];

const coverageColumns = [
  { key: "zahnersatz" as keyof Tariff, label: "Zahnersatz", tooltip: "Kronen, Brücken, Implantate" },
  { key: "zahnbehandlung" as keyof Tariff, label: "Zahnbehandlung", tooltip: "Füllungen, Wurzelbehandlungen" },
  { key: "kfo" as keyof Tariff, label: "Kieferorthopädie", tooltip: "Zahnspangen, Korrektur" },
  { key: "prophylaxe" as keyof Tariff, label: "Prophylaxe", tooltip: "Professionelle Zahnreinigung" },
];

function CoverageCell({ value }: { value: Coverage }) {
  if (value === "—") {
    return (
      <div className="flex items-center justify-center">
        <X className="w-4 h-4 text-red-400" />
      </div>
    );
  }
  const pct = parseInt(value);
  const colorClass =
    pct === 100
      ? "text-primary-dark bg-primary-50"
      : pct >= 80
      ? "text-primary bg-primary-50/60"
      : "text-muted bg-bg";
  return (
    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-sm font-semibold ${colorClass}`}>
      {value}
    </span>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      <span className="text-xs font-semibold text-text">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section id="vergleich" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            Aktuelle Tarifübersicht
          </div>
          <h2 className="section-title mb-4">
            Tarife im direkten{" "}
            <span className="text-gradient-primary">Vergleich</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Alle Angaben beziehen sich auf den Erstattungsanteil am zahnärztlichen
            Honorar. Preise gelten für Versicherte ab 30 Jahren.
          </p>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-bg border-b border-border">
                <th className="text-left px-6 py-4 text-sm font-semibold text-muted w-48">
                  Anbieter & Tarif
                </th>
                {coverageColumns.map((col) => (
                  <th key={col.key} className="text-center px-4 py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-semibold text-text">{col.label}</span>
                      <span className="text-xs text-muted font-normal">{col.tooltip}</span>
                    </div>
                  </th>
                ))}
                <th className="text-center px-4 py-4 text-sm font-semibold text-text">
                  Preis
                </th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-text">
                  Aktion
                </th>
              </tr>
            </thead>
            <tbody>
              {tariffs.map((tariff, index) => (
                <tr
                  key={index}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`border-b border-border last:border-0 transition-colors duration-150 ${
                    tariff.recommended
                      ? "bg-primary-50/60"
                      : hoveredRow === index
                      ? "bg-bg"
                      : "bg-white"
                  }`}
                >
                  {/* Provider */}
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-text text-sm">{tariff.provider}</span>
                        {tariff.recommended && (
                          <span className="badge badge-green text-xs">Empfohlen</span>
                        )}
                      </div>
                      <span className="text-xs text-muted">{tariff.name}</span>
                      <RatingStars rating={tariff.rating} />
                      {tariff.badge && (
                        <span className="text-xs font-medium text-primary mt-0.5">
                          ✓ {tariff.badge}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Coverage columns */}
                  {coverageColumns.map((col) => (
                    <td key={col.key} className="px-4 py-5 text-center">
                      <CoverageCell value={tariff[col.key] as Coverage} />
                    </td>
                  ))}

                  {/* Price */}
                  <td className="px-4 py-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className={`font-bold text-lg ${tariff.recommended ? "text-primary" : "text-text"}`}>
                        {tariff.price}
                      </span>
                      <span className="text-xs text-muted">{tariff.priceNote}</span>
                    </div>
                  </td>

                  {/* CTA */}
                  <td className="px-4 py-5 text-center">
                    <a
                      href="#anfrage"
                      className={
                        tariff.recommended
                          ? "btn-primary text-xs px-4 py-2 shadow-cta"
                          : "btn-outline text-xs px-4 py-2"
                      }
                    >
                      Anfragen
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 mt-4 text-xs text-muted">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <p>
            Die dargestellten Tarife und Preise dienen als Orientierung und können je nach
            Alter, Gesundheitszustand und gewählten Leistungen variieren. Für ein exaktes
            Angebot nutzen Sie bitte unser Vergleichsformular.
          </p>
        </div>
      </div>
    </section>
  );
}
