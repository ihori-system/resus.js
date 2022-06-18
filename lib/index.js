const request = require('undici').request;

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
      throw new TypeError('[resus.js] オプションが指定されていません');
    }
    if (options.apiKey == null) {
      throw new TypeError('[resus.js] `apiKey`オプションがありません');
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
   * @return {Promise<Array>} cities data
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/cities.html
   */
  cities() {
    return request(`${API_ENDPOINT}/api/v1/cities`, {headers: this.defaultHeaders})
        .then(({body}) => body.json())
        .then(((data) => data.result));
  }
};
