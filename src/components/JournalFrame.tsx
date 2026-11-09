'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import PhotoCreditsModal from './PhotoCreditsModal';

const legacyChapters: Record<string, string> = {
  '#story': '/story',
  '#autobiography': '/story#autobiography',
  '#expeditions': '/expeditions',
  '#sports': '/sports',
  '#usa': '/usa',
  '#publications': '/publications',
  '#contact': '/contact',
};

export default function JournalFrame({ children }: { children: React.ReactNode }) {
  const [showCredits, setShowCredits] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== '/') return;
    const chapter = legacyChapters[window.location.hash];
    if (chapter) router.replace(chapter);
  }, [pathname, router]);

  return (
    <>
      <Navbar key={pathname} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer onOpenCredits={() => setShowCredits(true)} />
      {showCredits && <PhotoCreditsModal onClose={() => setShowCredits(false)} />}
    </>
  );
}
