import Navbar from "@/components/Navbar";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import FeatureHighlights from "@/components/FeatureHighlights";
import CaseStudies from "@/components/CaseStudies";
import InstantCalculator from "@/components/InstantCalculator";
import PlatformTools from "@/components/PlatformTools";
import TechnologySection from "@/components/TechnologySection";
import Testimonials from "@/components/Testimonials";
import BlogRecommendations from "@/components/BlogRecommendations";
import ResourcesSection from "@/components/ResourcesSection";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import OurServicesGrid from "@/components/OurServicesGrid";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import AboutUsDropdown from "@/components/AboutUsDropdown";
import LatestMarketingSlider from "@/components/LatestMarketingSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SecondaryNavbar />
      <TrustedBy />
      <FeatureHighlights />
      <OurServicesGrid />
      <DetailedServicesSection />
      <AboutUsDropdown />
      <CaseStudies />
      <InstantCalculator />
      <PlatformTools />
      <TechnologySection />
      <LatestMarketingSlider />
      <Testimonials />
      <BlogRecommendations />
      <ResourcesSection />
      <PricingSection />
      <BookingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
