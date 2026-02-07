import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default Index;
