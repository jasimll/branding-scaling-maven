
import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Jasim Jaleel</h2>
            <p className="text-sm text-muted-foreground">Performance Marketing Expert</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://instagram.com/jasim_jaleel._" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a 
              href="https://facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            
            <a 
              href="https://twitter.com/JasimKK971459" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Jasim Jaleel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
