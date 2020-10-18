# Hanzi to Zhuyin

[![npm version](https://img.shields.io/npm/v/hanzi-to-zhuyin.svg)](https://www.npmjs.com/package/hanzi-to-zhuyin)
[![Travis Build Status](https://travis-ci.org/pepebecker/hanzi-to-zhuyin.svg)](https://travis-ci.org/pepebecker/hanzi-to-zhuyin)
[![Greenkeeper badge](https://badges.greenkeeper.io/pepebecker/hanzi-to-zhuyin.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/pepebecker/hanzi-to-zhuyin.svg)](https://david-dm.org/pepebecker/hanzi-to-zhuyin)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/hanzi-to-zhuyin.svg)](https://david-dm.org/pepebecker/hanzi-to-zhuyin#info=devDependencies)
[![ISC-licensed](https://img.shields.io/github/license/pepebecker/hanzi-to-zhuyin.svg)](https://choosealicense.com/licenses/isc/)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install hanzi-to-zhuyin
```

## Usage

```js
const convert = require('hanzi-to-zhuyin')
convert('我的猫喜欢吃苹果')
.then(console.log)
// [ 'ㄨㄛˇ ', [ 'ㄉㄜ˙', 'ㄉㄧ', 'ㄉㄧˊ', 'ㄉㄧ`' ], ' ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ ㄔ ㄆㄧㄥˊ ㄍㄨㄛˇ' ]
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`zhuyin`](https://github.com/pepebecker/zhuyin)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`cedict`](https://github.com/pepebecker/cedict)
- [`mdbg`](https://github.com/pepebecker/mdbg)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)
- [`pinyin-line`](https://github.com/pepebecker/pinyin-line)
- [`pinyin-chrome`](https://github.com/pepebecker/pinyin-chrome)
- [`pinyin-cli`](https://github.com/pepebecker/pinyin-cli)
- [`hanzi-cli`](https://github.com/pepebecker/hanzi-cli)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/hanzi-to-zhuyin/issues).
