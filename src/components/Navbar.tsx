import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ServiceModal from "./ServiceModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{name: string, category: string} | null>(null);

  const serviceCategories = {
    "SEO & Lead Generation": [
      "SEO Services",
      "Enterprise SEO Services", 
      "Generative Engine, LLM & AI SEO",
      "Digital Marketing Services",
      "Local SEO Services"
    ],
    "Revenue Marketing & CRO": [
      "PPC Management Services",
      "Enterprise PPC Management Services", 
      "Social Media Advertising",
      "Enterprise Social Media Advertising",
      "Programmatic Advertising Services",
      "Conversion Rate Optimization",
      "User Experience Testing",
      "Landing Pages & Funnels"
    ],
    "UX & Interactive": [
      "Website Design",
      "Website Redesign",
      "Rapid Web Design", 
      "Social Media Design",
      "Ecommerce Website Design",
      "Email Marketing Testing & Design",
      "Digital Experience Development",
      "Shopify Ecommerce Development"
    ],
    "AI & Technology": [
      "AI SEO Services",
      "OmniSEO™ AI Rank Tracking & Optimization",
      "AI Digital Marketing Services",
      "Web Channel Call Tracking",
      "SEO Reporting & Forecasting",
      "Channel Attribution & Forecasting",
      "Digital Marketing Competitor Analysis"
    ]
  };

  const navLinks = [
    { name: "SEO & Lead Generation", href: "#seo-lead-generation" },
    { name: "Revenue Marketing & CRO", href: "#revenue-marketing" },
    { name: "UX & Interactive", href: "#ux-interactive" },
    { name: "AI & Technology", href: "#ai-technology" },
    { name: "Who We Are", href: "#who-we-are" },
  ];

  return (
    <nav className="bg-primary backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <img 
                src="/lovable-uploads/b427a895-5016-425a-b157-0603f5acbaf2.png" 
                alt="Logo" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
                onError={(e) => {
                  console.log('Logo failed to load:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Logo loaded successfully')}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="ml-4 space-x-0">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {serviceCategories[link.name as keyof typeof serviceCategories] ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white font-medium text-xs px-2 whitespace-nowrap">
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background border border-border shadow-lg">
                            {serviceCategories[link.name as keyof typeof serviceCategories]?.map((service) => (
                              <NavigationMenuLink
                                key={service}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                                onClick={() => {
                                  setSelectedService({
                                    name: service,
                                    category: link.name
                                  });
                                }}
                              >
                                <div className="text-sm font-medium leading-tight">{service}</div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap"
                      >
                        {link.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="brand" size="default" asChild className="font-semibold pulse-soft">
              <a href="#booking">Book an Intro Call</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="brand" size="sm" className="w-full" asChild>
                  <a href="#booking">Book an Intro Call</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          serviceName={selectedService.name}
          category={selectedService.category}
        />
      )}
    </nav>
  );
};

export default Navbar;