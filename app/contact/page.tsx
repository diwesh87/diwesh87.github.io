"use client";

import { Phone, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import profileData from '@/content/profile.json';


export default function ContactPage() {
  const handleBookCall = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Book Call - Contact Page',
        value: 1
      });
    }
    
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/diweshsaxena/30min';
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Get In Touch</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to discuss your technology challenges? Let's explore how we can work together 
              to achieve your goals.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-surface p-8 rounded-lg border border-border">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Schedule a Call</h3>
                        <p className="text-muted-foreground mb-3">
                          Book a discovery call to discuss your project and explore how we can work together.
                        </p>
                        <Button
                          onClick={handleBookCall}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Book Discovery Call
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground mb-2">
                          For detailed inquiries or project proposals.
                        </p>
                        <a 
                          href={`mailto:${profileData.email}`}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          {profileData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                        <p className="text-muted-foreground mb-2">
                          Connect with me on LinkedIn for professional updates and insights.
                        </p>
                        <a 
                          href={profileData.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                        >
                          Connect on LinkedIn
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="space-y-8">
                <div className="bg-surface p-8 rounded-lg border border-border">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">How I Can Help</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Fractional CTO Services</h3>
                      <p className="text-muted-foreground text-sm">
                        Strategic technology leadership for startups and growing companies without the full-time commitment.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">AI Platform Architecture</h3>
                      <p className="text-muted-foreground text-sm">
                        Design and implement scalable AI platforms that deliver measurable business outcomes.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Cloud Infrastructure</h3>
                      <p className="text-muted-foreground text-sm">
                        Scalable, secure, and cost-effective cloud architecture design and implementation.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Technology Consulting</h3>
                      <p className="text-muted-foreground text-sm">
                        Strategic guidance on technology decisions, team building, and platform optimization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-3">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-4">
                    The best way to explore working together is through a discovery call. 
                    We'll discuss your challenges and see how I can help.
                  </p>
                  <Button
                    onClick={handleBookCall}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Your Discovery Call
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
