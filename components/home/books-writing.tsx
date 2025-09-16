"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import booksData from "@/content/books.json";

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

export default function BooksWriting() {
  const handleBookClick = (bookTitle: string) => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Book',
        event_label: bookTitle,
        value: 1
      });
    }
  };

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
            Published Works & <span className="gradient-text">Thought Leadership</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Sharing insights on AI, platform architecture, and technical leadership through books and articles.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {booksData.map((book, index) => (
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
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {book.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {book.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {book.blurb}
                  </p>
                  
                  <div className="mb-4">
                    <div className="w-full h-32 bg-surface-50 rounded-lg flex items-center justify-center border border-border/50">
                      <span className="text-xs text-muted-foreground">Cover placeholder</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleBookClick(book.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    Read {book.type}
                    <ExternalLink className="w-4 h-4 ml-2" />
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
          <p className="text-sm text-muted-foreground mb-4">
            Want to discuss any of these topics or need guidance on similar challenges?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 border-2 hover:bg-primary/5"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Book Call - Books',
                  value: 1
                });
              }
              const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/diweshsaxena/30min';
              window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Discussion
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
