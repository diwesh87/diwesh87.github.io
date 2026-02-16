import { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Callout } from '@/components/mdx/Callout';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/work';
import { getBreadcrumbStructuredData } from '@/lib/seo';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} - Diwesh Saxena`,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      type: 'article',
      url: `/work/${study.slug}`,
    },
  };
}

const mdxComponents = {
  Callout,
};

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const articleUrl = `${baseUrl}/work/${study.slug}`;

  // Article schema for case study
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "description": study.summary,
    "author": {
      "@type": "Person",
      "name": "Diwesh Saxena",
      "jobTitle": "CTO & AI Platform Architect"
    },
    "publisher": {
      "@type": "Person",
      "name": "Diwesh Saxena"
    },
    "datePublished": study.timeframe,
    "about": study.stack.map(tech => ({
      "@type": "Thing",
      "name": tech
    })),
    "keywords": study.stack.join(", ")
  };

  const breadcrumbs = getBreadcrumbStructuredData([
    { name: 'Home', url: baseUrl },
    { name: 'Work', url: `${baseUrl}/work` },
    { name: study.title, url: articleUrl }
  ]);

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs)
        }}
      />
      
      {/* Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="text-sm text-primary font-medium mb-4">{study.heroMetric}</div>
              <h1 className="text-4xl font-bold text-foreground mb-6">{study.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>{study.role}</span>
                <span>•</span>
                <span>{study.organization}</span>
                <span>•</span>
                <span>{study.timeframe}</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8">{study.summary}</p>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-foreground mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span key={tech} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Key Outcomes */}
              <div className="bg-surface p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Outcomes</h3>
                <ul className="space-y-2">
                  {study.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none">
              {study.content && (
                <MDXRemote source={study.content} components={mdxComponents} />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
