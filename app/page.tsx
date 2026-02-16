import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/home/hero';
import FeaturedWork from '@/components/home/featured-work';
import Skills from '@/components/home/skills';
import Services from '@/components/home/services';
import BooksWriting from '@/components/home/books-writing';
import ResearchTalks from '@/components/home/research-talks';
import Testimonials from '@/components/home/testimonials';
import FinalCTA from '@/components/home/final-cta';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import researchData from '@/content/research.json';
import booksData from '@/content/books.json';
import { getComprehensiveKeywords } from '@/lib/seo';

const comprehensiveKeywords = getComprehensiveKeywords();

export const metadata: Metadata = {
  title: 'Diwesh Saxena - CTO & AI Platform Architect',
  description: 'CTO & AI Platform Architect turning ideas into measurable outcomes. 16+ years shipping scalable platforms and AI-augmented workflows across HRTech, healthcare, IoT, and public sector.',
  keywords: comprehensiveKeywords,
  openGraph: {
    title: 'Diwesh Saxena - CTO & AI Platform Architect',
    description: 'CTO & AI Platform Architect turning ideas into measurable outcomes. 16+ years of experience across HRTech, healthcare, IoT, and public sector.',
    type: 'website',
    url: '/',
  },
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Generate Article schema for research papers
  const researchArticles = researchData
    .filter(paper => paper.url)
    .map(paper => ({
      "@type": "ScholarlyArticle",
      "headline": paper.title,
      "description": paper.abstract,
      "url": paper.url,
      "author": {
        "@type": "Person",
        "name": "Diwesh Saxena"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zenodo"
      }
    }));

  // Generate Book schema
  const booksSchema = booksData.map(book => ({
    "@type": "Book",
    "name": book.title,
    "description": book.blurb,
    "bookFormat": book.type === "Fiction" ? "https://schema.org/EBook" : "https://schema.org/EBook",
    "author": {
      "@type": "Person",
      "name": "Diwesh Saxena"
    },
    "offers": {
      "@type": "Offer",
      "url": book.amazonUrl,
      "availability": "https://schema.org/InStock"
    }
  }));

  return (
    <>
      {/* Research Papers Structured Data */}
      {researchArticles.length > 0 && (
        <Script
          id="research-articles-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": researchArticles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": article
              }))
            })
          }}
        />
      )}

      {/* Books Structured Data */}
      {booksSchema.length > 0 && (
        <Script
          id="books-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": booksSchema.map((book, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": book
              }))
            })
          }}
        />
      )}

      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <FeaturedWork />
        <Skills />
        <Services />
        <BooksWriting />
        <ResearchTalks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}