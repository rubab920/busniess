import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const DetailedServicesSection = () => {
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

  const apiLogos = [
    "/lovable-uploads/2c37c72a-55a2-4941-a1fa-3e23b97fe0c1.png",
    "/lovable-uploads/ce45ba7a-1fe5-44cb-b6ce-2e085268d0e4.png",
    "/lovable-uploads/39fd20e4-cb2d-434e-a77e-a581e5599f56.png",
    "/lovable-uploads/a6f5dbd0-ac45-4b24-9586-3f00147a3ff1.png",
    "/lovable-uploads/44b01e77-aeab-4f4f-8688-e3a64096d500.png",
    "/lovable-uploads/4d275c20-3b70-4f06-942f-ae9d34519864.png"
  ];

  const apiNames = [
    "Whale", "Star", "Analytics", "Snowflake", "AWS", "MCP"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Digital Marketing Section */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white shadow-lg border-0 rounded-3xl">
              <div className="mb-8">
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab("digital")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === "digital"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Digital Marketing
                  </button>
                  <button
                    onClick={() => setActiveTab("branding")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === "branding"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Branding and design
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeTab === "digital" ? "Digital Marketing" : "Branding and design"}
                </h3>
                <p className="text-gray-600 mb-6">
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
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors border-0 rounded-full"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* API Integrations */}
          <div>
            <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold">Powerful APIs</CardTitle>
                <CardDescription className="text-gray-600">
                  Seamless integration for your company. Automate your process and connect the data in real time.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-3 gap-4">
                  {apiLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <img 
                        src={logo} 
                        alt={apiNames[index]} 
                        className="w-8 h-8 mb-2 rounded"
                      />
                      <span className="text-xs text-gray-600 text-center font-medium">
                        {apiNames[index]}
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

export default DetailedServicesSection;