import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const MarketingFeatures = () => {
  const [activeTab, setActiveTab] = useState<"digital" | "branding">("digital");

  const digitalMarketingServices = [
    "SEO Services", "Content Creation", "Performance Marketing", "Decentralized",
    "Paid Media", "Website Development", "Web Design", "Video Production",
    "Public Relations & Influencers", "Email Marketing", "Branding", "Marketing Automation"
  ];

  const brandingServices = [
    "Branding & Visual Identity", "Growth", "Shopify", "Ad Design", "User Flow",
    "Social Media Design", "Easy-to-use Interface", "User Research", "Scalable",
    "Web Development", "Wordpress", "UI/UX Design"
  ];

  const apiIntegrations = [
    { name: "Buildship", icon: "🔷" },
    { name: "Figma", icon: "🎨" },
    { name: "Framer", icon: "📱" },
    { name: "Supabase", icon: "⚡" },
    { name: "Zapier", icon: "🔗" },
    { name: "Analytics", icon: "📊" },
    { name: "Snowflake", icon: "❄️" },
    { name: "AWS", icon: "☁️" },
    { name: "Microsoft", icon: "🖥️" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All the marketing you'll ever need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamlining solutions for swift success
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "digital"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => setActiveTab("branding")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "branding"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Branding and design
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Services List */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeTab === "digital" ? "Digital Marketing" : "Branding and design"}
                </h3>
                <p className="text-gray-600">
                  {activeTab === "digital" 
                    ? "Streamlining solutions for swift success"
                    : "Crafting tomorrow's digital landscape today"
                  }
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {(activeTab === "digital" ? digitalMarketingServices : brandingServices).map((service, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* API Integrations */}
          <div>
            <Card className="p-6 bg-white shadow-lg h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold">Powerful APIs</CardTitle>
                <CardDescription>
                  Seamless integration for your company. Automate your process and connect the data in real time.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-3 gap-4">
                  {apiIntegrations.map((api, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="text-2xl mb-2">{api.icon}</div>
                      <span className="text-xs text-gray-600 text-center font-medium">
                        {api.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFeatures;