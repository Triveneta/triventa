import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Crown, Lock, MapPin } from "lucide-react";

const exclusiveProperties = [
  { id: 1, title: "Villa di Prestigio a Forte dei Marmi", location: "Forte dei Marmi", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { id: 2, title: "Attico Esclusivo in Centro Milano", location: "Milano Centro", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { id: 3, title: "Residenza di Lusso sulle Colline Fiorentine", location: "Firenze", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { id: 4, title: "Villa Storica sul Lago di Como", location: "Lago di Como", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" },
];

const AreaPremium = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Crown className="w-10 h-10 text-primary" />
            </div>
            <p className="text-primary text-sm font-medium tracking-[0.2em] mb-4">AREA VIP CLIENTI</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Immobili Esclusivi Fuori Portale</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Benvenuto nell'Area VIP. Qui trovi una selezione di immobili riservati, disponibili solo per i nostri clienti esclusivi.
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {exclusiveProperties.map((property) => (
              <div key={property.id} className="group relative overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">{property.title}</h3>
                  <p className="text-primary font-semibold tracking-wider">TRATTATIVA RISERVATA</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-card border border-border p-12">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">Richiedi Immobile Su Misura</h2>
            <p className="text-muted-foreground mb-8">Non trovi quello che cerchi? Contattaci per una ricerca personalizzata e riservata.</p>
            <a href="#contatti" className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors">
              CONTATTACI
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AreaPremium;
