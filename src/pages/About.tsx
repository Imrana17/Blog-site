import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of shared knowledge and collaborative learning.',
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Every article is curated to provide real value and actionable insights.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting writers and readers from all corners of the world.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new ideas and pushing the boundaries of digital publishing.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              About BlogSphere
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed mb-8">
              We're on a mission to democratize publishing and create a platform where every voice matters. 
              BlogSphere is more than just a blogging platform – it's a community of passionate writers and curious readers.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/articles">
                <Button variant="coral" size="lg">
                  Explore Articles
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-foreground-secondary leading-relaxed mb-6 text-lg">
                  At BlogSphere, we believe that everyone has a story worth telling and insights worth sharing. 
                  Our platform is designed to empower writers of all backgrounds to reach their audience and 
                  make a meaningful impact.
                </p>
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  We're committed to building tools that make publishing accessible, engaging, and rewarding 
                  for both writers and readers. Our goal is to foster a global community where knowledge flows 
                  freely and creativity flourishes.
                </p>
                <Button variant="coral">
                  Join Our Community
                </Button>
              </div>
              <div className="bg-surface-elevated rounded-2xl p-8 shadow-elegant">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-coral mb-2">2020</div>
                    <div className="text-foreground-muted">Founded</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">50K+</div>
                      <div className="text-sm text-foreground-muted">Articles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">10K+</div>
                      <div className="text-sm text-foreground-muted">Writers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">1M+</div>
                      <div className="text-sm text-foreground-muted">Readers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground mb-1">150+</div>
                      <div className="text-sm text-foreground-muted">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                These core principles guide everything we do at BlogSphere
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-surface p-6 rounded-xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 text-center group"
                  >
                    <div className="w-12 h-12 bg-coral-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Built by Writers, for Writers
            </h2>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-12">
              Our team consists of passionate writers, developers, and designers who understand 
              the challenges and opportunities in digital publishing. We're constantly working to 
              improve the platform based on feedback from our amazing community.
            </p>
            
            <div className="bg-gradient-coral rounded-2xl p-8 md:p-12 text-white">
              <h3 className="font-heading font-bold text-2xl mb-4">
                Ready to Share Your Story?
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Join thousands of writers who have found their voice on BlogSphere
              </p>
              <Button variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary">
                Start Writing Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;