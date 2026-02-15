'use client';

import {Link} from '@/i18n/routing';

/** Matches [[/path|label]] for internal product/knowledge links */
const INLINE_LINK_REGEX = /\[\[\s*(\/[^|\]]+)\|([^\]]+)\]\]/g;

export function ContentWithLinks({text}: {text: string}) {
  const parts: Array<{type: 'text'; content: string} | {type: 'link'; href: string; label: string}> = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  INLINE_LINK_REGEX.lastIndex = 0;
  while ((m = INLINE_LINK_REGEX.exec(text)) !== null) {
    if (m.index > lastIndex) {
      parts.push({type: 'text', content: text.slice(lastIndex, m.index)});
    }
    parts.push({type: 'link', href: m[1], label: m[2]});
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({type: 'text', content: text.slice(lastIndex)});
  }
  if (parts.length === 0) {
    return <>{text}</>;
  }
  return (
    <>
      {parts.map((part, i) =>
        part.type === 'text' ? (
          <span key={i}>{part.content}</span>
        ) : (
          <Link
            key={i}
            href={part.href as any}
            style={{color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 500}}
          >
            {part.label}
          </Link>
        )
      )}
    </>
  );
}
