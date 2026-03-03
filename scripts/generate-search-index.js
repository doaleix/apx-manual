const fs = require('fs');
const path = require('path');
const FlexSearch = require('flexsearch');

/* -------------------------------------------------------
   Paths
------------------------------------------------------- */

// Root docs folder (your Markdown / MDX files)
const docsDir = path.join(__dirname, '../docs');

// Output file for the generated search index
const outFile = path.join(__dirname, '../static/search-index.json');

// where Docusaurus stores doc metadata
const docusaurusDocsDir = path.join(
  __dirname,
  '../.docusaurus/docusaurus-plugin-content-docs/default'
);

/* -------------------------------------------------------
   Build:  relativeDocPath  -> permalink
------------------------------------------------------- */

const permalinkBySource = {};

/**
 * Recursively scans Docusaurus metadata JSON files and
 * builds a lookup table from source file path to permalink.
 */

function loadDocusaurusDocMetadata(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    // Recurse into subfolders
    if (stat.isDirectory()) {
      loadDocusaurusDocMetadata(full);
      continue;
    }

    // Only process JSON metadata files
    if (!entry.endsWith('.json')) continue;

    const data = JSON.parse(fs.readFileSync(full, 'utf8'));

    // We only care about docs that expose a source and a permalink
    if (!data.source || !data.permalink) continue;

    // Only handle files starting with '@site/docs/'
    if (!data.source.startsWith('@site/docs/')) continue;

    // Convert "@site/docs/foo/bar.md" → "foo/bar"
    const rel = data.source
      .replace('@site/docs/', '')
      .replace(/\.mdx?$/, '');

    // Store mapping for later URL resolution
    permalinkBySource[rel] = data.permalink;
  }
}

loadDocusaurusDocMetadata(docusaurusDocsDir);

/* -------------------------------------------------------
   FlexSearch index
------------------------------------------------------- */

// Create a document-based FlexSearch index
const index = new FlexSearch.Document({
  document: {
    id: 'id',
    index: ['content', 'title'],
  },
});

// List of documents that will be shipped to the frontend
const docs = [];
let id = 0;

/**
 * Recursively walks through the docs directory,
 * indexes all .md and .mdx files and resolves their URLs.
 */
function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
      continue;
    }

    // Only process markdown files
    if (!entry.endsWith('.md') && !entry.endsWith('.mdx')) continue;

    const raw = fs.readFileSync(full, 'utf8');

    const titleMatch = raw.match(/^#\s+(.*)$/m);
    const title = titleMatch ? titleMatch[1].trim() : entry;

    // Build a relative path matching the Docusaurus source format
    // Example: foo/bar
    const rel = path
      .relative(docsDir, full)
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '');

    // Resolve public URL using the previously built lookup table
    const url = permalinkBySource[rel] + '/';

    // Skip files that cannot be resolved to a permalink
    if (!url) {
      console.warn('⚠️ No permalink found for', rel);
      continue;
    }

    const doc = {
      id,
      title,
      content: raw,
      url,
    };

    // Add document to the FlexSearch index
    index.add(doc);

    // Keep a copy of searchable documents for the frontend
    docs.push(doc);
    id++;
  }
}

walk(docsDir);

/* -------------------------------------------------------
   Export index + docs
------------------------------------------------------- */

// FlexSearch exports its internal index in multiple chunks
const exportedIndex = {};

// Collect all index fragments
index.export((key, data) => {
  exportedIndex[key] = data;
});

// Ensure output directory exists
fs.mkdirSync(path.dirname(outFile), { recursive: true });

// Write final search bundle (index + documents)
fs.writeFileSync(
  outFile,
  JSON.stringify(
    {
      index: exportedIndex,
      docs,
    },
    null,
    2
  ),
  'utf8'
);

console.log('✅ Search index written to', outFile);