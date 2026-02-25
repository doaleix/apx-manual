const fs = require('fs');
const path = require('path');
const FlexSearch = require('flexsearch');

const docsDir = path.join(__dirname, '../docs'); // adjust if your docs folder is different
const outputFile = path.join(__dirname, '../static/search-index.json');

const index = new FlexSearch.Document({
  document: {
    id: 'id',
    index: ['title', 'content'],
    store: ['title', 'path'],
  },
});

let idCounter = 0;

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf-8');

      const titleMatch = content.match(/^#\s+(.*)/m);
      const title = titleMatch ? titleMatch[1] : file;

      const relativePath = path.relative(docsDir, fullPath).replace(/\\/g, '/').replace(/\.mdx?$/, '');

      index.add({
        id: idCounter++,
        title,
        content,
        path: `/${relativePath}`,
      });
    }
  }
}

walkDir(docsDir);

// Write the index to static folder so it’s served by Docusaurus
fs.writeFileSync(outputFile, JSON.stringify(index.export()), 'utf-8');
console.log(`Search index generated at ${outputFile}`);