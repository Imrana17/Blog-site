import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@blogsphere.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available 24/7 for support',
      action: 'Start Chat',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'Call Now',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'San Francisco, CA',
      action: 'Get Directions',
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
              Get in Touch
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Send us a Message
              </h2>
              <Card className="p-8 shadow-elegant">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us more about your question or feedback..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" variant="coral" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-coral-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-coral" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground-secondary mb-3">
                            {info.description}
                          </p>
                          <Button variant="ghost" size="sm" className="text-coral hover:text-coral-hover p-0">
                            {info.action} →
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-all">
                      <span className="font-heading font-medium text-foreground">
                        How do I start writing on BlogSphere?
                      </span>
                    </summary>
                    <div className="p-4 text-foreground-secondary">
                      Simply create an account and you can start writing immediately. Our editor is intuitive and supports markdown formatting.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-all">
                      <span className="font-heading font-medium text-foreground">
                        Is BlogSphere free to use?
                      </span>
                    </summary>
                    <div className="p-4 text-foreground-secondary">
                      Yes! BlogSphere is completely free for writers and readers. We offer premium features for advanced users.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-all">
                      <span className="font-heading font-medium text-foreground">
                        How can I grow my readership?
                      </span>
                    </summary>
                    <div className="p-4 text-foreground-secondary">
                      Engage with the community, use relevant tags, write consistently, and share your articles on social media.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;