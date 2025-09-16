import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import skillsData from '@/content/skills.json';

export const metadata: Metadata = {
  title: 'About - Diwesh Saxena',
  description: 'Learn about Diwesh Saxena\'s journey as a CTO and AI Platform Architect with 16+ years of experience across HRTech, healthcare, IoT, and public sector.',
  openGraph: {
    title: 'About - Diwesh Saxena',
    description: 'Learn about Diwesh Saxena\'s journey as a CTO and AI Platform Architect with 16+ years of experience across HRTech, healthcare, IoT, and public sector.',
    type: 'website',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">About</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                I'm Diwesh Saxena, a CTO and AI Platform Architect with over 16 years of experience 
                turning ideas into measurable outcomes across HRTech, healthcare, IoT, and public sector.
              </p>

              <div className="bg-surface p-8 rounded-lg border border-border mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">My Journey</h2>
                <p className="text-muted-foreground mb-4">
                  Starting as a software engineer, I've evolved into a technology leader who specializes 
                  in building scalable platforms and AI-augmented workflows. My experience spans from 
                  early-stage startups to large enterprise environments.
                </p>
                <p className="text-muted-foreground">
                  I've had the privilege of working across diverse industries, each bringing unique 
                  challenges and opportunities for innovation. This cross-industry experience has 
                  shaped my approach to technology leadership and platform architecture.
                </p>
              </div>

              <div className="bg-surface p-8 rounded-lg border border-border mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Core Expertise</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technology Leadership</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Strategic technology planning</li>
                      <li>• Team building and mentoring</li>
                      <li>• Cross-functional collaboration</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Platform Architecture</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Scalable system design</li>
                      <li>• Cloud infrastructure</li>
                      <li>• Microservices architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">AI & Machine Learning</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• AI platform development</li>
                      <li>• ML model deployment</li>
                      <li>• Data pipeline architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Industry Experience</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• HRTech platforms</li>
                      <li>• Healthcare technology</li>
                      <li>• IoT solutions</li>
                      <li>• Public sector systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Beyond Technology</h2>
                <p className="text-muted-foreground mb-4">
                  When I'm not architecting platforms or leading technology teams, I enjoy writing 
                  about technology, sharing knowledge through talks and workshops, and exploring 
                  the intersection of technology and human potential.
                </p>
                <p className="text-muted-foreground">
                  I believe in the power of technology to solve real-world problems and create 
                  meaningful impact. My goal is to help organizations leverage technology not 
                  just as a tool, but as a strategic advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
