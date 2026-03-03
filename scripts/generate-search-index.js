const fs = require('fs');
const path = require('path');
const FlexSearch = require('flexsearch');

const docsDir = path.join(__dirname, '../docs');
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

function loadDocusaurusDocMetadata(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      loadDocusaurusDocMetadata(full);
      continue;
    }

    if (!entry.endsWith('.json')) continue;

    const data = JSON.parse(fs.readFileSync(full, 'utf8'));

    if (!data.source || !data.permalink) continue;

    // data.source is like: "@site/docs/foo/bar.md"
    if (!data.source.startsWith('@site/docs/')) continue;

    const rel = data.source
      .replace('@site/docs/', '')
      .replace(/\.mdx?$/, '');

    permalinkBySource[rel] = data.permalink;
  }
}

loadDocusaurusDocMetadata(docusaurusDocsDir);

/* -------------------------------------------------------
   FlexSearch index
------------------------------------------------------- */

const index = new FlexSearch.Document({
  document: {
    id: 'id',
    index: ['content', 'title'],
  },
});

const docs = [];
let id = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
      continue;
    }

    if (!entry.endsWith('.md') && !entry.endsWith('.mdx')) continue;

    const raw = fs.readFileSync(full, 'utf8');

    const titleMatch = raw.match(/^#\s+(.*)$/m);
    const title = titleMatch ? titleMatch[1].trim() : entry;

    const rel = path
      .relative(docsDir, full)
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '');

    // 🔴 THIS is the important change
    const url = permalinkBySource[rel] + '/';

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

    index.add(doc);
    docs.push(doc);
    id++;
  }
}

walk(docsDir);

/* -------------------------------------------------------
   Export index + docs
------------------------------------------------------- */

const exportedIndex = {};

index.export((key, data) => {
  exportedIndex[key] = data;
});

fs.mkdirSync(path.dirname(outFile), { recursive: true });
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