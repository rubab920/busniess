import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Target, Users, Globe, Zap } from "lucide-react";

const PlatformTools = () => {
  const tools = [
    {
      name: "MarketingCloudFX",
      description: "Our proprietary marketing platform that tracks ROI and performance across all channels",
      icon: BarChart3,
      features: ["Real-time reporting", "Cross-channel analytics", "ROI tracking", "Custom dashboards"],
      color: "bg-blue-500"
    },
    {
      name: "RevenueCloudFX", 
      description: "Advanced revenue attribution and customer journey tracking system",
      icon: TrendingUp,
      features: ["Revenue attribution", "Customer journey mapping", "Conversion optimization", "Predictive analytics"],
      color: "bg-purple-500"
    },
    {
      name: "CallTrackingFX",
      description: "Complete call tracking and management solution for phone lead optimization",
      icon: Target,
      features: ["Dynamic number insertion", "Call recording", "Lead scoring", "Integration with CRM"],
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powered by Proprietary Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our custom-built marketing technology stack gives you competitive advantages 
            that generic tools simply can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft bg-white">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{tool.name}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="brand-outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-brand-gradient-light rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Technology That Delivers Results
            </h3>
            <p className="text-lg text-muted-foreground">
              See how our proprietary technology stack drives better outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">125%</div>
              <div className="text-muted-foreground">Higher Conversion Rates</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">300%</div>
              <div className="text-muted-foreground">Faster Implementation</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">89%</div>
              <div className="text-muted-foreground">More Accurate Reporting</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformTools;