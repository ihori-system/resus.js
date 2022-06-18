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

describe('broadIndustries', () => {
  test('get broad industries list', async () => {
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
    const broadIndustries = await client.broadIndustries();
    expect(broadIndustries.length).toEqual(3);
  });
});

describe('middleIndustries', () => {
  test('throws without sicCode', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.middleIndustries()).toThrow();
  });

  test('throws when sicCode is not string', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.middleIndustries(1)).toThrow();
  });

  test('get middle industries list', async () => {
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
    const broadIndustries = await client.middleIndustries('A');
    expect(broadIndustries.length).toEqual(3);
  });
});

describe('narrowIndustries', () => {
  test('throws without simcCode', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.narrowIndustries()).toThrow();
  });

  test('throws when simcCode is not string', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.narrowIndustries(1)).toThrow();
  });

  test('get narrow industries list', async () => {
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
    const narrowIndustries = await client.narrowIndustries('02');
    expect(narrowIndustries.length).toEqual(3);
  });
});

describe('broadJobs', () => {
  test('get broad jobs list', async () => {
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
    const broadJobs = await client.broadJobs();
    expect(broadJobs.length).toEqual(3);
  });
});

describe('middleJobs', () => {
  test('throws without iscoCode', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.middleJobs()).toThrow();
  });

  test('throws when iscoCode is not string', () => {
    const client = new ResusClient({apiKey: 'xxxxx'});
    expect(() => client.middleJobs(1)).toThrow();
  });

  test('get middle jobs list', async () => {
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
    const middleJobs = await client.middleJobs('B');
    expect(middleJobs.length).toEqual(3);
  });
});
