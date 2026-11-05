import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jakub Ondreas • Personal Website & Digital Autobiography',
  description:
    'Personal digital home of Jakub Ondreas (Jakub Ondreáš) — Mont Blanc ski ascent at 14, Tour du Mont Blanc 160-km traverse, Slovak club athletics with AO TJ Slávia STU Bratislava, published alpine journalism, and Rotary Youth Exchange in the USA.',
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
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Chamonix-Mont-Blanc.jpg',
        width: 1200,
        height: 630,
        alt: 'Chamonix and Mont Blanc Massif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Ondreas • Digital Autobiography',
    description:
      'Exploring the world. Challenging limits. Creating my own path. Personal digital autobiography of Jakub Ondreas.',
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#0E1216] text-[#E6EBE7] antialiased selection:bg-[#4D6B51] selection:text-white">
        {children}
      </body>
    </html>
  );
}
