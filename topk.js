// Given an integer array nums and an integer k, return the k most frequent 
// elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = {}; // To store frequencies of elements

    // Count frequencies
    for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Create buckets: frequency to list of numbers
    const buckets = Array(nums.length + 1).fill().map(() => []); 
    for (let num in frequencyMap) {
        const freq = frequencyMap[num];
        buckets[freq].push(Number(num));
    }

    // Collect top k frequent elements
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k); // Return exactly k elements
};
