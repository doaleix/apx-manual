const fs = require('fs');
const path = require('path');
const { Index } = require('flexsearch');

const docsDir = path.join(__dirname, '../docs');
const outFile = path.join(__dirname, '../static/search-index.json');

const indexOptions = {
  tokenize: 'forward',
  cache: true,
  context: true,
};

const index = new Index(indexOptions);
const docs = {};

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

    index.add(id, raw);

    docs[id] = {
      id,
      title,
      url,
    };

    id++;
  }
}

walk(docsDir);

const exported = {
  index: index.export(),
  docs,
  options: indexOptions,
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(exported));

console.log('Search index written to', outFile);