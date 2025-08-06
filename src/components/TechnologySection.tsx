import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone, Zap, BarChart3 } from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Custom tracking, attribution modeling, and data visualization",
      tools: ["Google Analytics 4", "GTM", "Data Studio", "BigQuery"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Marketing Automation",
      description: "Sophisticated workflows and customer journey optimization",
      tools: ["HubSpot", "Marketo", "Salesforce", "Zapier"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO & Content Tools",
      description: "Enterprise-grade optimization and content management",
      tools: ["SEMrush", "Ahrefs", "Screaming Frog", "ContentKing"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Multi-platform scheduling and performance tracking",
      tools: ["Hootsuite", "Buffer", "Sprout Social", "Later"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Paid Advertising",
      description: "Cross-platform campaign management and optimization",
      tools: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Microsoft Ads"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reporting & Insights",
      description: "Real-time dashboards and automated reporting",
      tools: ["Tableau", "Power BI", "Looker", "Custom Dashboards"]
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-navy/5 rounded-full blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Cutting-Edge Marketing Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the most advanced marketing technologies and platforms to deliver 
            exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-gradient rounded-lg text-white">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-brand-gradient rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Custom Technology Solutions</h3>
            <p className="text-lg mb-6 opacity-90">
              Need something specific? We build custom marketing technology solutions 
              tailored to your unique business requirements.
            </p>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
              Enterprise-Grade Security & Compliance
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;