# is-css-hex-color &middot; [![Test workflow status](https://github.com/ChrisCodesThings/is-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/is-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/is-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to determine if a string is a CSS hex color code**

## Install

```sh
npm install --save @chriscodesthings/is-css-hex-color
```

## Use

```js
import isCSSHexColor from '@chriscodesthings/is-css-hex-color';

console.log(isCSSHexColor("#123abcff"));
// => true
```

## Syntax

```js
isCSSHexColor(str);
```

### Parameters

- *str*: text string to test

### Return Value

Returns boolean true if str is a valid CSS hex color code, false otherwise.

## Description

Checks if a string is a valid CSS hex color code.

Valid CSS hex colors must:
- begin with a # character
- contain 3 hex numbers from 0 to ff
- may also contain a 4th hex number representing an alpha channel
- be in long (#123456) or short (#123) form

The following are examples of valid CSS hex colour codes:
```
#6699ff   // Cornflower blue
#6699ff88 // ... with 50% transparency
#69f8     // ... in shorthand
```