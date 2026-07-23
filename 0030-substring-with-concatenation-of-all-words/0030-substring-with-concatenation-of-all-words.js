/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
    if (s.length === 0 || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    const wordMap = new Map();

    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let count = 0;
        const seen = new Map();

        for (let right = i; right <= s.length - wordLen; right += wordLen) {
            const word = s.substring(right, right + wordLen);

            if (wordMap.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                while (seen.get(word) > wordMap.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                if (count === wordCount) {
                    result.push(left);

                    const leftWord = s.substring(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }
            } else {
                seen.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
}