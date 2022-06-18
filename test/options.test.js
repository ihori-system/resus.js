const ResusClient = require('../lib');

test('throws without option', () => {
  const options = undefined;
  expect(() => new ResusClient(options)).toThrow();
});

test('throws without `apiKey` option', () => {
  expect(() => new ResusClient({})).toThrow();
});

test('not to throw with `apiKey` option', () => {
  expect(() => new ResusClient({apiKey: 'xxxxx'})).not.toThrow();
});
