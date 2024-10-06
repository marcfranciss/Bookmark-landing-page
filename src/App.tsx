import { CTASection } from "./components/CTASection/CTASection";
import { FAQSection } from "./components/FAQSection/FAQSection";
import { FeatureSection } from "./components/FeaturesSection/FeatureSection";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProductSection } from "./components/ProductSection/ProductSection";

export const App = () => {
  return (
    <main>
      <Header /> {/* Done */}
      <HeroSection /> {/* Done */}
      <FeatureSection /> {/* Done */}
      <ProductSection /> {/* Ongoing */}
      <FAQSection /> {/* NYS */}
      <CTASection /> {/* NYS */}
      <Footer /> {/* NYS */}
    </main>
  );
};
