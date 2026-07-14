import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
