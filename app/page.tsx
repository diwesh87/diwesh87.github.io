import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Diwesh Saxena - CTO & AI Platform Architect',
  description: 'CTO & AI Platform Architect turning ideas into measurable outcomes. 16+ years shipping scalable platforms and AI-augmented workflows across HRTech, healthcare, IoT, and public sector.',
  keywords: 'CTO, AI Platform Architect, Fractional CTO, AI Product Strategy, Platform Architecture, Cloud Architecture, Tech Leadership, HRTech, Healthcare Tech, IoT',
  openGraph: {
    title: 'Diwesh Saxena - CTO & AI Platform Architect',
    description: 'CTO & AI Platform Architect turning ideas into measurable outcomes. 16+ years of experience across HRTech, healthcare, IoT, and public sector.',
    type: 'website',
    url: '/',
  },
};

export default function Home() {
  return (
    <>
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