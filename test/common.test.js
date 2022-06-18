const ResusClient = require('../lib');

jest.mock('undici');
const undici = require('undici');

describe('prefectures', () => {
  test('get prefectures list', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      statusCode: '200',
      headers: {},
      trailers: {},
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
