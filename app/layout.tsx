import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Diwesh Saxena - CTO & AI Platform Architect',
  description: '16+ years building scalable platforms and AI-augmented workflows across HRTech, healthcare, IoT, and public sector.',
  keywords: 'CTO, AI Platform Architect, Fractional CTO, AI Product Strategy, Cloud Architecture, Tech Leadership',
  authors: [{ name: 'Diwesh Saxena' }],
  creator: 'Diwesh Saxena',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Diwesh Saxena',
    title: 'Diwesh Saxena - CTO & AI Platform Architect',
    description: '16+ years building scalable platforms and AI-augmented workflows across HRTech, healthcare, IoT, and public sector.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diwesh Saxena - CTO & AI Platform Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diwesh Saxena - CTO & AI Platform Architect',
    description: '16+ years building scalable platforms and AI-augmented workflows across HRTech, healthcare, IoT, and public sector.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10B9AE" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Diwesh Saxena",
              "jobTitle": "CTO & AI Platform Architect",
              "knowsAbout": [
                "Fractional CTO",
                "AI Product Strategy",
                "Platform Architecture",
                "Cloud & DevOps",
                "Compliance & VAPT",
                "Team Coaching"
              ],
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              "sameAs": ["https://www.linkedin.com/in/diweshsaxena/"]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}