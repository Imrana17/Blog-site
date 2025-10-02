import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-32 h-32 bg-gradient-coral rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Page Not Found</h1>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="coral" size="lg" asChild>
            <a href="/" className="inline-flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
