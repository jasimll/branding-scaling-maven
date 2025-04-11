
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Let's Work Together</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your business with results-driven performance marketing? Let's connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  className="bg-secondary border-secondary focus:border-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  className="bg-secondary border-secondary focus:border-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input 
                  id="phone" 
                  placeholder="Your Phone" 
                  className="bg-secondary border-secondary focus:border-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  required 
                  rows={5}
                  className="bg-secondary border-secondary focus:border-primary resize-none" 
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:jasim275@gmail.com" className="hover:text-primary transition-colors">
                    jasim275@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a href="https://wa.me/7403503175" className="hover:text-primary transition-colors">
                    WhatsApp: 7403503175
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/jasim_jaleel._" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a 
                  href="https://facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                
                <a 
                  href="https://twitter.com/JasimKK971459" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
