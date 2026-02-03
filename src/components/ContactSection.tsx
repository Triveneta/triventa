import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-36 bg-card/50" id="contatti">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-3 sm:mb-4">CONTATTI</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 sm:mb-8 tracking-tight">
              Parliamo del Tuo Progetto
            </h2>
            <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Siamo a tua disposizione per ogni esigenza immobiliare. Contattaci per una consulenza personalizzata.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1 text-sm sm:text-base">Sede</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Via Roma 123, 37121 Verona</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1 text-sm sm:text-base">Telefono</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">+39 045 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1 text-sm sm:text-base">Email</p>
                  <p className="text-muted-foreground text-xs sm:text-sm break-all">info@trivenetaimmobiliare.it</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 sm:p-8 lg:p-10 border border-border rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Il tuo nome"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="email@esempio.it"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Telefono</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="+39 xxx xxx xxxx"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Messaggio</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Come possiamo aiutarti?"
                  required
                />
              </div>
              <button
                type="submit"
                className="font-display w-full py-3 sm:py-4 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold tracking-[0.2em] hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                INVIA MESSAGGIO
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
