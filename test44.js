//通配符匹配
// 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入:
// s = "aa"
// p = "*"
// 输出: true
// 解释: '*' 可以匹配任意字符串。
// 示例 3:

// 输入:
// s = "cb"
// p = "?a"
// 输出: false
// 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
// 示例 4:

// 输入:
// s = "adceb"
// p = "*a*b"
// 输出: true
// 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
// 示例 5:

// 输入:
// s = "acdcb"
// p = "a*c?b"
// 输出: false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //s,p长度
    let sLen = s.length;
    let pLen = p.length;
    // 如果p为空，则s也为空
    if (p === '') {
        return s === '';
    }
    //二维数组，存储s和p的状态
    let dp = new Array(sLen + 1);
    for (let i = 0; i < sLen + 1; i++) {
        dp[i] = new Array(pLen + 1);
    }
    //初始化dp数组
    for (let i = 0; i < sLen + 1; i++) {
        for (let j = 0; j < pLen + 1; j++) {
            dp[i][j] = false;
        }
    }
    s = ' '+ s;
    p = ' ' + p;
    dp[0][0] = true;
    for (let i = 0; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            //如果p[j]不是* 则dp[i][j] = dp[i-1][j-1] && (s[i] === p[j] || p[j] === '?')
            if (p[j] !== '*') {
                dp[i][j] = (i>0) && (j>0) && dp[i - 1][j - 1] && (s[i] === p[j] || p[j] === '?');
            } else {
                //如果p[j]是*，则dp[i][j] = dp[i][j-1] || dp[i-1][j]
                dp[i][j] = ((j>0) && dp[i][j - 1]) || ((i>0) && dp[i - 1][j]);
            }
        }
    }
    return dp[sLen][pLen];
};

console.log(isMatch('aa', 'aa'));