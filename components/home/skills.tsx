"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import skillsData from "@/content/skills.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Skills() {
  const [expandedTools, setExpandedTools] = useState<Record<string, boolean>>({});
  const [expandedSupporting, setExpandedSupporting] = useState<Record<string, boolean>>({});

  const toggleTools = (skillName: string) => {
    setExpandedTools(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  const toggleSupporting = (category: string) => {
    setExpandedSupporting(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section className="py-16 lg:py-24 bg-surface/30">
      <div className="container-width section-padding">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-sora font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Building outcomes, not artifacts. I focus on small, end-to-end loops—<strong>ingest → infer → evaluate → iterate</strong>—with guardrails and observability from day one.
            </p>
            
            {/* Skills Keywords */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillsData.keywords.map((keyword) => (
                <Badge key={keyword} className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  {keyword}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Core Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {skillsData.core.map((skill, index) => {
              const isExpanded = expandedTools[skill.name] || false;
              const toolsToShow = isExpanded ? skill.tools : skill.tools.slice(0, 3);
              const hasMore = skill.tools.length > 3;

              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft-lg">
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                      <p className="text-muted-foreground text-sm">{skill.oneLiner}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2 text-sm">Key Outcomes:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {skill.outcomes.slice(0, 2).map((outcome, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 text-sm">Tools:</h4>
                        <div className="flex flex-wrap gap-1">
                          {toolsToShow.map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                          {hasMore && (
                            <Badge 
                              variant="outline" 
                              role="button"
                              tabIndex={0}
                              className="text-xs cursor-pointer hover:bg-primary/10 hover:border-primary/30 active:bg-primary/20 transition-colors select-none"
                              onClick={() => toggleTools(skill.name)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleTools(skill.name);
                                }
                              }}
                            >
                              {isExpanded ? 'Show less' : `+${skill.tools.length - 3} more`}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Supporting Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Supporting Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(skillsData.supporting).map(([category, skills]) => {
                const isExpanded = expandedSupporting[category] || false;
                const skillsToShow = isExpanded ? skills : skills.slice(0, 3);
                const hasMore = skills.length > 3;

                return (
                  <Card key={category} className="text-center">
                    <CardHeader className="pb-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {skillsToShow.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {hasMore && (
                          <Badge 
                            variant="secondary" 
                            role="button"
                            tabIndex={0}
                            className="text-xs cursor-pointer hover:bg-primary/20 active:bg-primary/30 transition-colors select-none"
                            onClick={() => toggleSupporting(category)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleSupporting(category);
                              }
                            }}
                          >
                            {isExpanded ? 'Show less' : `+${skills.length - 3}`}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
