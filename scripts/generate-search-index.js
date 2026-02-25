const fs = require('fs');
const path = require('path');
const FlexSearch = require('flexsearch');

const docsDir = path.join(__dirname, '../docs');
const outFile = path.join(__dirname, '../static/search-index.json');

const index = new FlexSearch.Document({
  document: {
    id: 'id',
    index: ['content', 'title'], // search on content and title
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

    const url = `/docs/${rel}`;

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

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify({
    docs,
  }),
  'utf8'
);

console.log('✅ Search index written to', outFile);