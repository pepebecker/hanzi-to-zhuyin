'use strict'

const convert = require('../index')

describe('Convert', () => {
	it('should convert characters to Zhuyin', () => {
		return convert('我的猫喜欢喝牛奶').then(data => {
			data.map(token => {
				if (typeof token === 'string') {
					return token
				} else {
					return '[' + token.join(',') + ']'
				}
			}).join('').should.equal('ㄨㄛˇ [ㄉㄜ˙,ㄉㄧ,ㄉㄧˊ,ㄉㄧ`] ㄇㄠ ㄒㄧˇ ㄏㄨㄢ˙ [ㄏㄜ,ㄏㄜ`] ㄋㄧㄡˊ ㄋㄞˇ')
		})
	})

	it('should convert characters to segmented Zhuyin', () => {
		return convert('我的猫喜欢喝牛奶', { segmented: true }).then(data => {
			data.map(token => {
				if (typeof token === 'string') {
					return token
				} else {
					return '[' + token.join(',') + ']'
				}
			}).join('').should.equal('ㄨㄛˇ [ㄉㄜ˙,ㄉㄧ,ㄉㄧˊ,ㄉㄧ`] ㄇㄠ ㄒㄧˇㄏㄨㄢ˙ [ㄏㄜ,ㄏㄜ`] ㄋㄧㄡˊㄋㄞˇ')
		})
	})
})
