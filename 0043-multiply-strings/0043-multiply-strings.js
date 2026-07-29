/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');

            const p1 = i + j;
            const p2 = i + j + 1;

            const sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    let ans = "";

    for (let num of result) {
        if (!(ans === "" && num === 0)) {
            ans += num;
        }
    }

    return ans;
}