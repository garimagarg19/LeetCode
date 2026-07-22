/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Handle overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine sign
    const negative =
        (dividend < 0) !== (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let quotient = 0;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;

        while (dvd >= (temp + temp)) {
            temp += temp;
            multiple += multiple;
        }

        dvd -= temp;
        quotient += multiple;
    }

    return negative ? -quotient : quotient;
}