"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import workData from "@/content/work.json";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function FeaturedWork() {
  const featuredWork = workData.filter(work => work.featured).slice(0, 3);

  const handleWorkClick = (slug: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Work',
        event_label: `Case Study - ${title}`,
        value: 1
      });
    }
  };

  const handleViewAllClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Navigation',
        event_label: 'View All Work',
        value: 1
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Outcomes over algorithms. Here's how I've helped teams ship measurable results.
            </p>
          </motion.div>

          {/* Work Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredWork.map((work, index) => (
              <motion.div
                key={work.slug}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-2 border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft-lg overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-surface">
                    <Image
                      src={work.images[0] || `https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <Badge 
                      className="absolute top-4 left-4 bg-background/90 text-foreground border"
                    >
                      {work.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {work.client_or_org}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {work.period}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold leading-tight line-clamp-2">
                      {work.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 line-clamp-3">
                      {work.summary}
                    </CardDescription>

                    {/* Hero Metric */}
                    <div className="bg-gradient-surface rounded-xl p-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">
                          {work.heroMetric}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Key Achievement
                        </div>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-2 mb-4">
                      {work.outcomes.slice(0, 2).map((outcome, idx) => {
                        if (typeof outcome === 'string') {
                          return (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                              {outcome}
                            </div>
                          );
                        } else {
                          return (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                              <span className="font-semibold text-foreground">{outcome.metric}</span>
                              <span className="ml-1">{outcome.description}</span>
                            </div>
                          );
                        }
                      })}
                    </div>

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {work.stack.slice(0, 3).map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {work.stack.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{work.stack.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* CTA */}
                    <Link 
                      href={`/work/${work.slug}`}
                      onClick={() => handleWorkClick(work.slug, work.title)}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link href="/work" onClick={handleViewAllClick}>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                View All Case Studies
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}