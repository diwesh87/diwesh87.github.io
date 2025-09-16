"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import profileData from "@/content/profile.json";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookCall = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Book Call - Footer',
        value: 1
      });
    }
    
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/diweshsaxena/30min';
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Email - Footer',
        value: 1
      });
    }
    
    window.location.href = '/contact';
  };

  const handleLinkedInClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Social',
        event_label: 'LinkedIn - Footer',
        value: 1
      });
    }
  };

  return (
    <footer className="bg-surface-50/50 border-t border-border/50">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DS</span>
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-foreground text-lg">
                    {profileData.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {profileData.title}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                {profileData.summary}
              </p>
              <Button
                onClick={handleBookCall}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Discovery Call
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a
                  href="/contact"
                  onClick={handleEmailClick}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Form</span>
                </a>
                <a
                  href={profileData.social.linkedin}
                  onClick={handleLinkedInClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>📍</span>
                  <span>{profileData.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}