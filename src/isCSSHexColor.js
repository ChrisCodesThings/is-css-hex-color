// @ts-check

import isString from '@chriscodesthings/is-string';
import isHexNumber from '@chriscodesthings/is-hex-number';

/**
 * Test if a string is a valid CSS hex colour code
 * @param {string} str String to test
 * @returns {boolean}
 */
export default function isCSSHexColor(str) {
    return (
        isString(str)
        && str[0] === '#'
        && (str.length == 4 || str.length == 5 || str.length == 7 || str.length == 9)
        && isHexNumber(str.slice(1))
    );
}
