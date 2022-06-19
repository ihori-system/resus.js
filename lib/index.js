const {request} = require('undici');

const PACKAGE_NAME = '@ihori-system/resas.js';
const API_ENDPOINT = 'https://opendata.resas-portal.go.jp';

/**
 * @typedef {Object} ResasClientOption
 * @property {string} apiKey APIキー
 */

/**
 * ResasClient
 */
class ResasClient {
  /**
   * constructor
   * @param {ResasClientOption} options
   */
  constructor(options) {
    if (options == null) {
      throw new TypeError(`[${PACKAGE_NAME}] options引数が指定されていません`);
    }
    if (options.apiKey == null) {
      throw new TypeError(`[${PACKAGE_NAME}] apiKeyオプションが指定されていません`);
    }
    this.apiKey = options.apiKey;
    this.defaultHeaders = {'X-API-KEY': this.apiKey};
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html|都道府県一覧}
   * @return {Promise<Array>} prefectures data
   */
  prefectures() {
    return request(`${API_ENDPOINT}/api/v1/prefectures`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/cities.html|市区町村一覧}
   * @param {number} prefCode 都道府県コード
   * @return {Promise<Array>} 市区町村一覧
   */
  cities(prefCode) {
    if (prefCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] prefCode引数が指定されていません`);
    }
    if (typeof prefCode !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] prefCodeに数値以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/cities`, {
      headers: this.defaultHeaders,
      query: {
        prefCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/oldCities.html|旧市区町村一覧}
   * @param {number} prefCode 都道府県コード
   * @param {string} cityCode 市区町村コード
   * @return {Promise<Array>} 旧市区町村一覧
   */
  oldCities(prefCode, cityCode) {
    if (prefCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] prefCode引数が指定されていません`);
    }
    if (typeof prefCode !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] prefCodeに数値以外の値が入っています`);
    }
    if (cityCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] cityCode引数が指定されていません`);
    }
    if (typeof cityCode !== 'string') {
      throw new TypeError(`[${PACKAGE_NAME}] cityCodeに文字列以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/oldCities`, {
      headers: this.defaultHeaders,
      query: {
        prefCode,
        cityCode,
      }})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/industries/broad.html|産業大分類}
   * @return {Promise<Array>} 産業大分類
   */
  broadIndustries() {
    return request(`${API_ENDPOINT}/api/v1/industries/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/industries/middle.html|産業中分類}
   * @param {string} sicCode 産業大分類コード
   * @return {Promise<Array>} 産業中分類
   */
  middleIndustries(sicCode) {
    if (sicCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] sicCode引数が指定されていません`);
    }
    if (typeof sicCode !== 'string') {
      throw new TypeError(`[${PACKAGE_NAME}] sicCodeに文字列以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/industries/middle`, {
      headers: this.defaultHeaders,
      query: {
        sicCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/industries/narrow.html|産業小分類}
   * @param {string} simcCode 産業中分類コード
   * @return {Promise<Array>} 産業小分類
   */
  narrowIndustries(simcCode) {
    if (simcCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] simcCode引数が指定されていません`);
    }
    if (typeof simcCode !== 'string') {
      throw new TypeError(`[${PACKAGE_NAME}] simcCodeに文字列以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/industries/narrow`, {
      headers: this.defaultHeaders,
      query: {
        simcCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/jobs/broad.html|職業大分類}
   * @return {Promise<Array>} 職業大分類
   */
  broadJobs() {
    return request(`${API_ENDPOINT}/api/v1/jobs/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/jobs/middle.html|職業中分類}
   * @param {string} iscoCode 職業大分類コード
   * @return {Promise<Array>} 職業中分類
   */
  middleJobs(iscoCode) {
    if (iscoCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] iscoCode引数が指定されていません`);
    }
    if (typeof iscoCode !== 'string') {
      throw new TypeError(`[${PACKAGE_NAME}] iscoCodeに文字列以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/jobs/middle`, {
      headers: this.defaultHeaders,
      query: {
        iscoCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/patents/broad.html|特許.技術分野}
   * @return {Promise<Array>} 特許.技術分野
   */
  broadPatents() {
    return request(`${API_ENDPOINT}/api/v1/patents/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/patents/middle.html|特許.技術テーマ}
   * @param {string} tecCode 技術分野コード
   * @return {Promise<Array>} 特許.技術テーマ
   */
  middlePatents(tecCode) {
    if (tecCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] tecCode引数が指定されていません`);
    }
    if (typeof tecCode !== 'string') {
      throw new TypeError(`[${PACKAGE_NAME}] tecCodeに文字列以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/patents/middle`, {
      headers: this.defaultHeaders,
      query: {
        tecCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/customs.html|税関}
   * @param {number} prefCode 都道府県コード
   * @return {Promise<Array>} 税関
   */
  customs(prefCode) {
    if (prefCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] prefCode引数が指定されていません`);
    }
    if (typeof prefCode !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] prefCodeに数値以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/customs`, {
      headers: this.defaultHeaders,
      query: {
        prefCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/regions/broad.html|輸出入.取引国_地域}
   * @return {Promise<Array>} 輸出入.取引国_地域
   */
  broadRegions() {
    return request(`${API_ENDPOINT}/api/v1/regions/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/regions/middle.html|輸出入.取引国_国}
   * @param {number} regionCode 地域コード
   * @return {Promise<Array>} 輸出入.取引国_国
   */
  middleRegions(regionCode) {
    if (regionCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] regionCode引数が指定されていません`);
    }
    if (typeof regionCode !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] regionCodeに数値以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/regions/middle`, {
      headers: this.defaultHeaders,
      query: {
        regionCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/regions/agricultureDepartments.html|農業部門}
   * @return {Promise<Array>} 農業部門
   */
  agricultureDepartments() {
    return request(`${API_ENDPOINT}/api/v1/regions/agricultureDepartments`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/patents/locations.html|特許権者の所在地}
   * @param {number} prefCode 都道府県コード
   * @param {string} cityCode 市区町村コード。「すべての市区町村」を選択する場合は「-」を指定。
   * @return {Promise<Array>} 特許権者の所在地
   */
  patentLocations(prefCode, cityCode) {
    if (prefCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] prefCode引数が指定されていません`);
    }
    if (typeof prefCode !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] prefCodeに数値以外の値が入っています`);
    }
    if (cityCode == null) {
      throw new TypeError(`[${PACKAGE_NAME}] cityCode引数が指定されていません`);
    }
    if (typeof cityCode !== 'string') {
      throw new TypeError(`[${PACKAGE_NAME}] cityCodeに文字列以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/patents/locations`, {
      headers: this.defaultHeaders,
      query: {
        prefCode,
        cityCode,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/tradeInfoItemTypes/broad.html|輸出入.品目_大分類}
   * @return {Promise<Array>} 輸出入.品目_大分類
   */
  broadTradeInfoItemTypes() {
    return request(`${API_ENDPOINT}/api/v1/tradeInfoItemTypes/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/tradeInfoItemTypes/middle.html|輸出入.品目_中分類}
   * @param {number} itemCode1 商品大分類コード。「すべての大分類」を選択する場合は「-」を指定。
   * @return {Promise<Array>} 輸出入.品目_中分類
   */
  middleTradeInfoItemTypes(itemCode1) {
    if (itemCode1 == null) {
      throw new TypeError(`[${PACKAGE_NAME}] itemCode1引数が指定されていません`);
    }
    if (typeof itemCode1 !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] itemCode1に数値以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/tradeInfoItemTypes/middle`, {
      headers: this.defaultHeaders,
      query: {
        itemCode1,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * {@link https://opendata.resas-portal.go.jp/docs/api/v1/tradeInfoItemTypes/narrow.html|輸出入.品目_小分類}
   * @param {number} itemCode1 品目_大分類コード
   * @param {number} itemCode2 品目_中分類コード
   * @return {Promise<Array>} 輸出入.品目_小分類
   */
  narrowTradeInfoItemTypes(itemCode1, itemCode2) {
    if (itemCode1 == null) {
      throw new TypeError(`[${PACKAGE_NAME}] itemCode1引数が指定されていません`);
    }
    if (typeof itemCode1 !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] itemCode1に数値以外の値が入っています`);
    }
    if (itemCode2 == null) {
      throw new TypeError(`[${PACKAGE_NAME}] itemCode2引数が指定されていません`);
    }
    if (typeof itemCode2 !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] itemCode2に数値以外の値が入っています`);
    }
    return request(`${API_ENDPOINT}/api/v1/tradeInfoItemTypes/narrow`, {
      headers: this.defaultHeaders,
      query: {
        itemCode1,
        itemCode2,
      },
    })
        .then(({body}) => body.json())
        .then((data) => data.result);
  }
};

module.exports = ResasClient;
