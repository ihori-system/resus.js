const ResusClient = require('../lib');

require('dotenv').config();

describe('prefectures', () => {
  test('get prefectures list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const prefectures = await client.prefectures();
    expect(prefectures.length).toEqual(47);
    expect(prefectures[0]).toEqual({
      prefCode: 1,
      prefName: '北海道',
    });
  });
});

describe('cities', () => {
  test('get cities list', async () => {
    const PREF_CODE = 1; // 北海道
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const cities = await client.cities(PREF_CODE);
    expect(cities.length).toEqual(195);
    expect(cities[0]).toEqual({
      prefCode: 1,
      cityCode:
      '01100',
      cityName: '札幌市',
      bigCityFlag: '2',
    });
  });
});

describe('oldCities', () => {
  test('get old cities list', async () => {
    const PREF_CODE = 2; // 青森県
    const CITY_CODE = '02201'; // 青森市
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const oldCities = await client.oldCities(PREF_CODE, CITY_CODE);
    expect(oldCities.length).toEqual(20);
    expect(oldCities[0]).toEqual( {
      prefCode: 2,
      cityCode: '02201',
      cityName: '青森市',
      oldCityCode: '01',
      oldCityName: '奥内村',
    });
  });
});

describe('broadIndustries', () => {
  test('get broad industries list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const broadIndustries = await client.broadIndustries();
    expect(broadIndustries.length).toEqual(20);
    expect(broadIndustries[0]).toEqual({
      sicCode: 'A',
      sicName: '農業，林業',
    });
  });
});

describe('middleIndustries', () => {
  test('get middle industries list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const middleIndustries = await client.middleIndustries('A');
    expect(middleIndustries.length).toEqual(2);
    expect(middleIndustries[0]).toEqual({
      'sicCode': 'A',
      'simcCode': '01',
      'simcName': '農業',
    });
  });
});
