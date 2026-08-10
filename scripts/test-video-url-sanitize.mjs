import { sanitizeVideoUrlPath } from '../lib/seo/videoUrl.js';

const cases = [
  {
    name: 'removes spaces and lowercases path segments',
    input: '/video/5389356 Coll Wavebreak Warehouse 1920X1080.webm',
    expected: '/video/5389356-coll-wavebreak-warehouse-1920x1080.webm',
  },
  {
    name: 'removes escaped and literal control characters',
    input: '/video/Bad\\nName\n.webm',
    expected: '/video/badname.webm',
  },
  {
    name: 'keeps URL absolute when absolute input is provided',
    input: 'https://izlenebilirlik.com.tr/video/Dislidonus.webm',
    expected: 'https://izlenebilirlik.com.tr/video/dislidonus.webm',
  },
  {
    name: 'preserves query string after path sanitation',
    input: '/video/My Clip.webm?v=1',
    expected: '/video/my-clip.webm?v=1',
  },
];

let hasError = false;

for (const testCase of cases) {
  const actual = sanitizeVideoUrlPath(testCase.input);
  if (actual !== testCase.expected) {
    hasError = true;
    console.error(`FAIL: ${testCase.name}`);
    console.error(`  expected: ${testCase.expected}`);
    console.error(`  actual  : ${actual}`);
  } else {
    console.log(`PASS: ${testCase.name}`);
  }
}

if (hasError) {
  process.exit(1);
}

console.log('All video URL sanitation tests passed.');
