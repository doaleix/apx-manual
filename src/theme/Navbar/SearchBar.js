import React, { useState, useEffect } from 'react';
import FlexSearch from 'flexsearch';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => {
        const flexIndex = FlexSearch.Document.import(data);
        setIndex(flexIndex);
      });
  }, []);

  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q);

    if (index && q.length > 1) {
      const res = index.search(q, { enrich: true });
      const flat = res.flatMap(r => r.result.map(id => r.doc[id]));
      setResults(flat);
    } else {
      setResults([]);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        style={{ padding: '4px 8px', width: '200px' }}
      />
      {results.length > 0 && (
        <ul style={{ position: 'absolute', background: '#fff', zIndex: 1000, width: '200px', maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', margin: 0, padding: '4px' }}>
          {results.map((r, i) => (
            <li key={i}>
              <a href={r.path}>{r.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}