import React, { useEffect, useState } from 'react';
import { Index } from 'flexsearch';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);
  const [documents, setDocuments] = useState({});

  useEffect(() => {
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data) => {
        // data = { index: ..., docs: ... }
        const idx = new Index(data.options);
        idx.import(data.index);

        setIndex(idx);
        setDocuments(data.docs);
      })
      .catch((e) => {
        console.error('Search index load failed', e);
      });
  }, []);

  function onChange(e) {
    const q = e.target.value;
    setQuery(q);

    if (!index || q.length < 2) {
      setResults([]);
      return;
    }

    const ids = index.search(q, 10);
    const docs = ids.map((id) => documents[id]).filter(Boolean);

    setResults(docs);
  }

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="search"
        placeholder="Search…"
        value={query}
        onChange={onChange}
        style={{
          height: 32,
          padding: '0 8px',
          borderRadius: 6,
          border: '1px solid #ccc',
          minWidth: 220,
        }}
      />

      {results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 36,
            background: 'var(--ifm-background-surface-color)',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 6,
            minWidth: 260,
            zIndex: 9999,
            maxHeight: 300,
            overflowY: 'auto',
          }}
        >
          {results.map((r) => (
            <a
              key={r.id}
              href={r.url}
              style={{
                display: 'block',
                padding: '6px 10px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {r.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}