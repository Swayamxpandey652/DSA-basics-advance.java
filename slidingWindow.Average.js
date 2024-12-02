/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentSum = nums.slice(0,k).reduce((sum,num)=>sum+num,0);
    let maxSum = currentSum;

    for(let i=k;i<nums.length;i++){
        currentSum = currentSum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum/k.toFixed(5);
};
