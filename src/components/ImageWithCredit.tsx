import { PHOTO_CREDITS } from '@/data/content';

export default function ImageWithCredit({ creditKey, className = '', caption }: {
  creditKey: string;
  className?: string;
  caption?: string;
}) {
  const photo = PHOTO_CREDITS[creditKey];
  if (!photo) return null;

  return (
    <figure className={'journal-photo ' + className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.imageUrl} alt={photo.title} loading="lazy" decoding="async" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
