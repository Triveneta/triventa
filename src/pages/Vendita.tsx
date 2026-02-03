import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { MapPin, X } from "lucide-react";

const properties = [
  { id: 1, title: "Villa Moderna", location: "Lago di Garda", price: "€ 1.200.000", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", specs: "4 camere · 3 bagni · 350 m²", description: "Villa moderna con vista lago, finiture di pregio e ampio giardino. Zona residenziale esclusiva a pochi minuti dal centro." },
  { id: 2, title: "Appartamento Centro", location: "Verona", price: "€ 450.000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", specs: "2 camere · 1 bagno · 95 m²", description: "Appartamento luminoso nel cuore di Verona, a due passi dall'Arena. Ideale per chi cerca comodità e fascino storico." },
  { id: 3, title: "Casale Ristrutturato", location: "Colli Euganei", price: "€ 680.000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", specs: "5 camere · 3 bagni · 400 m²", description: "Casale completamente ristrutturato con rispetto dello stile originale. Cantina, dependance e oliveto." },
  { id: 4, title: "Attico Panoramico", location: "Trento", price: "€ 520.000", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", specs: "3 camere · 2 bagni · 140 m²", description: "Attico con terrazzo panoramico sulle Dolomiti. Soffitti alti, grandi finestre e finiture contemporanee." },
  { id: 5, title: "Villa con Piscina", location: "Bardolino", price: "€ 980.000", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80", specs: "4 camere · 3 bagni · 280 m²", description: "Villa con piscina e zona barbecue. A pochi minuti dal lago di Garda, ideale per vacanze e residenza." },
  { id: 6, title: "Rustico di Charme", location: "Valpolicella", price: "€ 390.000", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80", specs: "3 camere · 2 bagni · 180 m²", description: "Rustico in pietra con vigneto. Atmosfera autentica tra le colline della Valpolicella." },
];

const Vendita = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash || "";
  const selectedId = hash.startsWith("#property-") ? parseInt(hash.replace("#property-", ""), 10) : null;
  const selectedProperty = selectedId ? properties.find((p) => p.id === selectedId) : null;

  useEffect(() => {
    if (selectedProperty) {
      document.getElementById(`property-${selectedId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedId, selectedProperty]);

  const closeDetail = () => {
    navigate("/vendita", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        <PageHero imageUrl={HERO_IMAGES.vendita}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.2em] mb-3 sm:mb-4">IMMOBILI IN VENDITA</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white drop-shadow-sm">Trova la Tua Casa</h1>
          </div>
        </PageHero>

        <div className="container mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-10">
          {selectedProperty && (
            <section
              id={`property-${selectedProperty.id}`}
              className="mb-10 sm:mb-12 md:mb-16 scroll-mt-24 sm:scroll-mt-28 rounded-xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <div className="relative">
                <button
                  type="button"
                  onClick={closeDetail}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                  aria-label="Chiudi"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover"
                />
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm">{selectedProperty.location}</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-2">{selectedProperty.title}</h2>
                  <p className="text-sm sm:text-base text-primary font-semibold mb-3 sm:mb-4">{selectedProperty.price}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{selectedProperty.specs}</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{selectedProperty.description}</p>
                </div>
              </div>
            </section>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((property) => (
              <a key={property.id} href={`#property-${property.id}`} className="group block">
                <div className="relative overflow-hidden mb-3 sm:mb-4 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-shadow">
                  <img src={property.image} alt={property.title} className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-1 sm:mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm">{property.location}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{property.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{property.specs}</p>
                <p className="text-xs sm:text-sm text-primary font-semibold">{property.price}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vendita;
