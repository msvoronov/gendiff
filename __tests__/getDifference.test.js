import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import parseFile from '../src/parseFile.js';
import getDifference from '../src/getDifference.js';

test('getDifference', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const resultFile = fs.readFileSync(getFixturePath('result.json'), 'utf-8');
  const result = JSON.parse(resultFile);

  const file1 = parseFile('file1.json');
  const file2 = parseFile('file2.json');

  expect(getDifference(file1, file2)).toEqual(result);
});
