
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Jasim Jaleel - Performance Marketing Expert';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Testimonials />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
