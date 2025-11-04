// https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums: string | any[]) {
    var min = nums[0];
    var max_diff = -1;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]>min)
        {
            var cur = nums[i] - min;
            if(cur>max_diff) max_diff = cur;
        }
        else
        {
            min = nums[i]
        }

    }
    return max_diff
};

