import { ArrowUpRight } from 'lucide-react';
import { PUBLICATIONS_DATA } from '@/data/content';

export default function PublicationsSection() {
  return (
    <section id="publications" className="journal-section">
      <ul className="journal-publications">
        {PUBLICATIONS_DATA.map(({ id, title, publisher, url }) => (
          <li key={id}>
            <a href={url}>
              <span><small>{publisher}</small><strong>{title}</strong></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
