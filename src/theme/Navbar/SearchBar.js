import React, { useEffect, useState } from 'react';
import FlexSearch from 'flexsearch';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState([]);

  const searchJsonUrl = useBaseUrl('search-index.json');

  useEffect(() => {
    fetch(searchJsonUrl)
      .then(r => r.json())
      .then(data => {
        const idx = new FlexSearch.Document({
          document: {
            id: 'id',
            index: ['title', 'content'],
          },
        });
        data.docs.forEach(doc => idx.add(doc));
        setIndex(idx);
        setDocs(data.docs);
      })
      .catch(e => console.error('Search index failed to load', e));
  }, [searchJsonUrl]);

  const onChange = e => {
    const q = e.target.value;
    setQuery(q);

    if (!index || q.length < 2) {
      setResults([]);
      return;
    }

    // Search across all indexed fields
    const fieldResults = index.search(q, { index: ['title', 'content'] });

    // Flatten results and extract unique IDs
    const uniqueIds = new Set();
    if (!Array.isArray(fieldResults)) fieldResults = [fieldResults];
    console.log(fieldResults); // Ensure it's an array of arrays
    fieldResults.forEach(fieldArray => {
      fieldArray.result.forEach(r => {
        if (r != null) uniqueIds.add(r);
      });
    });

    // Map IDs to original docs
    const matchedDocs = Array.from(uniqueIds)
      .map(id => docs.find(d => d.id === id))
      .filter(Boolean);

    setResults(matchedDocs);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="search"
        placeholder="Search docs…"
        value={query}
        onChange={onChange}
        style={{
          minWidth: 220,
          height: 32,
          padding: '0 8px',
          borderRadius: 6,
          border: '1px solid #ccc',
        }}
      />
      {results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 36,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: 6,
            minWidth: 260,
            zIndex: 9999,
            maxHeight: 300,
            overflowY: 'auto',
          }}
        >
          {results.map(r => (
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