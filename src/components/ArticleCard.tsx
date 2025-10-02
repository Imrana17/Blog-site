import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  return (
    <article className={`group cursor-pointer ${featured ? 'space-y-6' : 'space-y-4'}`}>
      <Link to={`/article/${article.id}`}>
        <div className={`relative overflow-hidden rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 ${
          featured ? 'aspect-[16/10]' : 'aspect-[16/9]'
        }`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-coral-light text-coral border-none font-medium">
            {article.category}
          </Badge>
          {article.readTime && (
            <span className="text-xs text-foreground-muted font-heading">
              {article.readTime} read
            </span>
          )}
        </div>

        <Link to={`/article/${article.id}`}>
          <h3 className={`font-heading font-semibold leading-tight text-foreground group-hover:text-coral transition-colors ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>
        </Link>

        <p className="text-foreground-secondary leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center space-x-4 text-sm text-foreground-muted">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span className="font-heading">{article.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
        </div>

        <Link 
          to={`/article/${article.id}`}
          className="inline-flex items-center text-sm font-heading font-semibold text-coral hover:text-coral-hover transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;