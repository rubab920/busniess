import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do your hourly packages work?",
      answer: "Our hourly packages are flexible monthly allocations that can be used for any of our services. Unused hours roll over for up to 30 days, and you can upgrade or downgrade your package anytime."
    },
    {
      question: "What's included in the strategy session?",
      answer: "Every new client receives a complimentary 60-minute strategy session where we analyze your current marketing, identify opportunities, and create a customized roadmap for growth. This includes competitor analysis, goal setting, and channel recommendations."
    },
    {
      question: "Can I change my package anytime?",
      answer: "Absolutely! You can upgrade, downgrade, or pause your package at any time. Changes take effect at the start of your next billing cycle, and we'll help you transition smoothly between packages."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to enterprises. Our Starter package is specifically designed for small businesses, and we can scale our services as your business grows."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "Our transparent hourly model means you know exactly what you're paying for. Plus, you get dedicated team members, weekly reports, and the flexibility to adjust services based on your changing needs without long-term contracts."
    },
    {
      question: "How quickly will I see results?",
      answer: "While every business is different, most clients see initial improvements in traffic and engagement within 30-60 days. More substantial results like increased conversions and revenue typically occur within 90-120 days of consistent implementation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQ's
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about our services and pricing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="pt-0 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;