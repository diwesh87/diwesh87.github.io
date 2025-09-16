"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import profileData from "@/content/profile.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function FinalCTA() {
  const handlePrimaryCTA = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Book Call - Final CTA',
        value: 1
      });
    }
    
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/diweshsaxena/30min';
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailCTA = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Email - Final CTA',
        value: 1
      });
    }
    
    window.location.href = '/contact';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-indigo-500/5">
      <div className="container-width section-padding">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="font-sora font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground mb-6"
          >
            Ready to Transform Your <span className="gradient-text">Technology Strategy?</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how I can help you achieve measurable outcomes with your technology initiatives. 
            From AI strategy to platform architecture, I'm here to turn your challenges into competitive advantages.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Free Discovery Call</h3>
                <p className="text-sm text-muted-foreground">
                  30-minute consultation to understand your challenges and explore solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">No Obligation</h3>
                <p className="text-sm text-muted-foreground">
                  Honest assessment of your needs with clear recommendations and next steps
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Start</h3>
                <p className="text-sm text-muted-foreground">
                  Begin with a focused 90-day roadmap to address your most critical challenges
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              onClick={handlePrimaryCTA}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg font-semibold shadow-soft hover:shadow-soft-lg transition-all duration-200"
            >
              <Phone className="w-6 h-6 mr-3" />
              Book Your Free Discovery Call
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            
            <Button
              onClick={handleEmailCTA}
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-semibold border-2 hover:bg-primary/5"
            >
              <Mail className="w-6 h-6 mr-3" />
              Send Email
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Prefer to connect on LinkedIn? 
              <a 
                href={profileData.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 ml-1 font-medium"
              >
                Let's connect
              </a>
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Confidential consultation</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>No sales pressure</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
