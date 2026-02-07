import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { properties } from "../lib/properties";
import { ArrowLeft, ChevronLeft, ChevronRight, Box, Car, TreeDeciduous, Tag, MapPin, Home, Ruler, Bed, Bath, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const intervalRef = React.useRef<number | null>(null);

  React.useEffect(() => setIndex(0), [images]);

  // Auto-play when more than one image
  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    if (paused) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [images, paused]);

  if (!images || images.length === 0) return null;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative w-full rounded-lg overflow-hidden bg-slate-100">
        {/* stacked images for smooth crossfade + blur transition */}
        <div className="relative w-full h-80 md:h-[520px]">
          {images.map((src, i) => {
            const isActive = i === index;
            return (
              <img
                key={src + i}
                src={src}
                alt={`photo-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform-gpu ${
                  isActive ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-101"
                }`}
                style={{ zIndex: isActive ? 2 : 1 }}
              />
            );
          })}
        </div>

        {images.length > 1 && (
          <>
            <button
              aria-label="prev"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="next"
              onClick={() => {
                setIndex((i) => (i + 1) % images.length);
                // reset autoplay timer
                if (intervalRef.current) {
                  window.clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-md overflow-hidden border ${i === index ? "border-amber-400" : "border-transparent"}`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prop = properties.find((p) => String(p.id) === String(id));

  if (!prop)
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto py-24 px-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6">
            <ArrowLeft size={16} /> Torna indietro
          </button>
          <h2 className="text-2xl font-semibold">Immobile non trovato</h2>
        </main>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero imageUrl={prop.images?.[0] || prop.image}>
        <div className="max-w-4xl px-4">
          <nav className="text-xs text-amber-100/80 mb-2">
            <Link to="/acquisto" className="hover:underline">Acquisto</Link> / <span className="text-white/80">{prop.title}</span>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow">{prop.title}</h1>
          <p className="text-sm text-white/90 mt-2">{prop.zone} • <span className="font-semibold">{prop.price}</span></p>
        </div>
      </PageHero>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Gallery images={prop.images || [prop.image]} />

            <div className="mt-6 bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-serif font-semibold">{prop.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{prop.zone}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold text-amber-600">{prop.price}</div>
                  <div className="text-sm text-muted-foreground">{prop.specs}</div>
                </div>
              </div>

              <div className="mt-5 text-justify text-slate-700 leading-relaxed">
                {prop.description}
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded shadow-sm">
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-amber-500 mr-3" />
                    <div>
                      <div className="text-xs text-muted-foreground">Tipologia</div>
                      <div className="mt-1 font-medium">{prop.typology}</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded shadow-sm">
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 text-amber-500 mr-3" />
                    <div>
                      <div className="text-xs text-muted-foreground">Superficie</div>
                      <div className="mt-1 font-medium">{prop.sqm} m²</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded shadow-sm">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 text-amber-500 mr-3" />
                    <div>
                      <div className="text-xs text-muted-foreground">Camere</div>
                      <div className="mt-1 font-medium">{prop.rooms}</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded shadow-sm">
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 text-amber-500 mr-3" />
                    <div>
                      <div className="text-xs text-muted-foreground">Bagni</div>
                      <div className="mt-1 font-medium">{prop.bathrooms}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium">Note</h3>
                <p className="mt-2 text-slate-700">{prop.notes}</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="text-sm font-medium">Contatta l'agenzia</h4>
                <p className="text-sm text-muted-foreground mt-2">Richiedi informazioni o prenota una visita.</p>
                <div className="mt-4 grid gap-3">
                  <a href="mailto:direzione@triveneta.eu" className="block w-full text-center py-2 bg-amber-500 text-white rounded">Invia Email</a>
                  <div className="flex gap-2">
                    <a href="tel:+393314954709" className="flex-1 text-center py-2 border border-slate-200 rounded flex items-center justify-center gap-2">
                      Chiama
                    </a>
                    <a href="https://wa.link/5o6xrn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-600 rounded hover:bg-emerald-50">
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-amber-500" />
                    <span>Box</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${prop.boxAuto ? "bg-amber-500" : "bg-slate-200"}`} />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-3">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Posto auto</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${prop.postoAuto ? "bg-amber-500" : "bg-slate-200"}`} />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-3">
                  <div className="flex items-center gap-2">
                    <TreeDeciduous className="w-4 h-4 text-amber-500" />
                    <span>Giardino</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${prop.giardino ? "bg-amber-500" : "bg-slate-200"}`} />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-3">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-amber-500" />
                    <span>Budget</span>
                  </div>
                  <div className="text-sm font-medium">{prop.budget}</div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow">
                <div className="flex items-center gap-3 px-4 pt-4">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <div className="text-sm font-medium text-muted-foreground">{prop.title} — {prop.zone}</div>
                </div>
                <div className="h-56 md:h-64 w-full mt-2">
                  <iframe
                    title={`Mappa — ${prop.title}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(`${prop.title} ${prop.zone}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
