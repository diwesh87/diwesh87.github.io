import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getAllCaseStudies } from '@/lib/work';

export const metadata: Metadata = {
  title: 'Case Studies - Diwesh Saxena',
  description: 'Explore detailed case studies of successful projects and outcomes achieved across HRTech, healthcare, IoT, and public sector.',
  openGraph: {
    title: 'Case Studies - Diwesh Saxena',
    description: 'Explore detailed case studies of successful projects and outcomes achieved across HRTech, healthcare, IoT, and public sector.',
    type: 'website',
    url: '/work',
  },
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6">Case Studies</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real projects, measurable outcomes. Explore how I've helped organizations 
                achieve their technology goals across HRTech, healthcare, IoT, and public sector.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.slug} className="bg-surface p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                  <div className="mb-4">
                    <div className="text-sm text-primary font-medium mb-2">{study.heroMetric}</div>
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3">
                      {study.role} • {study.organization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.timeframe}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {study.summary}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {study.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {study.stack.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{study.stack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Outcomes:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {study.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link href={`/work/${study.slug}`}>
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            
            {caseStudies.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-surface p-8 rounded-lg border border-border max-w-md mx-auto">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Case Studies Coming Soon</h2>
                  <p className="text-muted-foreground mb-6">
                    Detailed case studies are being prepared. In the meantime, you can explore the featured work on the homepage.
                  </p>
                  <Button asChild>
                    <Link href="/">
                      View Homepage
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
