import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { getFeaturedArticles } from '@/data/articles';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Articles Section */}
      <section id="featured-articles" className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Discover the latest insights, tutorials, and stories from our community of writers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredArticles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                featured={index < 2}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/articles">
              <Button variant="coral" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
