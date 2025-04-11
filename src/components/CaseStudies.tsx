
import React from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const caseStudies = [
  {
    client: "Dahab Miners",
    objective: "Launch ads for crypto machines in UAE",
    strategy: "Google Ads, Meta Ads, market testing in UAE, then expanded to Germany and Ireland",
    results: "220% ROI, scaled from 3 leads/day to 30+",
    metrics: [
      { label: "ROI", value: "220%" },
      { label: "Daily Leads", value: "30+" },
      { label: "Markets", value: "3" }
    ]
  },
  {
    client: "Neo Front Furniture",
    objective: "Increase online marketplace presence and sales",
    strategy: "Amazon and Noon listing optimization, SEO improvements, targeted ads",
    results: "80% increase in online sales, improved brand visibility",
    metrics: [
      { label: "Sales Increase", value: "80%" },
      { label: "Marketplace Ranking", value: "Top 10" },
      { label: "New Markets", value: "2" }
    ]
  },
  {
    client: "MPD Services",
    objective: "Revolutionize marketing strategy through social media",
    strategy: "Meta Ads campaign with advanced audience targeting and creative optimization",
    results: "Significant revenue growth and expanded brand awareness",
    metrics: [
      { label: "Engagement", value: "65%" },
      { label: "ROAS", value: "3.2x" },
      { label: "Conversion Rate", value: "4.7%" }
    ]
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Case Studies</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients through strategic performance marketing
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-lg overflow-hidden border border-secondary hover:border-primary transition-all duration-300"
            >
              <div className="h-3 bg-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{study.client}</h3>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Objective:</p>
                  <p className="mb-3">{study.objective}</p>
                  
                  <p className="text-sm text-muted-foreground mb-1">Strategy:</p>
                  <p className="mb-3">{study.strategy}</p>
                  
                  <p className="text-sm text-muted-foreground mb-1">Results:</p>
                  <p className="text-primary font-medium">{study.results}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-accent rounded p-2 text-center">
                      <p className="text-lg font-bold">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
