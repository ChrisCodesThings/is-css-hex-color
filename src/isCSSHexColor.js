import isString from '@chriscodesthings/is-string';
import isHexNumber from '@chriscodesthings/is-hex-number';

export default function (str) {
    return (
        isString(str)
        && isHexNumber(str.slice(1))
        && str[0] === '#'
        && (str.length == 4 || str.length == 5 || str.length == 7 || str.length == 9)
    );
}
