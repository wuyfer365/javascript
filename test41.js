// 缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

// 示例 1：

// 输入：nums = [1,2,0]
// 输出：3
// 示例 2：

// 输入：nums = [3,4,-1,1]
// 输出：2
// 示例 3：

// 输入：nums = [7,8,9,11,12]
// 输出：1

// 提示：

// 1 <= nums.length <= 5 * 10^5
// -2^31 <= nums[i] <= 2^31 - 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {// 找到缺失的第一个正数
    let len = nums.length;// 数组长度
    let i = 0;// 循环指针
    while (i < len) {// 循环
        if (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {// 如果数组中的数字在数组范围内且不等于自己的下标
            //交换两个数字 nums[i] 和 nums[nums[i] - 1]
            let temp = nums[i];
            [nums[i], nums[temp-1]] = [nums[temp-1], nums[i]];
        } else {// 如果数组中的数字不在数组范围内或者等于自己的下标
            i++;
        }
    }
    for (let i = 0; i < len; i++) {// 循环 找到缺失的第一个正数
        if (nums[i] !== i + 1) {// 如果数组中的数字不等于自己的下标 说明找到了缺失的第一个正数
            return i + 1;
        }
    }
    return len + 1;// 如果没有找到缺失的第一个正数 说明数组中的数字都是正数
};
console.log(firstMissingPositive([3,4,-1,1]));