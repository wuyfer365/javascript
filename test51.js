// N 皇后
// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 示例 1：


// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。
// 示例 2：

// 输入：n = 1
// 输出：[["Q"]]

// 提示：

// 1 <= n <= 9
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    path = new Array(n);
    col = new Array(n);
    diag1 = new Array(2 * n);
    diag2 = new Array(2 * n);
    res = [];
    //初始化棋盘
    for (let i = 0; i < n; i++) {
        path[i] = [];
        for (let j = 0; j < n; j++) {
            path[i][j] = ".";
        }
    }
    //初始化列
    for (let i = 0; i < n; i++) {
        col[i] = false;
    }
    for (let i = 0; i < 2 * n; i++) {
        diag1[i] = false;
    }
    //初始化对角线2
    for (let i = 0; i < 2 * n; i++) {
        diag2[i] = false;
    }
    dfs(0, n);
    return res;
}

function dfs(x, n) {
    if (x == n) {
        //path转化为字符串
        path2=[]
        for (let i = 0; i < n; i++) {
            let str = "";
            for (let j = 0; j < n; j++) {
                str += path[i][j];
            }
            path2.push(str);
        }

        res.push(path2);
        return;
    }
    for (let y = 0; y < n; y++) {
        if (col[y] || diag1[y - x + n] || diag2[y + x]) {
            continue;
        }

        col[y] = diag1[y - x + n] = diag2[y + x] = true;
        path[x][y] = "Q";
        dfs(x + 1, n);
        path[x][y] = ".";
        col[y] = diag1[y - x + n] = diag2[y + x] = false;
    }
}
console.log(solveNQueens(4));
