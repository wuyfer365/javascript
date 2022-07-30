//接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9
//  

// 提示：

// n == height.length
// 1 <= n <= 2 * 10^4
// 0 <= height[i] <= 10^5
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;// 左边指针
    let right = height.length - 1;// 右边指针
    let leftMax = 0;// 左边最大值
    let rightMax = 0;// 右边最大值
    let res = 0;// 结果
    while (left < right) {
        //更新左右指针最大值 
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        //如果左指针最大值比右指针最大值小,则以左边最大值为基准
        if (leftMax < rightMax) {
            res += leftMax - height[left];
            left++;
        } else {
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));