import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const properties = [
  { id: 1, title: "Villa Moderna", location: "Lago di Garda", price: "€ 1.200.000", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", specs: "4 camere · 3 bagni · 350 m²" },
  { id: 2, title: "Appartamento Centro", location: "Verona", price: "€ 450.000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", specs: "2 camere · 1 bagno · 95 m²" },
  { id: 3, title: "Casale Ristrutturato", location: "Colli Euganei", price: "€ 680.000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", specs: "5 camere · 3 bagni · 400 m²" },
  { id: 4, title: "Attico Panoramico", location: "Trento", price: "€ 520.000", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", specs: "3 camere · 2 bagni · 140 m²" },
  { id: 5, title: "Villa con Piscina", location: "Bardolino", price: "€ 980.000", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80", specs: "4 camere · 3 bagni · 280 m²" },
  { id: 6, title: "Rustico di Charme", location: "Valpolicella", price: "€ 390.000", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80", specs: "3 camere · 2 bagni · 180 m²" },
];

const Vendita = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.2em] mb-4">IMMOBILI IN VENDITA</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Trova la Tua Casa</h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <a key={property.id} href={`#property-${property.id}`} className="group block">
                <div className="relative overflow-hidden mb-4">
                  <img src={property.image} alt={property.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{property.specs}</p>
                <p className="text-primary font-semibold">{property.price}</p>
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
