import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#07080A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Jakub Ondreas • Personal Website & Digital Autobiography',
  description:
    'Personal digital home and evolving autobiography of Jakub Ondreas (Jakub Ondreáš) — Mont Blanc ski ascent at 14, Tour du Mont Blanc 160-km traverse, Slovak club athletics with AO TJ Slávia STU Bratislava, published alpine journalism, and Rotary Youth Exchange in the United States.',
  keywords: [
    'Jakub Ondreas',
    'Jakub Ondreáš',
    'Mont Blanc ski mountaineering',
    'Tour du Mont Blanc',
    'Rotary Youth Exchange',
    'AO TJ Slávia STU Bratislava',
    'Tulení pásy',
    'Slovak Alpinism',
    'Žiarska dolina',
    'Western Tatras',
  ],
  authors: [{ name: 'Jakub Ondreas' }],
  creator: 'Jakub Ondreas',
  openGraph: {
    title: 'Jakub Ondreas • Personal Website & Digital Autobiography',
    description:
      'Exploring the world. Challenging limits. Creating my own path. The digital home of Slovak alpinist and student Jakub Ondreas.',
    url: 'https://jakubondreas.com',
    siteName: 'Jakub Ondreas Autobiography',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'High Alpine Mountain Massif - Jakub Ondreas Autobiography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Ondreas • Digital Autobiography',
    description:
      'Exploring the world. Challenging limits. Creating my own path. Personal digital autobiography of Jakub Ondreas.',
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1200&h=630'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-carbon-950">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen bg-carbon-950 text-[#E5E7EB] antialiased selection:bg-alpine-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
