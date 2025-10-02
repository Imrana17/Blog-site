import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { getArticleById } from '@/data/articles';
import { toast } from '@/hooks/use-toast';

const Article = () => {
  const { id } = useParams();
  const article = id ? getArticleById(id) : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-3xl text-foreground mb-4">
              Article Not Found
            </h1>
            <p className="text-foreground-secondary mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/articles">
              <Button variant="coral">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="pt-24">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 mb-8">
          <Link to="/articles" className="inline-flex items-center text-foreground-muted hover:text-coral transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-heading">Back to Articles</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 mb-12">
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-elegant-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Article Meta */}
                <div className="mb-8">
                  <Badge variant="secondary" className="bg-coral-light text-coral border-none font-medium mb-6">
                    {article.category}
                  </Badge>
                  
                  <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                    {article.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-foreground-muted mb-8">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-heading font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    {article.readTime && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} read</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl leading-relaxed text-foreground-secondary mb-8 font-body">
                    {article.excerpt}
                  </p>

                  <div className="space-y-6 text-foreground-secondary font-body leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <blockquote className="border-l-4 border-coral pl-6 italic text-foreground bg-coral-light/30 py-4 rounded-r-lg">
                      "The best way to predict the future is to create it yourself."
                    </blockquote>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
                      Key Takeaways
                    </h2>

                    <ul className="space-y-2 ml-6">
                      <li>• Understanding the fundamentals is crucial for long-term success</li>
                      <li>• Practice and consistency lead to mastery</li>
                      <li>• Community support accelerates learning and growth</li>
                      <li>• Staying curious and open-minded opens new opportunities</li>
                    </ul>

                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.
                    </p>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="mt-16 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm" onClick={handleShare}>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4 mr-2" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Author Bio */}
                  <div className="bg-surface p-6 rounded-lg shadow-elegant w-64">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-foreground">
                          {article.author}
                        </div>
                        <div className="text-sm text-foreground-muted">
                          Senior Writer
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      Passionate writer and thought leader with expertise in technology and innovation.
                    </p>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-coral p-6 rounded-lg text-white w-64">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Get the latest articles delivered to your inbox
                    </p>
                    <Button variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;