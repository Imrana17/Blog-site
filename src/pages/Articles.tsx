import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { getAllArticles } from '@/data/articles';

const Articles = () => {
  const allArticles = getAllArticles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(allArticles.map(article => article.category)))];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              All Articles
            </h1>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Explore our complete collection of articles, tutorials, and insights
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-surface border-border focus:border-coral"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 text-foreground-secondary">
                <Filter className="w-4 h-4" />
                <span className="font-heading font-medium">Categories:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  <Badge 
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer hover:scale-105 ${
                      selectedCategory === category 
                        ? 'bg-coral text-white hover:bg-coral-hover' 
                        : 'hover:border-coral hover:text-coral'
                    }`}
                  >
                    {category}
                  </Badge>
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-foreground-muted font-heading">
              Showing {filteredArticles.length} of {allArticles.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-foreground-muted" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-foreground-secondary mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;