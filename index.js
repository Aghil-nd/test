
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'myfile.js');
console.log(__dirname);

const contents = fs.readFileSync(filename, 'utf8');
test('should first', () => {
  expect(contents).toContain('map');
});

test('should second', () => {
  expect(contents).toContain('filter');
});
