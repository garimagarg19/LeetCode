/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }

    return reversed;
}