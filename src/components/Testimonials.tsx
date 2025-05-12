
import React from 'react';
import { Quote, School, ShoppingCart, Shirt, Heart, Sofa, Bitcoin, Utensils, Home, BarChart3, Building } from 'lucide-react';

const testimonials = [
  {
    quote: "One of the top e-commerce managers in Dubai, he expertly handled our Amazon and Noon accounts, increasing online sales by 80%.",
    author: "Katy",
    title: "CEO, Neo Front Furniture Dubai"
  },
  {
    quote: "Jasim is one of the top performance marketers in Kerala. He has managed high-profile clients with excellent results.",
    author: "Nikhil Raju",
    title: "CEO, Viralmafia"
  },
  {
    quote: "Jasim revolutionized our marketing strategy with Meta Ads in 2019. Our revenue and brand visibility skyrocketed.",
    author: "Linson Dominic",
    title: "CEO, MPD Services"
  },
  {
    quote: "Thanks to Jasim's expertise in Google and Meta ads, we scaled our crypto-mining business from UAE to Europe.",
    author: "Rizwan Kamarudheen",
    title: "CEO, Dahab Miners"
  }
];

// Complete client list
const clientLogos = [
  'Viral Mafia', 
  'City Optik', 
  'Kalyan Sarees', 
  'Kalyan Super99',
  'Horizon Motors',
  'Golf Superstore',
  'I Sports',
  'Kings Space LLC',
  'Neo Front Furniture',
  'Kannankandy',
  'MPD Services',
  'Essen Nutrition',
  'Fresco',
  'Appolos English School',
  'TIME',
  'Accounts Solutions',
  'Alhind Aviation Academy',
  'Thinklish Academy',
  'Rajakumari Gold and Diamonds',
  'Kerala Spices',
  'My OP',
  'Tron Academy',
  'Tron Digital',
  'Dahab Miners',
  'Tikka Tonight',
  'Lebanese Mill Restaurant',
  'Rashidali Cafeteria',
  'Caletal Realty',
  'Earth Craft Realty',
  'Brandflair',
  'WeSpeak Academy',
  'Flair Academy'
];

// Categories handled with icons
const categories = [
  { name: 'Education', icon: <School className="mr-2" /> },
  { name: 'E-commerce', icon: <ShoppingCart className="mr-2" /> },
  { name: 'Fashion', icon: <Shirt className="mr-2" /> },
  { name: 'Retail', icon: <ShoppingCart className="mr-2" /> },
  { name: 'Medical', icon: <Heart className="mr-2" /> },
  { name: 'Home & Interior', icon: <Sofa className="mr-2" /> },
  { name: 'Crypto & Trading', icon: <Bitcoin className="mr-2" /> },
  { name: 'Restaurant', icon: <Utensils className="mr-2" /> },
  { name: 'Real Estate', icon: <Building className="mr-2" /> },
  { name: 'Digital Services', icon: <BarChart3 className="mr-2" /> }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What My Clients Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary border border-secondary p-6 rounded-lg hover:shadow-lg hover:shadow-primary/5 transition-all hover:border-primary">
              <Quote className="h-8 w-8 text-primary/50 mb-4" />
              <p className="mb-6 italic">{`"${testimonial.quote}"`}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-3">
                  <span className="text-lg font-medium">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Categories I Handle</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-primary/10 p-4 rounded-lg hover:bg-primary/20 transition-colors flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2 text-primary">
                  {category.icon}
                </div>
                <p className="font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-8 text-center">Trusted By</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {clientLogos.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <div className="h-12 bg-muted px-6 rounded flex items-center justify-center">
                  <p className="font-medium text-sm">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
