import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';

function renderTOCItems(items) {
  return (
    <ul
      className="table-of-contents"
      style={{
        listStyleType: 'disc',   // Restores bullet points
        paddingLeft: '2rem',     // Ensures bullets are visible
        fontSize: '1rem'         // Matches standard body text size
      }}
    >
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '0.25rem' }}>
          <Link
            to={item.href}
            className="table-of-contents__link"
            style={{
              borderLeft: 'none',
              paddingLeft: '0',
              color: 'var(--ifm-color-primary)',
            }}
          >
            {item.label}
          </Link>
          {item.items && item.items.length > 0 && renderTOCItems(item.items)}
        </li>
      ))}
    </ul>
  );
}

export default function SubpageTOC() {
  const category = useCurrentSidebarCategory();

  if (!category || !category.items) {
    return null;
  }

  return (
    <nav className="toc-inline" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      {renderTOCItems(category.items)}
    </nav>
  );
}