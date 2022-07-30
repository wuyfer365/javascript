//全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
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
    //递归,传入数组，访问的数组长度
    backtrack(nums, 0, result, temp, visited);
    return result;
};
//递归函数
function backtrack(nums, index, result, temp, visited) {
    //如果已经访问过的数组长度等于数组长度，则将其加入结果数组
    if (index === nums.length) {
        result.push(temp.slice());
        return;
    }
    //遍历数组
    for (let i = 0; i < nums.length; i++) {
        //如果当前数组元素未访问过，则将其加入临时数组
        if (!visited[i]) {
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
console.log(permute([0,1]));