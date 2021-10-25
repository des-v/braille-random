const brailleRandom = require('../src/index')

describe('generate a number of dot6 braille random charaters', () => {
	it('generate 3 dot6 braille random charaters', function () {
		const threeDot6Braille = brailleRandom(3)
		expect(threeDot6Braille).toHaveLength(3)
	})
	it('generate 40 dot6 braille random charaters', function () {
		const fourtyDot6Braille = brailleRandom(40)
		expect(fourtyDot6Braille).toHaveLength(40)
	})
})
