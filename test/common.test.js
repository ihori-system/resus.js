const ResusClient = require('../lib');

jest.mock('undici');
const undici = require('undici');

describe('prefectures', () => {
  test('get prefectures list', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            result: [
              {},
              {},
              {},
            ],
          });
        },
      },
    }));
    const client = new ResusClient({apiKey: 'xxxxx'});
    const prefectures = await client.prefectures();
    expect(prefectures.length).toEqual(3);
  });
});

describe('cities', () => {
  test('throws without prefCode argument', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.cities()).toThrow();
  });

  test('throws when prefCode is not number', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.cities('1')).toThrow();
  });

  test('get cities list', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            result: [
              {},
              {},
              {},
            ],
          });
        },
      },
    }));
    const client = new ResusClient({apiKey: 'xxxxx'});
    const cities = await client.cities(1);
    expect(cities.length).toEqual(3);
  });
});

describe('oldCities', () => {
  test('throws without prefCode argument', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.oldCities()).toThrow();
  });

  test('throws when prefCode is not number', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.oldCities('1')).toThrow();
  });

  test('throws without cityCode argument', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.oldCities(1)).toThrow();
  });

  test('throws when cityCode is not number', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.oldCities(1, 1)).toThrow();
  });

  test('get old cities list', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            result: [
              {},
              {},
              {},
            ],
          });
        },
      },
    }));
    const client = new ResusClient({apiKey: 'xxxxx'});
    const oldCities = await client.oldCities(1, '1');
    expect(oldCities.length).toEqual(3);
  });
});
