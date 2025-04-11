
import React from 'react';

const skills = [
  'Google Ads',
  'Meta Ads',
  'Amazon Product Listing',
  'Shopify Development',
  'CRO'
];

const tools = [
  'Google Tag Manager',
  'Helium 10',
  'Microsoft Clarity',
  'Hotjar',
  'Meta Business Suite',
  'Google Analytics'
];

const SkillBadge = ({ name }: { name: string }) => (
  <div className="bg-secondary border border-accent px-4 py-2 rounded-full text-sm font-medium transition-all hover:border-primary hover:text-primary">
    {name}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Tools I Use</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise and technologies that power my marketing strategies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <SkillBadge key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {tools.map((tool, index) => (
                <SkillBadge key={index} name={tool} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Google Ads', 'Meta Blueprint', 'HubSpot', 'Amazon Ads'].map((cert, index) => (
              <div key={index} className="bg-secondary rounded-lg p-4 w-48 h-24 flex items-center justify-center border border-accent">
                <p className="font-medium">{cert}</p>
                <p className="text-primary text-xs">Certified</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
