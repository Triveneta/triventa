import { MapPin, Bed, Bath, Square } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqm: number;
  isPremium: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Villa di Prestigio",
    location: "Lago di Garda",
    price: "TRATTATIVA RISERVATA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    beds: 5,
    baths: 4,
    sqm: 450,
    isPremium: true,
  },
  {
    id: 2,
    title: "Attico Esclusivo",
    location: "Verona Centro",
    price: "€ 890.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    beds: 3,
    baths: 2,
    sqm: 180,
    isPremium: false,
  },
  {
    id: 3,
    title: "Residenza di Lusso",
    location: "Colli Trentini",
    price: "€ 1.250.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    beds: 4,
    baths: 3,
    sqm: 320,
    isPremium: true,
  },
];

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="card-premium group cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {property.isPremium && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wider">
          PREMIUM
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="text-sm">{property.location}</span>
      </div>
      <h3 className="font-serif text-xl font-medium text-foreground mb-3">
        {property.title}
      </h3>
      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
        <span className="flex items-center gap-1">
          <Bed className="w-4 h-4" /> {property.beds}
        </span>
        <span className="flex items-center gap-1">
          <Bath className="w-4 h-4" /> {property.baths}
        </span>
        <span className="flex items-center gap-1">
          <Square className="w-4 h-4" /> {property.sqm} m²
        </span>
      </div>
      <p className="text-primary font-semibold tracking-wide">{property.price}</p>
    </div>
  </div>
);

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-secondary/30" id="immobili">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Immobili in Evidenza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selezione delle nostre migliori proprietà nel Triveneto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#tutti-immobili"
            className="btn-outline-premium inline-block px-10 py-4 text-sm font-medium tracking-widest"
          >
            VEDI TUTTI GLI IMMOBILI
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
