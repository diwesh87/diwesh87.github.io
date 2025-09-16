import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Diwesh Saxena',
  description: 'Get in touch with Diwesh Saxena for CTO services, AI platform architecture, or technology consulting. Book a discovery call today.',
  openGraph: {
    title: 'Contact - Diwesh Saxena',
    description: 'Get in touch with Diwesh Saxena for CTO services, AI platform architecture, or technology consulting. Book a discovery call today.',
    type: 'website',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
