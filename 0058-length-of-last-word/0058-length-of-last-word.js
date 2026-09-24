/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    let i = s.length - 1;

    // End ke spaces skip karo
    while (s[i] === " ") {
        i--;
    }

    let count = 0;

    // Last word ke characters count karo
    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }

    return count;
}

console.log(lengthOfLastWord("Hello World"));              // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy"));    // 6