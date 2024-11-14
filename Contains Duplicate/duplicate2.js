// THIS VERSION IS SLOWER -- LESS TIME EFFICIENT

// Given an integer array nums, return true if any value appears at least twice in 
// the array, and return false if every element is distinct.


var containsDuplicate = function(nums) {
    let numSet = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            numSet.delete(nums[i]);
        } else {
            return true;
        }
    }
    return false;
}