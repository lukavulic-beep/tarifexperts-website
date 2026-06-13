import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import RequestForm from "@/components/RequestForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <HowItWorks />
      <ComparisonTable />
      <RequestForm />
      <FAQ />
      <Footer />
    </main>
  );
}
