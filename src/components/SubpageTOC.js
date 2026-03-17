import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';

// Helper function to render items and their children recursively
function renderTOCItems(items) {
  return (
    <ul className="table-of-contents">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.href}
            className="table-of-contents__link"
          >
            {item.label}
          </Link>
          {/* If the item is a sub-category with its own items, render them as a nested list */}
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
    <nav className="toc-inline">
      {renderTOCItems(category.items)}
    </nav>
  );
}