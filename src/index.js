/**
 * Generate a random dot6 braille characters from a given amount of characters.
 * @constructor
 * @param {number} characters - The given amount of characters.
 * @return {string} - The desired amount of random characters in dot6 braille format.
 *
 */
function brailleRandom(characters = 0) {
	const dot6Braille =
		'⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿'
	let result = ''
	for (let i = 0; i < characters; i++) {
		result += dot6Braille.charAt(Math.floor(Math.random() * dot6Braille.length))
	}
	return result
}

module.exports = brailleRandom
