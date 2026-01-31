import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Building, PieChart, ArrowRight } from "lucide-react";

const investments = [
  { title: "Rendimento Medio", value: "6-8%", desc: "Ritorno annuale stimato" },
  { title: "Proprietà Gestite", value: "150+", desc: "Immobili nel portfolio" },
  { title: "Anni di Esperienza", value: "20+", desc: "Nel settore immobiliare" },
];

const Investimenti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="font-display text-primary text-sm font-medium tracking-[0.2em] mb-4">INVESTIMENTI</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Investi nel Mattone</h1>
            <p className="text-muted-foreground max-w-2xl">Scopri le migliori opportunità di investimento immobiliare nel Triveneto.</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {investments.map((item, i) => (
              <div key={i} className="text-center p-8 bg-card border border-border">
                <p className="font-serif text-4xl font-medium text-primary mb-2">{item.value}</p>
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Analisi di Mercato", desc: "Valutiamo le migliori opportunità di investimento" },
              { icon: Building, title: "Gestione Patrimonio", desc: "Amministriamo il tuo portfolio immobiliare" },
              { icon: PieChart, title: "Diversificazione", desc: "Strategie per ottimizzare i rendimenti" },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-card border border-border hover:border-primary transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <Link to="/investimenti" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Investimenti;
