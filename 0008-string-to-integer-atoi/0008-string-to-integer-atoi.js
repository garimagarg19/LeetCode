/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Skip leading spaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Check sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') sign = -1;
        i++;
    }

    // Convert digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        result = result * 10 + digit;

        // Clamp to 32-bit integer range
        if (sign * result > INT_MAX) return INT_MAX;
        if (sign * result < INT_MIN) return INT_MIN;

        i++;
    }

    return sign * result;
}