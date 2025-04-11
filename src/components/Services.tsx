
import React from 'react';
import { 
  BadgePercent, 
  ShoppingBag, 
  BarChart3, 
  Store, 
  Search, 
  ShoppingCart, 
  Target
} from 'lucide-react';

const services = [
  {
    title: 'Google Ads Management',
    description: 'Strategic PPC campaigns that drive targeted traffic and maximize ROI through data-driven optimization.',
    icon: Target
  },
  {
    title: 'Meta (Facebook & Instagram) Ads',
    description: 'Engaging social media advertising campaigns that build brand awareness and generate qualified leads.',
    icon: BadgePercent
  },
  {
    title: 'E-commerce Growth Strategy',
    description: 'Comprehensive plans to scale your online store with conversion-focused marketing techniques.',
    icon: BarChart3
  },
  {
    title: 'Shopify Development',
    description: 'Custom Shopify store development for optimized user experience and higher conversion rates.',
    icon: Store
  },
  {
    title: 'SEO Optimization',
    description: 'Technical and content SEO strategies to improve organic rankings and drive sustainable traffic.',
    icon: Search
  },
  {
    title: 'Amazon & Noon Product Listings',
    description: 'Optimized marketplace listings that improve visibility and drive sales on Amazon and Noon.',
    icon: ShoppingBag
  },
  {
    title: 'Amazon Ads Strategy',
    description: 'Targeted Amazon advertising that positions your products in front of ready-to-buy customers.',
    icon: ShoppingCart
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What I Do</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized services designed to drive growth and maximize your marketing ROI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-secondary border border-secondary rounded-lg p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 p-3 bg-accent inline-block rounded-lg">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
