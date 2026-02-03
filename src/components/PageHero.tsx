import { ReactNode } from "react";

interface PageHeroProps {
  /** Unsplash or absolute image URL for hero background */
  imageUrl: string;
  children: ReactNode;
  /** Optional custom class for the content container */
  className?: string;
}

const PageHero = ({ imageUrl, children, className = "" }: PageHeroProps) => (
  <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-hidden
    />
    <div
      className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75"
      aria-hidden
    />
    <div className={`container relative z-10 mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  </section>
);

export default PageHero;
