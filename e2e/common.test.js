const ResusClient = require('../lib');

require('dotenv').config();

describe('prefectures', () => {
  test('get prefectures list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const prefectures = await client.prefectures();
    expect(prefectures.length).toEqual(47);
  });
});
