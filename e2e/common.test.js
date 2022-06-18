const ResusClient = require('../lib');

require('dotenv').config();

describe('prefectures', () => {
  test('get prefectures list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const prefectures = await client.prefectures();
    expect(prefectures.length).toEqual(47);
    expect(prefectures[0]).toEqual({prefCode: 1, prefName: '北海道'});
  });
});

describe('cities', () => {
  test('get cities list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const cities = await client.cities();
    expect(cities.length).toEqual(1922);
    expect(cities[0]).toEqual({prefCode: 1, cityCode: '01100', cityName: '札幌市', bigCityFlag: '2'});
  });
});
