import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToArticles = () => {
    const articlesSection = document.getElementById('featured-articles');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mt-8 sm:mt-10">
            Share Your Ideas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-coral-hover">
              with the World
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-body px-2 sm:px-0">
            Join thousands of writers and readers on BlogSphere, where stories come to life and ideas find their audience.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 sm:pt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToArticles}
              className="group w-full sm:w-auto"
            >
              Start Reading
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto"
            >
              Write Your Story
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold font-heading">10K+</div>
              <div className="text-gray-300 font-heading text-sm">Active Writers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold font-heading">50K+</div>
              <div className="text-gray-300 font-heading text-sm">Published Articles</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold font-heading">1M+</div>
              <div className="text-gray-300 font-heading text-sm">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;