// Given an integer array nums, return true if any value appears at least twice in 
// the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}