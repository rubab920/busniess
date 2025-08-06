import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrendingUp, Users, Target, BarChart3, Zap, Globe } from "lucide-react";

const LatestMarketingSlider = () => {
  const marketingTrends = [
    {
      icon: TrendingUp,
      title: "AI-Powered Marketing",
      description: "Leverage artificial intelligence to optimize campaigns and personalize customer experiences at scale.",
      tags: ["AI", "Automation", "Personalization"],
      trend: "Hot"
    },
    {
      icon: Users,
      title: "Community-Driven Marketing",
      description: "Build authentic communities around your brand to foster long-term customer relationships.",
      tags: ["Community", "Engagement", "Brand Loyalty"],
      trend: "Rising"
    },
    {
      icon: Target,
      title: "Micro-Targeting Strategies",
      description: "Reach highly specific audience segments with precision-targeted content and messaging.",
      tags: ["Targeting", "Precision", "ROI"],
      trend: "Hot"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Make data-driven decisions instantly with real-time marketing performance insights.",
      tags: ["Analytics", "Real-time", "Data"],
      trend: "Trending"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Campaigns",
      description: "Deploy marketing campaigns in minutes, not weeks, with automated workflow systems.",
      tags: ["Speed", "Automation", "Efficiency"],
      trend: "New"
    },
    {
      icon: Globe,
      title: "Global Localization",
      description: "Scale your marketing globally while maintaining local relevance and cultural sensitivity.",
      tags: ["Global", "Localization", "Scale"],
      trend: "Growing"
    }
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "Hot": return "bg-red-100 text-red-700";
      case "Rising": return "bg-orange-100 text-orange-700";
      case "Trending": return "bg-blue-100 text-blue-700";
      case "New": return "bg-green-100 text-green-700";
      case "Growing": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Marketing Trends
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with the latest marketing strategies and trends shaping the industry
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {marketingTrends.map((trend, index) => {
              const IconComponent = trend.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs font-medium ${getTrendColor(trend.trend)}`}
                        >
                          {trend.trend}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold">{trend.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed mb-4">
                        {trend.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {trend.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs bg-gray-50 border-gray-200 text-gray-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        
    </section>
  );
};

export default LatestMarketingSlider;