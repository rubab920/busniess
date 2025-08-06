import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-brand-gradient-hero py-32 lg:py-40 overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/20 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-navy/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-8 text-primary font-semibold px-6 py-3 fade-in text-lg">
            #1 Rated Marketing Agency
          </Badge>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-[0.9]">
            <span className="gradient-text">Flexible Hourly Packages</span>
            <br />
            for Your Business Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed fade-in">
            We've generated $3.2B+ in revenue for our clients through proven digital marketing strategies. 
            Get measurable results with our transparent, performance-based approach.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <div className="text-4xl font-bold gradient-text mb-2">$3.2B+</div>
              <div className="text-muted-foreground font-medium">Revenue Generated</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <div className="text-4xl font-bold gradient-text mb-2">91%</div>
              <div className="text-muted-foreground font-medium">Client Retention Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Companies Helped</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
            <Button variant="brand" size="xl" className="pulse-soft" asChild>
              <a href="#booking">Book an Intro Call</a>
            </Button>
            <Button variant="brand-outline" size="xl" asChild>
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 fade-in">
            <p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders worldwide</p>
            <div className="flex items-center justify-center flex-wrap gap-8 opacity-70">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
              <div className="h-4 w-px bg-muted-foreground/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold">A+</div>
                <div className="text-sm text-muted-foreground">BBB Rating</div>
              </div>
              <div className="h-4 w-px bg-muted-foreground/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold">Premier</div>
                <div className="text-sm text-muted-foreground">Google Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;