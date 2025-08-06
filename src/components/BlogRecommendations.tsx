import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, TrendingUp } from "lucide-react";

const BlogRecommendations = () => {
  const articles = [
    {
      title: "Complete Guide to Digital Marketing ROI: How to Measure What Matters",
      excerpt: "Learn the essential metrics and KPIs that actually drive business growth, plus actionable strategies to improve your marketing ROI.",
      category: "Strategy",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      title: "B2B Lead Generation: 15 Proven Tactics That Actually Work in 2024",
      excerpt: "Discover the most effective lead generation strategies used by top-performing companies to consistently attract high-quality prospects.",
      category: "Lead Generation", 
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      title: "Content Marketing Trends: What's Working Now & What's Not",
      excerpt: "Stay ahead of the curve with our comprehensive analysis of current content marketing trends and future predictions.",
      category: "Content Marketing",
      readTime: "6 min read", 
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      title: "Local SEO Checklist: 25 Steps to Dominate Local Search Results",
      excerpt: "A complete step-by-step guide to optimizing your business for local search and outranking your competitors.",
      category: "SEO",
      readTime: "15 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-brand-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Marketing Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Latest Marketing Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with actionable marketing strategies, industry trends, and expert insights 
            from our team of digital marketing professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <Card className="lg:col-span-2 card-hover border-0 shadow-soft bg-white overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-brand-gradient-light flex items-center justify-center">
                  <div className="text-6xl opacity-20">📊</div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <Badge variant="secondary" className="mb-4">
                  {articles[0].category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {articles[0].readTime}
                  </div>
                  <Button variant="brand" className="group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft bg-white overflow-hidden">
              <div className="h-48 bg-brand-gradient-light flex items-center justify-center">
                <div className="text-4xl opacity-20">
                  {article.category === "Lead Generation" ? "🎯" : 
                   article.category === "Content Marketing" ? "✍️" : "🔍"}
                </div>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {article.category}
                </Badge>
                <h3 className="text-xl font-bold leading-tight mb-3">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                  <Button variant="ghost" size="sm" className="group p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-12 text-center shadow-soft">
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Want More Marketing Insights?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter and get the latest marketing strategies, 
            case studies, and industry insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="brand" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogRecommendations;