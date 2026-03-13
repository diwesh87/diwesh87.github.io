"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import newsletterData from "@/content/newsletter.json";

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function NewsletterFeed() {
  // Show latest 5 entries, most recent first
  const entries = [...newsletterData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  if (entries.length === 0) return null;

  return (
    <section className="py-24 bg-background">
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
            Newsletter <span className="gradient-text">on LinkedIn</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Thoughts on tech leadership, AI, and building products—every Friday. Read the latest below or follow on LinkedIn.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {entries.map((entry, index) => (
            <motion.div
              key={`${entry.date}-${index}`}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft glass-effect">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(entry.date)}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">
                    {entry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {entry.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/30"
                    asChild
                  >
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "click", {
                            event_category: "Newsletter",
                            event_label: entry.title,
                            value: 1,
                          });
                        }
                      }}
                    >
                      Read on LinkedIn
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          New editions every Friday on LinkedIn.
        </p>
      </div>
    </section>
  );
}
