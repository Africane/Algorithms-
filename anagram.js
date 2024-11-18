// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // sort both strings and compare
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
};