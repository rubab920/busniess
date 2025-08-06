import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [viewType, setViewType] = useState<"hourly" | "monthly">("hourly");
  const [currency, setCurrency] = useState<"USD" | "GBP" | "EUR">("USD");
  const [selectedPlan, setSelectedPlan] = useState<"Starter" | "Growth" | "Sales" | "Enterprise">("Growth");

  const currencyData = {
    USD: { symbol: "$", rate: 1, flag: "/lovable-uploads/24401c21-8182-46cd-ad16-df8f81690e83.png" },
    GBP: { symbol: "£", rate: 0.79, flag: "/lovable-uploads/008499c1-b9af-4f3d-9dd5-96a5fdf0daaa.png" },
    EUR: { symbol: "€", rate: 0.85, flag: "/lovable-uploads/ee867f4b-a388-4ab5-8217-1a78ae8ab41a.png" }
  };

  const formatPrice = (usdPrice: number) => {
    const converted = Math.round(usdPrice * currencyData[currency].rate);
    return `${currencyData[currency].symbol}${converted}`;
  };

  const pricingPlans = [
    {
      name: "Starter",
      basePrice: 32,
      description: "Perfect for small businesses getting started",
      features: [
        "Basic SEO Optimization",
        "Social Media Management",
        "Monthly Analytics Report",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      basePrice: 28,
      description: "Best for growing businesses",
      features: [
        "Advanced SEO & Content",
        "Paid Advertising Management",
        "Weekly Analytics Reports",
        "Phone & Email Support",
        "Conversion Optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      basePrice: 20,
      description: "For large scale operations",
      features: [
        "Full Marketing Stack",
        "Dedicated Account Manager",
        "Daily Performance Reports",
        "24/7 Priority Support",
        "Custom Integrations",
        "Quarterly Strategy Review"
      ],
      popular: false
    }
  ];

  const planCategories = ["Starter", "Growth", "Sales", "Enterprise"];

  const comparisonData = {
    hourly: {
      Starter: { hours: "20 Hours", price: formatPrice(640), detail: "Monthly", savings: "Save 20% vs Freelancers" },
      Growth: { hours: "40 Hours", price: formatPrice(1120), detail: "Monthly", savings: "Save 35% vs Agencies" },
      Sales: { hours: "80 Hours", price: formatPrice(1600), detail: "Monthly", savings: "Save 45% vs In-house" },
      Enterprise: { hours: "120+ Hours", price: formatPrice(2200), detail: "Monthly", savings: "Custom Solutions" }
    },
    monthly: {
      Starter: { hours: "80 hours", price: formatPrice(2560), detail: "Per month", savings: "Basic package" },
      Growth: { hours: "160 hours", price: formatPrice(4480), detail: "Per month", savings: "Most popular" },
      Sales: { hours: "240 hours", price: formatPrice(6400), detail: "Per month", savings: "High volume" },
      Enterprise: { hours: "Custom", price: "Custom", detail: "Flexible", savings: "Tailored solution" }
    }
  };

  const handleTechResourcesClick = () => {
    const techSection = document.getElementById('technology');
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResourcesClick = () => {
    const resourcesSection = document.getElementById('resources');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPlanMetrics = (plan: string) => {
    const metrics = {
      Starter: {
        rate: formatPrice(32),
        hoursThisMonth: "5 Hours",
        totalMonthly: formatPrice(160),
        daysActive: "3 Days",
        hoursPerDay: "1.7 Hours",
        discount: "0%"
      },
      Growth: {
        rate: formatPrice(28),
        hoursThisMonth: "40 Hours",
        totalMonthly: formatPrice(1120),
        daysActive: "20 Days",
        hoursPerDay: "2 Hours",
        discount: "12%"
      },
      Sales: {
        rate: formatPrice(20),
        hoursThisMonth: "80 Hours",
        totalMonthly: formatPrice(1600),
        daysActive: "25 Days",
        hoursPerDay: "3.2 Hours",
        discount: "37%"
      },
      Enterprise: {
        rate: "Custom",
        hoursThisMonth: "120+ Hours",
        totalMonthly: "Custom",
        daysActive: "30 Days",
        hoursPerDay: "4+ Hours",
        discount: "50%+"
      }
    };
    return metrics[plan as keyof typeof metrics];
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Scale up or down anytime with our flexible packages.
          </p>
          
          {/* Currency Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-1 p-1 bg-brand-gradient-light rounded-xl shadow-soft">
              {Object.entries(currencyData).map(([curr, data]) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as "USD" | "GBP" | "EUR")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                    currency === curr
                      ? "bg-white text-primary shadow-soft scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  }`}
                >
                  <img src={data.flag} alt={curr} className="w-5 h-4 object-cover rounded-sm" />
                  <span className="text-sm font-semibold">{curr}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* View Toggle */}
          <div className="inline-flex rounded-xl bg-brand-gradient-light p-1 mb-12 shadow-soft">
            <button
              onClick={() => setViewType("hourly")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                viewType === "hourly"
                  ? "bg-white text-primary shadow-soft scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/50"
              }`}
            >
              Hourly Rates
            </button>
            <button
              onClick={() => setViewType("monthly")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                viewType === "monthly"
                  ? "bg-white text-primary shadow-soft scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/50"
              }`}
            >
              Monthly Packages
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card key={plan.name} className={`relative card-hover bg-white ${plan.popular ? 'ring-2 ring-primary shadow-brand scale-105' : 'shadow-soft'} border-0`}>
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gradient text-white shadow-soft px-4 py-2">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold mb-4">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">
                    {formatPrice(plan.basePrice)}
                  </span>
                  <span className="text-muted-foreground text-lg">
                    {viewType === "hourly" ? "/hour" : "/month"}
                  </span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "brand" : "brand-outline"} 
                  size="lg"
                  className="w-full font-semibold"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
          
          {/* Custom Plan */}
          <Card className="border-dashed border-2 border-primary/30 card-hover bg-brand-gradient-light/50">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-xl font-bold mb-4">Custom Plan</CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">Custom</span>
              </div>
              <CardDescription className="text-base">Tailored to your specific needs</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Custom Strategy Development</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Dedicated Team Assignment</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Flexible Hour Allocation</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Premium Support</span>
                </li>
              </ul>
              <Button variant="brand-outline" size="lg" className="w-full font-semibold">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Cost Comparison */}
        <div className="bg-brand-gradient rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Cost Comparison & Savings</h3>
          
          {/* Plan Selection Buttons */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {planCategories.map((plan) => (
              <Button 
                key={plan}
                variant="outline" 
                size="sm" 
                onClick={() => setSelectedPlan(plan as "Starter" | "Growth" | "Sales" | "Enterprise")}
                className={`${
                  selectedPlan === plan 
                    ? "bg-white/30 border-white text-white" 
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                } transition-all duration-300`}
              >
                {plan}
              </Button>
            ))}
          </div>
          
          {/* Metrics Grid - 6 boxes like in the image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Top Row */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{getPlanMetrics(selectedPlan).rate}</div>
              <div className="text-sm opacity-75">Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{getPlanMetrics(selectedPlan).hoursThisMonth}</div>
              <div className="text-sm opacity-75">This Month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{getPlanMetrics(selectedPlan).totalMonthly}</div>
              <div className="text-sm opacity-75">Monthly Spend</div>
            </div>
            
            {/* Bottom Row */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{getPlanMetrics(selectedPlan).daysActive}</div>
              <div className="text-sm opacity-75">Active</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{getPlanMetrics(selectedPlan).hoursPerDay}</div>
              <div className="text-sm opacity-75">Per Day</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{getPlanMetrics(selectedPlan).discount}</div>
              <div className="text-sm opacity-75">Discount</div>
            </div>
          </div>
          
          <div className="text-center mt-8 flex gap-4 justify-center flex-wrap">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleTechResourcesClick}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Technology
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResourcesClick}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Resources
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;