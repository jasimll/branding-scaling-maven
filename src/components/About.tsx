
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Who Am I?</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              Jasim Jaleel is a leading performance marketing expert based in Kerala with over 6 years of experience in PPC, CRO, and data-driven advertising. He has successfully managed high-ROI campaigns across various industries including e-commerce, retail, healthcare, education, textiles, and crypto. 
            </p>
            
            <p className="text-lg mb-6">
              As a performance marketing trainer, Jasim has trained 100+ students and business owners on effective digital marketing strategies. Leveraging AI-powered bidding, advanced audience segmentation, and multi-channel attribution, he helps businesses scale profitably.
            </p>
            
            <p className="text-lg mb-6">
              Jasim works with clients from India, UAE, Germany, Qatar, Saudi Arabia, and the USA. He holds 15+ certifications in Google Ads, Meta Ads, HubSpot, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-secondary rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-primary">6+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-sm">Clients Worldwide</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-sm">Certifications</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-sm">Trained Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
