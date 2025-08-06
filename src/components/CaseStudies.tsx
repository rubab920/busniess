import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechStart Inc.",
      logo: "TS",
      industry: "SaaS",
      challenge: "Lead Generation",
      result: "300% increase in qualified leads",
      description: "Implemented a comprehensive digital marketing strategy that transformed their lead generation process.",
      metrics: [
        { label: "Lead Increase", value: "300%" },
        { label: "Cost Reduction", value: "45%" },
        { label: "ROI", value: "420%" }
      ],
      color: "bg-blue-600"
    },
    {
      company: "EcoCommerce",
      logo: "EC",
      industry: "E-commerce",
      challenge: "Revenue Growth",
      result: "250% revenue growth in 6 months",
      description: "Optimized their entire sales funnel and implemented targeted advertising campaigns.",
      metrics: [
        { label: "Revenue Growth", value: "250%" },
        { label: "Conversion Rate", value: "180%" },
        { label: "Customer LTV", value: "200%" }
      ],
      color: "bg-green-600"
    },
    {
      company: "FinanceFlow",
      logo: "FF",
      industry: "FinTech",
      challenge: "Brand Awareness",
      result: "500% increase in brand recognition",
      description: "Built a strong brand presence through strategic content marketing and social media campaigns.",
      metrics: [
        { label: "Brand Awareness", value: "500%" },
        { label: "Social Reach", value: "800%" },
        { label: "Engagement", value: "320%" }
      ],
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-brand transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${study.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {study.logo}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{study.company}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{study.industry}</Badge>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="font-semibold text-green-600">{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-primary">{study.result}</p>
                </div>
                <Button variant="outline" className="w-full">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="brand" size="lg">
            View More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;