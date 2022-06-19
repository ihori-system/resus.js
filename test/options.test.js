const ResasClient = require('../lib');

test('throws without option', () => {
  const options = undefined;
  expect(() => new ResasClient(options)).toThrow();
});

test('throws without `apiKey` option', () => {
  expect(() => new ResasClient({})).toThrow();
});

test('not to throw with `apiKey` option', () => {
  expect(() => new ResasClient({apiKey: 'xxxxx'})).not.toThrow();
});
