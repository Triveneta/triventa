import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Home, MapPin } from "lucide-react";
import { useState } from "react";

const Acquisto = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.2em] mb-4">ACQUISTA</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Cerca la Tua Casa Ideale</h1>
            <p className="text-muted-foreground max-w-2xl">Trova la proprietà perfetta nel Triveneto con il nostro team di esperti.</p>
          </div>

          {/* Search */}
          <div className="bg-card border border-border p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cerca per zona, città o tipo di immobile..."
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors">
                CERCA
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Ricerca Personalizzata", desc: "Ti aiutiamo a trovare l'immobile perfetto per le tue esigenze" },
              { icon: MapPin, title: "Visite Guidate", desc: "Organizziamo visite agli immobili con i nostri esperti" },
              { icon: ArrowRight, title: "Assistenza Completa", desc: "Ti seguiamo in tutto il processo di acquisto" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-card border border-border">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Acquisto;
