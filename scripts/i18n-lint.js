const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, 'data', 'i18n');
const TARGET_EXTENSIONS = new Set(['.js', '.json']);

const suspiciousPatterns = [
  { regex: /�/g, reason: 'Replacement character found (possible broken encoding)' },
  { regex: /Ã[\x80-\xBF]/g, reason: 'Possible mojibake sequence (UTF-8 interpreted as Latin-1)' },
  { regex: /â€[\x98\x99\x9C\x9D\xA2\xA6\x93\x94]/g, reason: 'Possible smart-quote mojibake sequence' },
  { regex: /TÃœSÄ°AD|GÃ¼n\+Partners|BahadÄ±r|BalkÄ±r|Ä°nci/g, reason: 'Known mojibake terms detected' },
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    const ext = path.extname(entry.name);
    if (TARGET_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

function getLineAndColumn(content, index) {
  const upToMatch = content.slice(0, index);
  const lines = upToMatch.split(/\r?\n/);
  const line = lines.length;
  const column = lines[lines.length - 1].length + 1;
  return { line, column };
}

function lintFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  for (const pattern of suspiciousPatterns) {
    const matches = [...content.matchAll(pattern.regex)];
    for (const match of matches) {
      const index = match.index || 0;
      const { line, column } = getLineAndColumn(content, index);
      const snippet = content.slice(index, Math.min(index + 80, content.length)).replace(/\s+/g, ' ').trim();
      issues.push({
        filePath,
        line,
        column,
        reason: pattern.reason,
        snippet,
      });
    }
  }

  return issues;
}

function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error('Target directory not found:', TARGET_DIR);
    process.exit(1);
  }

  const files = walk(TARGET_DIR);
  const allIssues = files.flatMap((filePath) => lintFile(filePath));

  if (allIssues.length === 0) {
    console.log('i18n-lint: OK (no suspicious encoding or language artifacts found).');
    process.exit(0);
  }

  console.error(`i18n-lint: Found ${allIssues.length} issue(s):`);
  for (const issue of allIssues) {
    const rel = path.relative(ROOT, issue.filePath).replace(/\\/g, '/');
    console.error(`- ${rel}:${issue.line}:${issue.column} ${issue.reason}`);
    console.error(`  ${issue.snippet}`);
  }

  process.exit(1);
}

main();
