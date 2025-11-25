import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import ComparisonSection from '../components/sections/ComparisonSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ImplementationSection from '../components/sections/ImplementationSection';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection/>
      <ComparisonSection />
      <FeaturesSection />
      <ImplementationSection />
      <PricingSection />
      <FAQSection/>
      <ContactSection/>
    </div>
  );
}