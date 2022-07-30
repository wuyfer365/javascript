//排列序列
// 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 示例 1：

// 输入：n = 3, k = 3
// 输出："213"
// 示例 2：

// 输入：n = 4, k = 9
// 输出："2314"
// 示例 3：

// 输入：n = 3, k = 1
// 输出："123"

// 提示：

// 1 <= n <= 9
// 1 <= k <= n!
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let fact = [];
    //初始化阶乘数组
    for (let i = 0; i < n; i++) {
        fact.push(1);
        for (let j = 1; j <= i; j++) {
            fact[i] *= j;
        }
    }
    let ret = "";
    let used = [];
    for (let i = 0; i < n; i++) {//初始化已使用数组
        used.push(false);
    }
    for (let i = 0; i < n; i++) {//按顺序添加数字
        let cnt = fact[n - i - 1];//当前数字开始的阶乘 
        for (let j = 1; j <= n; j++) {//按顺序添加数字
            if (used[j]) continue;//如果已使用，跳过
            if (k > cnt) {//如果k大于阶乘，跳过 k-=cnt 将k设置为剩余的k 
                k -= cnt;
            } else {//如果k小于等于阶乘，添加数字
                //把int转为char 并加入ret
                ret += j.toString();
                used[j] = true;//标记已使用
                break;//跳出循环 
            }
        }
    }
    return ret;
};
console.log(getPermutation(3, 3));
