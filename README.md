# is-css-hex-color <br> [![Test workflow status](https://github.com/ChrisCodesThings/is-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/is-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/is-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to determine if a string is a CSS hex color code**

## Description

Checks if a string is a valid CSS hex color code.

Valid CSS hex colors must:
- begin with a # character
- contain 3 hex numbers from 0 to ff
- may also contain a 4th hex number representing an alpha channel
- be in long (#123456) or short (#123) form

The following are examples of valid CSS hex colour codes:
```
#6699ee   // nearly cornflowerblue
#6699ee88 // ... with 53% transparency
#69e8     // ... in shorthand
```

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

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

Returns boolean `true` if *str* is a valid CSS hex color code, `false` otherwise.

## Examples

```js
// validate after user input
function setColour(col) {
    if( !isCSSHexColor(col)) {
        alert("Please input a valid CSS hex colour");
        return;
    }

    // set some colours
}
```

## See Also...

- [**is-hex-number**: Determine if a string is a hexadecimal number](https://github.com/ChrisCodesThings/is-hex-number "Determine if a string is a hexadecimal number")
- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
- [**rgba-color-to-css-hex**: Converts an RGB or RGBA color to a CSS hex color code](https://github.com/ChrisCodesThings/rgba-color-to-css-hex "Converts an RGB or RGBA color to a CSS hex color code")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
