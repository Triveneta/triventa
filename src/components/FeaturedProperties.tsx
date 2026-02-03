import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  specs: string;
  isPremium: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Villa di Prestigio",
    location: "Lago di Garda",
    price: "TRATTATIVA RISERVATA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    specs: "5 camere · 4 bagni · 450 m²",
    isPremium: true,
  },
  {
    id: 2,
    title: "Attico Panoramico",
    location: "Verona Centro",
    price: "€ 890.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    specs: "3 camere · 2 bagni · 180 m²",
    isPremium: false,
  },
  {
    id: 3,
    title: "Residenza Storica",
    location: "Colli Trentini",
    price: "€ 1.250.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    specs: "4 camere · 3 bagni · 320 m²",
    isPremium: true,
  },
];

const PropertyCard = ({ property }: { property: Property }) => (
  <Link to="/vendita" className="group block">
    <div className="relative overflow-hidden mb-5 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-500 rounded-sm pointer-events-none" />
      {property.isPremium && (
        <div className="font-display absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.2em]">
          PREMIUM
        </div>
      )}
    </div>
    <div className="flex items-start gap-2 text-muted-foreground mb-2">
      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
      <span className="text-sm">{property.location}</span>
    </div>
    <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">
      {property.title}
    </h3>
    <p className="text-sm text-muted-foreground mb-3">{property.specs}</p>
    <p className="text-primary font-semibold tracking-widest text-sm">{property.price}</p>
  </Link>
);

const FeaturedProperties = () => {
  return (
    <section className="relative py-28 lg:py-36 bg-background" id="immobili">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 lg:mb-20">
          <div>
            <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4">IMMOBILI IN EVIDENZA</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
              Proprietà Selezionate
            </h2>
          </div>
          <Link
            to="/vendita"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest hover:gap-3 transition-all"
          >
            Vedi Tutti
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
