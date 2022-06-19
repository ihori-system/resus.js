resas.js
===

[![CI](https://github.com/ihori-system/resas.js/actions/workflows/ci.yml/badge.svg)](https://github.com/ihori-system/resas.js/actions/workflows/ci.yml)

[RESAS API](https://opendata.resas-portal.go.jp/) client for Node.js

## Getting started

1) 利用登録を行い、APIキーを取得

https://opendata.resas-portal.go.jp/form.html

2) ライブラリをインストール

```
npm i @ihori-system/resas.js
```

## Usage

サンプルコード:

```javascript
const ResasClient = require('@ihori-system/resas.js');

const client = new ResasClient({apiKey: '利用登録で取得したAPIキーをここに記載'});
client.prefectures()
  .then((prefectures) => console.log(prefecture[0])); // { prefCode: 1, prefName: '北海道' }
```

## APIドキュメント

https://ihori-system.github.io/resas.js/

## References

- [RESAS APIドキュメント](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)
- [全国地方公共団体コード](https://ja.wikipedia.org/wiki/%E5%85%A8%E5%9B%BD%E5%9C%B0%E6%96%B9%E5%85%AC%E5%85%B1%E5%9B%A3%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89)
