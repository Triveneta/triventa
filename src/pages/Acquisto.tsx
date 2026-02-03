import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { ArrowRight, Search, Home, MapPin } from "lucide-react";
import { useState } from "react";

const Acquisto = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        <PageHero imageUrl={HERO_IMAGES.acquisto}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.2em] mb-3 sm:mb-4">ACQUISTA</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 sm:mb-6 drop-shadow-sm">Cerca la Tua Casa Ideale</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl drop-shadow-sm">Trova la proprietà perfetta nel Triveneto con il nostro team di esperti.</p>
          </div>
        </PageHero>

        <div className="container mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-10">
          {/* Search */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-4 sm:p-6 mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cerca per zona, città o tipo di immobile..."
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <button className="font-display px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium tracking-wider hover:bg-primary/90 transition-colors shadow-sm">
                CERCA
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Home, title: "Ricerca Personalizzata", desc: "Ti aiutiamo a trovare l'immobile perfetto per le tue esigenze" },
              { icon: MapPin, title: "Visite Guidate", desc: "Organizziamo visite agli immobili con i nostri esperti" },
              { icon: ArrowRight, title: "Assistenza Completa", desc: "Ti seguiamo in tutto il processo di acquisto" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 sm:p-8 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
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
