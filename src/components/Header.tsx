
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg border-b' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-foreground">Jasim Jaleel</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#case-studies" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            <a href="#contact" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
