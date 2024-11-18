// Minimized Maximum of Products Distributed to Any Store

//Hint
//You are given an integer n indicating there are n specialty retail stores. There are m product types of varying amounts, which are given as a 0-indexed integer array quantities, where quantities[i] represents the number of products of the ith product type.

//You need to distribute all products to the retail stores following these rules:

// A store can only be given at most one product type but can be given any amount of it.
// After distribution, each store will have been given some number of products (possibly 0). Let x represent the maximum number of products given to any store. You want x to be as small as possible, i.e., you want to minimize the maximum number of products that are given to any store.
// Return the minimum possible x.



/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    const isPossible = (maxProductsPerStore) => {
        let requiredStores = 0;
        for (let quantity of quantities) {
            requiredStores += Math.ceil(quantity / maxProductsPerStore);
            if (requiredStores > n) return false;
        }
        return true;
    };

    let left = 1;
    let right = Math.max(...quantities);
    let result = right;

    while (left <= right) {
        const mid = Math.floor ((left + right) / 2);
        if (isPossible(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};


