'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import FactIntegrityModal from './FactIntegrityModal';
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
  const [dialog, setDialog] = useState<'facts' | 'photos' | null>(null);
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
      <Footer onOpenCredits={() => setDialog('photos')} onOpenIntegrity={() => setDialog('facts')} />
      <FactIntegrityModal isOpen={dialog === 'facts'} onClose={() => setDialog(null)} />
      <PhotoCreditsModal isOpen={dialog === 'photos'} onClose={() => setDialog(null)} />
    </>
  );
}
