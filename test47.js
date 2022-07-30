//全排列 II
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 提示：

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10
// 来源：力扣（LeetCode）

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    //初始化结果数组
    let result = [];
    //一种排列的数组
    let temp = [];
    //是否访问过的标志
    let visited = [];
    //初始化标志数组
    for (let i = 0; i < nums.length; i++) {
        visited[i] = false;
    }
    //排序nums 数组 从小到大
    nums.sort((a, b) => a - b);
    //递归,传入数组，访问的数组长度
    backtrack(nums, 0, result, temp, visited);
    return result;
};
//递归函数
function backtrack(nums, index, result, temp, visited) {
    
    if (index === nums.length) {
        result.push(temp.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        //如果当前数组元素未访问过，则将其加入临时数组
        if (!visited[i]) {
            //如果当前数字与前一个数字相同且前一个数字未访问过，则跳过
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
                continue;
            }
            temp.push(nums[i]);
            visited[i] = true;
            //递归
            backtrack(nums, index + 1, result, temp, visited);
            //将其移除
            temp.pop();
            visited[i] = false;
        }
    }
}
console.log(permuteUnique([1, 1, 2]));