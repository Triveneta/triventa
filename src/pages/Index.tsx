import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LuxuryShowcase from "@/components/LuxuryShowcase";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LuxuryShowcase />
      <ServicesSection />
      <FeaturedProperties />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
