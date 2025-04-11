
import React from 'react';
import { Quote } from 'lucide-react';

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

// Generate 30 company names for the logos
const clientLogos = [
  'Neo Front Furniture', 
  'Viralmafia', 
  'MPD Services', 
  'Dahab Miners',
  'TechVerse',
  'GlobalReach',
  'Innovate Hub',
  'Digital Dynamics',
  'FutureTech',
  'Vibrant Media',
  'MarketPro',
  'EcoSmart',
  'PrimeStyle',
  'ConnectWave',
  'BrightPath',
  'Skyline Solutions',
  'OmniTrade',
  'Pinnacle Partners',
  'Elite Edge',
  'Quantum Leap',
  'Zenith Group',
  'Spectrum Brands',
  'Apex Global',
  'Fusion Tech',
  'Catalyst Corp',
  'Nexus Network',
  'Harmony Health',
  'Velocity Ventures',
  'Summit Systems',
  'Infinite Solutions'
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
