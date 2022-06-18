const request = require('undici').request;

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
  }

  /**
   * @return {Object} prefectures data
   * Ref: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
   */
  prefectures() {
    return request('https://opendata.resas-portal.go.jp/api/v1/prefectures', {headers: {
      'X-API-KEY': this.apiKey,
    }})
        .then(({body}) => body.json())
        .then(((data) => data.result));
  }
};
