braille-random — A Node.js library for generating random dot6 braille characters
====

## Table of Contents
- [braille-random — A Node.js library for generating random dot6 braille characters](#braille-random--a-nodejs-library-for-generating-random-dot6-braille-characters)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Introduction to braille-random](#introduction-to-braille-random)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Code of Conduct](#code-of-conduct)
  - [License](#license)
  - [MIT License](#mit-license)

Getting Started
----

### Introduction to braille-random

braille-random is a Node.js library for generating random dot6 braille characters. It's
available as an [npm package](https://npmjs.org/package/braille-random).

braille-random allows you to generate random dot6 braille characters from a given amount of characters.

## Installation

Install braille-random locally via npm:

```bash
npm install @des-v/braille-random
```
## Usage

Import it in a file and call the function

```js
const brailleRandom = require('@des-v/braille-random');

brailleRandom(3)

console.log(brailleRandom(3)) // prints ⠭⠒⠇
```

## Contribution

braille-random is under development, therefore it would be very much appreciated if you collaborate with us.

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. 

If you would like to see a feature implemented or want to contribute a new feature, you are welcome to open an issue to discuss it and we will be more than happy to help.

If you choose to make a contribution, please fork this repository, work on a feature and submit a pull request.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Code of Conduct

Respect others in all levels and expect to receive the same treatment back.

## License

MIT License
----

Copyright (c) 2021-2022 Desiree Valdes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.