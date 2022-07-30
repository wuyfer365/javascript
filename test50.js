//Pow(x, n)
// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，x^n ）。

// 示例 1：

// 输入：x = 2.00000, n = 10
// 输出：1024.00000
// 示例 2：

// 输入：x = 2.10000, n = 3
// 输出：9.26100
// 示例 3：

// 输入：x = 2.00000, n = -2
// 输出：0.25000
// 解释：2^-2 = 1/2^2 = 1/4 = 0.25

// 提示：

// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// -10^4 <= x^n <= 10^4

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    if (n % 2 === 0) {
        return myPow(x * x, Math.floor(n / 2));
    }
    return x * myPow(x * x, Math.floor(n / 2));
};
console.log(myPow(2, 3));