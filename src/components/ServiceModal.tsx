import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  TrendingUp, 
  MousePointer,
  Users,
  Palette,
  Code,
  Zap,
  BarChart3,
  Target,
  Globe,
  ShoppingCart,
  Mail,
  Smartphone
} from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  category: string;
}

const ServiceModal = ({ isOpen, onClose, serviceName, category }: ServiceModalProps) => {
  const getServiceIcon = (name: string) => {
    const iconMap: { [key: string]: any } = {
      "SEO Services": Search,
      "Enterprise SEO Services": Globe,
      "Generative Engine, LLM & AI SEO": Zap,
      "Digital Marketing Services": TrendingUp,
      "Local SEO Services": Target,
      "PPC Management Services": MousePointer,
      "Enterprise PPC Management Services": BarChart3,
      "Social Media Advertising": Users,
      "Enterprise Social Media Advertising": Users,
      "Programmatic Advertising Services": Target,
      "Conversion Rate Optimization": TrendingUp,
      "User Experience Testing": Target,
      "Landing Pages & Funnels": Code,
      "Website Design": Palette,
      "Website Redesign": Palette,
      "Rapid Web Design": Zap,
      "Social Media Design": Users,
      "Ecommerce Website Design": ShoppingCart,
      "Email Marketing Testing & Design": Mail,
      "Digital Experience Development": Code,
      "Shopify Ecommerce Development": ShoppingCart,
      "AI SEO Services": Zap,
      "OmniSEO™ AI Rank Tracking & Optimization": BarChart3,
      "AI Digital Marketing Services": Zap,
      "Web Channel Call Tracking": Smartphone,
      "SEO Reporting & Forecasting": BarChart3,
      "Channel Attribution & Forecasting": BarChart3,
      "Digital Marketing Competitor Analysis": Target
    };
    return iconMap[name] || Search;
  };

  const getServiceDescription = (name: string) => {
    const descriptions: { [key: string]: string } = {
      "SEO Services": "Comprehensive search engine optimization to improve your organic rankings and drive qualified traffic to your website.",
      "Enterprise SEO Services": "Large-scale SEO solutions for enterprise companies with complex technical requirements and multiple stakeholders.",
      "Generative Engine, LLM & AI SEO": "Next-generation SEO using AI and machine learning to optimize for voice search and AI-powered search engines.",
      "Digital Marketing Services": "Full-service digital marketing including strategy, execution, and optimization across all channels.",
      "Local SEO Services": "Location-based optimization to help your business dominate local search results and attract nearby customers.",
      "PPC Management Services": "Professional pay-per-click advertising management across Google Ads, Bing, and social media platforms.",
      "Enterprise PPC Management Services": "Advanced PPC strategies for large organizations with substantial advertising budgets and complex requirements.",
      "Social Media Advertising": "Targeted social media campaigns across Facebook, Instagram, LinkedIn, and other platforms to reach your ideal audience.",
      "Enterprise Social Media Advertising": "Large-scale social media advertising solutions with advanced targeting and sophisticated campaign management.",
      "Programmatic Advertising Services": "Automated ad buying using real-time bidding to reach the right audience at the optimal price.",
      "Conversion Rate Optimization": "Data-driven testing and optimization to improve your website's conversion rates and maximize ROI.",
      "User Experience Testing": "Comprehensive UX testing to identify and eliminate friction points that prevent conversions.",
      "Landing Pages & Funnels": "High-converting landing pages and sales funnels designed to guide visitors toward your desired action.",
      "Website Design": "Modern, responsive website design that combines beautiful aesthetics with excellent user experience.",
      "Website Redesign": "Complete website overhauls to modernize your online presence and improve performance.",
      "Rapid Web Design": "Fast-turnaround website design for businesses that need to get online quickly without compromising quality.",
      "Social Media Design": "Eye-catching graphics and visual content optimized for each social media platform.",
      "Ecommerce Website Design": "Specialized e-commerce design focused on maximizing sales and creating seamless shopping experiences.",
      "Email Marketing Testing & Design": "A/B tested email templates and campaigns designed to increase open rates and conversions.",
      "Digital Experience Development": "Custom web applications and interactive experiences that engage users and drive results.",
      "Shopify Ecommerce Development": "Expert Shopify development including custom themes, apps, and integrations.",
      "AI SEO Services": "Artificial intelligence-powered SEO tools and strategies to stay ahead of search algorithm changes.",
      "OmniSEO™ AI Rank Tracking & Optimization": "Our proprietary AI system for tracking rankings and automatically optimizing SEO performance.",
      "AI Digital Marketing Services": "Machine learning-powered marketing automation and optimization across all digital channels.",
      "Web Channel Call Tracking": "Advanced call tracking to measure which marketing channels drive phone conversions.",
      "SEO Reporting & Forecasting": "Detailed SEO analytics and predictive modeling to forecast future organic traffic growth.",
      "Channel Attribution & Forecasting": "Multi-touch attribution modeling to understand the customer journey and predict future performance.",
      "Digital Marketing Competitor Analysis": "Comprehensive competitor research and analysis to identify opportunities and stay ahead of the competition."
    };
    return descriptions[name] || "Professional service designed to help your business grow and succeed online.";
  };

  const getServiceFeatures = (name: string) => {
    const commonFeatures = ["Strategy Development", "Implementation", "Monitoring & Optimization", "Detailed Reporting"];
    
    const specificFeatures: { [key: string]: string[] } = {
      "SEO Services": ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
      "PPC Management Services": ["Campaign Setup", "Bid Management", "Ad Creation", "Landing Page Optimization"],
      "Website Design": ["Responsive Design", "UX/UI Design", "CMS Integration", "Mobile Optimization"],
      "AI SEO Services": ["AI Content Generation", "Algorithm Adaptation", "Voice Search Optimization", "Predictive Analytics"]
    };

    return specificFeatures[name] || commonFeatures;
  };

  const IconComponent = getServiceIcon(serviceName);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-gradient-light rounded-lg flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-primary" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">{category}</Badge>
              <DialogTitle className="text-2xl font-bold">{serviceName}</DialogTitle>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {getServiceDescription(serviceName)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {getServiceFeatures(serviceName).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-sm">Proven Results</h4>
                      <p className="text-xs text-muted-foreground">Track record of delivering measurable growth</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-sm">Expert Team</h4>
                      <p className="text-xs text-muted-foreground">Dedicated specialists with years of experience</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <h4 className="font-medium text-sm">Custom Strategy</h4>
                      <p className="text-xs text-muted-foreground">Tailored approach for your specific needs</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button size="lg" className="font-semibold">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;