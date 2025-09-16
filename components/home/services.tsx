"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import servicesData from "@/content/services.json";

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

export default function Services() {
  const router = useRouter();

  const handleServiceClick = (serviceId: string) => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Service',
        event_label: serviceId,
        value: 1
      });
    }
    // Navigate to services page
    router.push('/services');
  };

  return (
    <section className="py-24 bg-surface-50/50">
      <div className="container-width section-padding">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="font-sora font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground mb-6"
          >
            Services That Drive <span className="gradient-text">Measurable Outcomes</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            From fractional CTO leadership to AI product strategy, I help companies turn technical challenges into competitive advantages.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft glass-effect">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary mb-3">
                    {service.outcome}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Process:</h4>
                    <div className="space-y-1">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Deliverables:</h4>
                    <div className="space-y-1">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleServiceClick(service.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Book Call - Services',
                  value: 1
                });
              }
              const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/diweshsaxena/30min';
              window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            <Users className="w-5 h-5 mr-2" />
            Book a Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
