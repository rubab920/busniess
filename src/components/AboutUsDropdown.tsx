import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn more about our mission, values, and team
          </p>
        </div>

        <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-left">Our Story & Mission</h3>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>
          
          {isOpen && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We are a full-service digital marketing agency dedicated to helping businesses 
                  grow their online presence and achieve measurable results. Founded with the 
                  vision of bridging the gap between traditional marketing and digital innovation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team combines creative expertise with data-driven strategies to deliver 
                  exceptional value to our clients. From startups to enterprise companies, 
                  we've helped hundreds of businesses transform their digital marketing efforts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">500+</h4>
                    <p className="text-sm text-blue-700">Projects Completed</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">98%</h4>
                    <p className="text-sm text-green-700">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">5 Years</h4>
                    <p className="text-sm text-purple-700">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default AboutUsDropdown;