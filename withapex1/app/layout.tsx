import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apex Wholesale - B2B Lead Generation Platform',
  description: 'Real-time wholesale inventory access. Zero commission. Direct supplier pricing. For Shopify, Amazon, Etsy sellers.',
  openGraph: {
    title: 'Apex Wholesale - Wholesale Inventory, Zero Middleman',
    description: 'Join 3,500+ sellers getting daily wholesale inventory updates with 0% commission.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
