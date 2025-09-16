"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Globe, Briefcase, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileData from "@/content/profile.json";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export default function Hero() {
  const handlePrimaryCTA = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Book Call - Hero Primary',
        value: 1
      });
    }
    
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/diweshsaxena/30min';
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSecondaryCTA = () => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'View Work - Hero Secondary',
        value: 1
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface-50/50 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-surface rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative container-width section-padding pt-24 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Diwesh Saxena"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-sora font-bold text-4xl lg:text-6xl xl:text-7xl leading-tight text-foreground mb-6"
          >
            {profileData.heroHeadline.split(' ').map((word, index) => {
              if (word === 'CTO' || word === 'AI' || word === 'Platform' || word === 'Architect') {
                return (
                  <span key={index} className="gradient-text">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={index}>{word}{' '}</span>;
            })}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            {profileData.heroSubheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handlePrimaryCTA}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base font-semibold shadow-soft hover:shadow-soft-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              {profileData.cta.primary}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={handleSecondaryCTA}
              variant="outline"
              size="lg"
              asChild
              className="h-12 px-8 text-base font-semibold border-2 hover:bg-primary/5"
            >
              <a href="/work">
                {profileData.cta.secondary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          {/* Proof Strip */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-semibold">{profileData.proof.years}</span> Years Experience
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-semibold">{profileData.proof.countries}</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-semibold">{profileData.proof.sectors}</span>
              </span>
            </div>
          </motion.div>

          {/* Metrics Pills */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {profileData.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl glass-effect border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Keywords */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex flex-wrap justify-center gap-2">
              {profileData.keywords.map((keyword, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-3 py-1 text-xs font-medium bg-surface-50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}