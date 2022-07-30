// 跳跃游戏 II
// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。

// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:

// 输入: nums = [2,3,0,1,4]
// 输出: 2
// 提示:

// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 1000
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //当前跳跃能到达的最远距离    
    let max = 0;
    //上一次跳跃的最远距离
    let lastMax = 0;
    //跳跃次数
    let count = 0;
    for (let i = 0; i < nums.length-1; i++) {
        //当前跳跃能到达的最远距离
        max = Math.max(max, i+nums[i]);
        if (i === lastMax) {//当前位置是上一次跳跃的最远距离
            count++;//跳跃次数加1
            //更新上一次跳跃的最远距离
            lastMax = max;
        }
    }
    return count;
};
console.log(jump([2,3,0,1,4]));