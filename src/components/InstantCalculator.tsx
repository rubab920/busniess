import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const InstantCalculator = () => {
  const [monthlyBudget, setMonthlyBudget] = useState([5000]);
  const [currentConversion, setCurrentConversion] = useState([2]);
  const [avgOrderValue, setAvgOrderValue] = useState([150]);

  const calculateROI = () => {
    const budget = monthlyBudget[0];
    const conversion = currentConversion[0];
    const orderValue = avgOrderValue[0];
    
    // Estimated improvements with professional marketing
    const improvedConversion = conversion * 1.5; // 50% improvement
    const currentRevenue = (budget / 50) * conversion * orderValue; // Assuming $50 cost per click
    const improvedRevenue = (budget / 50) * improvedConversion * orderValue;
    const additionalRevenue = improvedRevenue - currentRevenue;
    const roi = ((additionalRevenue - budget) / budget) * 100;
    
    return {
      currentRevenue: Math.round(currentRevenue),
      improvedRevenue: Math.round(improvedRevenue),
      additionalRevenue: Math.round(additionalRevenue),
      roi: Math.round(roi)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Calculator className="w-4 h-4 mr-2" />
            Instant Calculator
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Calculate Your Marketing ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much additional revenue you could generate with professional marketing optimization.
            Adjust the sliders below to get your personalized projection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-primary" />
                Your Current Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Monthly Marketing Budget: ${monthlyBudget[0].toLocaleString()}
                </label>
                <Slider
                  value={monthlyBudget}
                  onValueChange={setMonthlyBudget}
                  min={1000}
                  max={50000}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$1,000</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Current Conversion Rate: {currentConversion[0]}%
                </label>
                <Slider
                  value={currentConversion}
                  onValueChange={setCurrentConversion}
                  min={0.5}
                  max={10}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0.5%</span>
                  <span>10%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Average Order Value: ${avgOrderValue[0]}
                </label>
                <Slider
                  value={avgOrderValue}
                  onValueChange={setAvgOrderValue}
                  min={25}
                  max={1000}
                  step={25}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$25</span>
                  <span>$1,000+</span>
                </div>
              </div>

              <div className="bg-brand-gradient-light rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Based on our average client improvements</p>
                <div className="text-2xl font-bold gradient-text">+150% Revenue Growth</div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-soft border-0 bg-brand-gradient text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-white">
                <TrendingUp className="w-6 h-6 mr-3" />
                Your Projected Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Current Monthly Revenue</span>
                  <DollarSign className="w-5 h-5 text-white/60" />
                </div>
                <div className="text-3xl font-bold text-white">
                  ${results.currentRevenue.toLocaleString()}
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Projected Monthly Revenue</span>
                  <TrendingUp className="w-5 h-5 text-green-300" />
                </div>
                <div className="text-3xl font-bold text-white">
                  ${results.improvedRevenue.toLocaleString()}
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Additional Monthly Revenue</span>
                  <span className="text-green-300 text-sm font-semibold">+{results.roi}% ROI</span>
                </div>
                <div className="text-4xl font-bold text-green-300">
                  +${results.additionalRevenue.toLocaleString()}
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-white/80 mb-2">Potential Annual Increase</div>
                  <div className="text-5xl font-bold text-green-300">
                    ${(results.additionalRevenue * 12).toLocaleString()}
                  </div>
                </div>
                <Button variant="secondary" size="lg" className="w-full">
                  Get Your Free Marketing Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            * Results are projections based on average improvements across our client portfolio. 
            Actual results may vary depending on industry, competition, and implementation. 
            Get a personalized audit for more accurate projections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstantCalculator;