const TrustedBy = () => {
  const brands = [
    "TechCorp", "InnovateLab", "GrowthHacker", "ScaleUp", "DataDriven", "FutureFlow"
  ];

  return (
    <section className="py-16 bg-white border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg font-semibold">Trusted by 500+ growing businesses</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={brand} className="flex items-center justify-center opacity-50 hover:opacity-80 transition-all duration-300 hover:scale-105">
              <div className="text-xl font-bold text-muted-foreground font-jakarta">
                {brand}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Trust Elements */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">24/7 Support</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">99.9% Uptime</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Money-back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;