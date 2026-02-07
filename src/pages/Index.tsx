import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import Reveal from "@/components/ui/reveal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={120}>
        <AboutSection />
      </Reveal>

      {/* <Reveal delay={220}>
        <FeaturedProperties />
      </Reveal> */}
      <Footer />
    </div>
  );
};

export default Index;
