import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Skills & Expertise - Diwesh Saxena',
  description: 'Comprehensive skills and expertise in Fractional CTO, AI Product Strategy, Platform Architecture, Cloud & DevOps, Compliance & VAPT, and Team Coaching.',
  openGraph: {
    title: 'Skills & Expertise - Diwesh Saxena',
    description: 'Comprehensive skills and expertise in Fractional CTO, AI Product Strategy, Platform Architecture, Cloud & DevOps, Compliance & VAPT, and Team Coaching.',
    type: 'website',
    url: '/skills',
  },
};

const mdxComponents = {
  Badge,
  Card,
  CardHeader,
  CardContent,
};

export default function SkillsPage() {
  const skillsMdxPath = path.join(process.cwd(), 'content', 'sections', 'skills.mdx');
  const skillsContent = fs.readFileSync(skillsMdxPath, 'utf8');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={skillsContent} components={mdxComponents} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
