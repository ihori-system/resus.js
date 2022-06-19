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
      cityCode: '01100',
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
      sicCode: 'A',
      simcCode: '01',
      simcName: '農業',
    });
  });
});

describe('narrowIndustries', () => {
  test('get narrow industries list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const narrowIndustries = await client.narrowIndustries('01');
    expect(narrowIndustries.length).toEqual(5);
    expect(narrowIndustries[0]).toEqual({
      simcCode: '01',
      siscCode: '010',
      siscName: '管理，補助的経済活動を行う事業所（01農業）',
    });
  });
});

describe('broadJobs', () => {
  test('get broad jobs list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const broadJobs = await client.broadJobs();
    expect(broadJobs.length).toEqual(12);
    expect(broadJobs[0]).toEqual({
      iscoCode: 'A',
      iscoName: '管理的職業従事者',
    });
  });
});

describe('middleJobs', () => {
  test('get middle jobs list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const middleJobs = await client.middleJobs('A');
    expect(middleJobs.length).toEqual(4);
    expect(middleJobs[0]).toEqual({
      iscoCode: 'A',
      ismcoCode: '01',
      ismcoName: '管理的公務員',
    });
  });
});

describe('broadPatents', () => {
  test('get broad patents list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const broadPatents = await client.broadPatents();
    expect(broadPatents.length).toEqual(9);
    expect(broadPatents[0]).toEqual({
      tecCode: '',
      tecName: '',
    });
  });
});

describe('middlePatents', () => {
  test('get middle patents list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const middlePatents = await client.middlePatents('A');
    expect(middlePatents.length).toEqual(5);
    expect(middlePatents[0]).toEqual({
      tecCode: 'A',
      tecName: '生活必需品',
      themeCode: 'A0',
      themeName: '農業',
    });
  });
});

describe('customs', () => {
  test('get customs list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const customs = await client.customs(1);
    expect(customs.length).toEqual(15);
    expect(customs[0]).toEqual({
      customHouseCode: 800,
      customHouseName: '函館港',
      prefCode: 1,
      prefName: '北海道',
    });
  });
});

describe('broadRegions', () => {
  test('get broad regions list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const broadRegions = await client.broadRegions();
    expect(broadRegions.length).toEqual(6);
    expect(broadRegions[0]).toEqual({
      regionCode: 1,
      regionName: 'アジア州',
    });
  });
});

describe('middleRegions', () => {
  test('get middle regions list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const middleRegions = await client.middleRegions(1);
    expect(middleRegions.length).toEqual(53);
    expect(middleRegions[0]).toEqual({
      countryCode: 103,
      countryName: '大韓民国',
      regionCode: 1,
      regionName: 'アジア州',
      remarks: '',
    });
  });
});

describe('agricultureDepartments', () => {
  test('get agriculture departments list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const agricultureDepartments = await client.agricultureDepartments();
    expect(agricultureDepartments.length).toEqual(17);
    expect(agricultureDepartments[0]).toEqual({
      sectionCode: 'A',
      sectionName: '稲作',
    });
  });
});

describe('patentLocations', () => {
  test('get patent locations list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const patentLocations = await client.patentLocations(11, '11362');
    expect(patentLocations.length).toEqual(4);
    expect(patentLocations[0]).toEqual({
      id: 8032,
      prefCode: '11',
      prefName: '埼玉県',
      cityCode: '11362',
      cityName: '皆野町',
      latitude: 36.07809829711914,
      longitude: 139.1026153564453,
    });
  });
});

describe('broadTradeInfoItemTypes', () => {
  test('get broad trade info item types list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const broadTradeInfoItemTypes = await client.broadTradeInfoItemTypes();
    expect(broadTradeInfoItemTypes.length).toEqual(21);
    expect(broadTradeInfoItemTypes[0]).toEqual({
      itemCode1: 1,
      itemName1: '動物（生きているものに限る。）及び動物性生産品',
    });
  });
});

describe('middleTradeInfoItemTypes', () => {
  test('get middle trade info item types list', async () => {
    const client = new ResusClient({apiKey: process.env.X_API_KEY});
    const middleTradeInfoItemTypes = await client.middleTradeInfoItemTypes(1);
    expect(middleTradeInfoItemTypes.length).toEqual(5);
    expect(middleTradeInfoItemTypes[0]).toEqual({
      itemCode1: 1,
      itemCode2: 1,
      itemName1: '動物（生きているものに限る。）及び動物性生産品',
      itemName2: '動物（生きているものに限る。）',
    });
  });
});
