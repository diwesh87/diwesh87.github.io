"use client";

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container-width py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
              <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sorry, we couldn't find the page you're looking for. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-border hover:bg-surface"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            <div className="mt-12 p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Looking for something specific?</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Link href="/work" className="text-primary hover:text-primary/80 transition-colors">
                  Case Studies
                </Link>
                <Link href="/services" className="text-primary hover:text-primary/80 transition-colors">
                  Services
                </Link>
                <Link href="/skills" className="text-primary hover:text-primary/80 transition-colors">
                  Skills
                </Link>
                <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
