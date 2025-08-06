import ServiceDetail from "./ServiceDetail";

const ServiceDetailSections = () => {
  const services = [
    { id: "seo-services", name: "SEO Services", category: "SEO & Lead Generation" },
    { id: "enterprise-seo-services", name: "Enterprise SEO Services", category: "SEO & Lead Generation" },
    { id: "generative-engine-llm--ai-seo", name: "Generative Engine, LLM & AI SEO", category: "SEO & Lead Generation" },
    { id: "digital-marketing-services", name: "Digital Marketing Services", category: "SEO & Lead Generation" },
    { id: "local-seo-services", name: "Local SEO Services", category: "SEO & Lead Generation" },
    { id: "ppc-management-services", name: "PPC Management Services", category: "Revenue Marketing & CRO" },
    { id: "enterprise-ppc-management-services", name: "Enterprise PPC Management Services", category: "Revenue Marketing & CRO" },
    { id: "social-media-advertising", name: "Social Media Advertising", category: "Revenue Marketing & CRO" },
    { id: "website-design", name: "Website Design", category: "UX & Interactive" },
    { id: "ai-seo-services", name: "AI SEO Services", category: "AI & Technology" }
  ];

  return (
    <div>
      {services.map((service) => (
        <div key={service.id} id={service.id}>
          <ServiceDetail 
            serviceName={service.name} 
            category={service.category}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceDetailSections;