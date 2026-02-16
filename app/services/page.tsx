import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import skillsData from '@/content/skills.json';
import { getBreadcrumbStructuredData } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services - Diwesh Saxena',
  description: 'Comprehensive CTO and AI Platform Architecture services including fractional CTO, AI product strategy, platform architecture, and web & mobile app development.',
  openGraph: {
    title: 'Services - Diwesh Saxena',
    description: 'Comprehensive CTO and AI Platform Architecture services including fractional CTO, AI product strategy, platform architecture, and web & mobile app development.',
    type: 'website',
    url: '/services',
  },
};

export default function ServicesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Generate Service schema for each core service
  const servicesSchema = skillsData.core.map(service => ({
    "@type": "Service",
    "name": service.name,
    "description": service.oneLiner,
    "provider": {
      "@type": "Person",
      "name": "Diwesh Saxena",
      "jobTitle": "CTO & AI Platform Architect"
    },
    "serviceType": service.name,
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.outcomes.map((outcome, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": outcome
        }
      }))
    }
  }));

  const breadcrumbs = getBreadcrumbStructuredData([
    { name: 'Home', url: baseUrl },
    { name: 'Services', url: `${baseUrl}/services` }
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
      
      {/* Services Schema */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": servicesSchema.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": service
            }))
          })
        }}
      />
      
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Services</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Comprehensive CTO and AI Platform Architecture services including web & mobile app development to help you build, scale, and optimize your technology infrastructure.
            </p>
            
            {/* Skills Keywords */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillsData.keywords.map((keyword) => (
                <Badge key={keyword} className="bg-primary/10 text-primary border-primary/20">
                  {keyword}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-12">
              Building outcomes, not artifacts. I focus on small, end-to-end loops—<strong>ingest → infer → evaluate → iterate</strong>—with guardrails and observability from day one.
            </p>

            {/* Core Services */}
            <div className="space-y-8 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Core Services</h2>
              {skillsData.core.map((service) => (
                <Card key={service.name} className="border-border/50 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <h3 className="text-2xl font-semibold text-foreground">{service.name}</h3>
                    <p className="text-muted-foreground text-lg">{service.oneLiner}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Outcomes:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {service.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tools & Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Supporting Skills */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Supporting Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skillsData.supporting).map(([category, skills]) => (
                  <Card key={category}>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
