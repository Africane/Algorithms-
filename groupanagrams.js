// Given an array of strings strs, group the anagrams together. You can return the 
// answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroups = {}; // Hash map to store groups of anagrams

    for (let str of strs) {
        // Sort the string to create a key
        const sortedStr = str.split('').sort().join('');
        if (!anagramGroups[sortedStr]) {
            anagramGroups[sortedStr] = []; // Initialize array if key doesn't exist
        }
        anagramGroups[sortedStr].push(str); // Add the original string to the group
    }

    // Return all values (groups of anagrams) from the hash map
    return Object.values(anagramGroups);
};
