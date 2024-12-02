/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxCount = 0;
    let currentCount = 0;
    let tailSum = 0;

    for(let i = 0; i < k; i++) {
        if(isVowel(s[i])) {
            maxCount += 1;
            currentCount += 1;
        }
    }

    for(let i = k; i < s.length; i++) {
        const tailCharIsVowel = isVowel(s[i-k]);
        const headCharIsVowel = isVowel(s[i]);

        currentCount += headCharIsVowel ? 1 : 0
        currentCount += tailCharIsVowel ? -1 : 0
        if (currentCount > maxCount) maxCount = currentCount;
    }

    return maxCount;
};

function isVowel(c) {
    if(c === "a" || c === "e" || c === "i" || c === "u" || c === "o") {
        return true;
    }
    return false;
}
