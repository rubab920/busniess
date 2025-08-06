import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Download, Users, TrendingUp } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Marketing Guides",
      description: "Comprehensive guides on digital marketing strategies",
      items: ["SEO Best Practices", "PPC Optimization", "Social Media Strategy", "Content Marketing"],
      type: "Guide",
      color: "bg-blue-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Industry Reports",
      description: "Latest trends and insights from marketing industry",
      items: ["2024 Marketing Trends", "ROI Benchmarks", "Consumer Behavior", "Platform Updates"],
      type: "Report",
      color: "bg-green-500"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides and webinars",
      items: ["Analytics Setup", "Campaign Creation", "Optimization Tips", "Tool Tutorials"],
      type: "Video",
      color: "bg-purple-500"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Templates & Tools",
      description: "Ready-to-use templates and calculators",
      items: ["Campaign Templates", "ROI Calculator", "Audit Checklist", "Strategy Framework"],
      type: "Template",
      color: "bg-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Case Studies",
      description: "Real client success stories and results",
      items: ["E-commerce Growth", "B2B Lead Generation", "Local Business", "Enterprise Solutions"],
      type: "Case Study",
      color: "bg-red-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Data",
      description: "Industry benchmarks and performance metrics",
      items: ["Conversion Rates", "CTR Benchmarks", "Cost Per Lead", "ROAS Standards"],
      type: "Data",
      color: "bg-teal-500"
    }
  ];

  const featuredResources = [
    {
      title: "2024 Digital Marketing Playbook",
      description: "Complete guide to digital marketing success in 2024",
      downloadCount: "15,000+",
      type: "Featured Guide"
    },
    {
      title: "ROI Calculator Suite",
      description: "Calculate expected returns for all major marketing channels",
      downloadCount: "8,500+",
      type: "Tool"
    },
    {
      title: "Marketing Audit Template",
      description: "Comprehensive audit checklist for marketing performance",
      downloadCount: "12,000+",
      type: "Template"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute top-20 left-20 w-32 h-32 bg-brand-blue/5 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-navy/5 rounded-full blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Resources & Knowledge
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Marketing Resources & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of marketing resources, guides, and tools 
            to accelerate your business growth.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredResources.map((resource, index) => (
            <Card key={index} className="card-hover bg-brand-gradient text-white border-0 shadow-brand">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                    {resource.type}
                  </Badge>
                  <div className="text-sm opacity-75">{resource.downloadCount} downloads</div>
                </div>
                <CardTitle className="text-xl text-white">{resource.title}</CardTitle>
                <CardDescription className="text-white/80">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Download Free
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((category, index) => (
            <Card key={index} className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 ${category.color} rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {category.type}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="brand-outline" size="sm" className="w-full">
                  Explore {category.type}s
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="bg-brand-gradient-light border-0 shadow-soft max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Stay Updated</CardTitle>
              <CardDescription className="text-lg">
                Get the latest marketing insights, resources, and industry updates delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="brand">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Join 25,000+ marketers. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;