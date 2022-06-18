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
        .then(((data) => data.result));
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
        .then(((data) => data.result));
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
    return request(`${API_ENDPOINT}/api/v1/oldCities`, {headers: this.defaultHeaders,
      query: {
        prefCode,
        cityCode,
      }})
        .then(({body}) => body.json())
        .then(((data) => data.result));
  }
};
