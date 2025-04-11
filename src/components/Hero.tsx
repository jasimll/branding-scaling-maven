
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div>
              <h2 className="text-lg text-primary mb-2">Best Performance Marketer in Kerala</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Scaling Brands with <span className="text-gradient">Performance Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Jasim Jaleel — Certified Performance Marketer | Google & Meta Ads Expert
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg" className="rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Work Together
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
            </div>
            
            <Button variant="ghost" className="w-fit group mt-12" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <ArrowDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Scroll to learn more
            </Button>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl filter blur-3xl opacity-30"></div>
            <div className="relative bg-secondary rounded-2xl p-2 border border-muted animate-fade-up">
              <div className="aspect-[3/4] rounded-xl bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/efc01496-7e41-401e-9bde-f5305e089afc.png" 
                  alt="Jasim Jaleel - Performance Marketing Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
