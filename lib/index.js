const request = require('undici').request;

const PACKAGE_NAME = 'resus.js';
const API_ENDPOINT = 'https://opendata.resas-portal.go.jp';

/**
 *
 */
module.exports = class ResusClient {
  /**
   * constructor
   * @param {Object} options
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
   * 都道府県一覧
   * @return {Promise<Array>} prefectures data
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
   */
  prefectures() {
    return request(`${API_ENDPOINT}/api/v1/prefectures`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * 市区町村一覧
   * @param {number} prefCode 都道府県コード
   * @return {Promise<Array>} 市区町村一覧
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/cities.html
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
   * 旧市区町村一覧
   * @param {number} prefCode 都道府県コード
   * @param {string} cityCode 市区町村コード
   * @return {Promise<Array>} 旧市区町村一覧
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/oldCities.html
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
   * 産業大分類
   * @return {Promise<Array>} 産業大分類
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/industries/broad.html
   */
  broadIndustries() {
    return request(`${API_ENDPOINT}/api/v1/industries/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * 産業中分類
   * @param {string} sicCode 産業大分類コード
   * @return {Promise<Array>} 産業中分類
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/industries/middle.html
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
   * 産業小分類
   * @param {string} simcCode 産業中分類コード
   * @return {Promise<Array>} 産業小分類
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/industries/narrow.html
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
   * 職業大分類
   * @return {Promise<Array>} 職業大分類
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/jobs/broad.html
   */
  broadJobs() {
    return request(`${API_ENDPOINT}/api/v1/jobs/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * 職業中分類
   * @param {string} iscoCode
   * @return {Promise<Array>} 職業中分類
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/jobs/middle.html
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
   * 特許.技術分野
   * @return {Promise<Array>} 特許.技術分野
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/patents/broad.html
   */
  broadPatents() {
    return request(`${API_ENDPOINT}/api/v1/patents/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }

  /**
   * 特許.技術テーマ
   * @param {string} tecCode
   * @return {Promise<Array>} 特許.技術テーマ
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/patents/middle.html
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
   * 税関
   * @param {number} prefCode
   * @return {Promise<Array>} 税関
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/customs.html
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
   * 輸出入.取引国_地域
   * @return {Promise<Array>} 輸出入.取引国_地域
   */
  broadRegions() {
    return request(`${API_ENDPOINT}/api/v1/regions/broad`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then((data) => data.result);
  }
};
