import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import styles from './styles.module.css';

type TOCItem = {
  href?: string;
  label: string;
  items?: TOCItem[];
};

type TOCCategory = {
  items: TOCItem[];
};

function renderTOCItems(items: TOCItem[]): JSX.Element {
  return (
    <ul className={styles.tableOfContents}>
      {items.map((item, index) => (
        <li key={index} className={styles.tableOfContentsItem}>
          {item.href ? (
            <Link
              to={item.href}
              className={styles.tableOfContentsLink}
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {item.items && item.items.length > 0 && renderTOCItems(item.items)}
        </li>
      ))}
    </ul>
  );
}

export default function SubpageTOC(): JSX.Element | null {
  const category = useCurrentSidebarCategory() as TOCCategory | null;

  if (!category?.items) {
    return null;
  }

  return (
    <nav className={styles.tocInline}>
      {renderTOCItems(category.items)}
    </nav>
  );
}
