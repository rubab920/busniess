import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const footerSections = {
    services: [
      "SEO Optimization",
      "Paid Advertising", 
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Web Development"
    ],
    quickLinks: [
      "About Us",
      "Our Process", 
      "Case Studies",
      "Blog",
      "Careers",
      "Contact"
    ],
    support: [
      "Help Center",
      "Documentation",
      "API Reference",
      "System Status",
      "Terms of Service",
      "Privacy Policy"
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR Compliance",
      "Refund Policy",
      "Disclaimer"
    ]
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Semantic Minds</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Flexible hourly marketing packages designed to grow your business. 
              Transparent pricing, expert team, and proven results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@semanticminds.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>New York, NY 10001</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="font-semibold mb-3">Send us a Message</h4>
              <div className="space-y-3 max-w-md">
                <Input 
                  type="text" 
                  placeholder="Your Name"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md resize-none text-sm"
                />
                <Button variant="brand" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerSections.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Semantic Minds. All rights reserved.
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;