import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { ArrowRight, Search, Home, MapPin } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { properties } from "@/lib/properties";

const Acquisto = () => {
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16 pt-24">
        <PageHero imageUrl={HERO_IMAGES.acquisto}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.2em] mb-3 sm:mb-4">ACQUISTA</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 sm:mb-6 drop-shadow-sm">Cerca la Tua Casa Ideale</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl drop-shadow-sm">Trova la proprietà perfetta nel Triveneto con il nostro team di esperti.</p>
          </div>
        </PageHero>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Search */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-4 sm:p-6 mb-8 sm:mb-10 md:mb-12 mt-3">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                {/* left icon for desktop, right icon for mobile */}
                <Search className="hidden sm:block absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-border" />
                <Search className="block sm:hidden absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-border" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cerca per zona, città o tipo di immobile..."
                  className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-sm sm:text-base bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              {/* Search is live as you type; no submit button needed */}
            </div>
          </div>

          {/* Selected Property Detail is now a dedicated page at /acquisto/:id */}

          {/* Search Results */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {useMemo(() => {
              const q = searchQuery.trim().toLowerCase();
              const filtered = q
                ? properties.filter((p) =>
                    [p.title, p.location, p.specs, p.description].join(" ").toLowerCase().includes(q)
                  )
                : properties;

              return filtered.map((property) => (
                <Link key={property.id} to={`/acquisto/${property.id}`} className="group block">
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
                </Link>
              ));
            }, [searchQuery])}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Acquisto;
