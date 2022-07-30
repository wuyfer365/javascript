// N皇后 II
// n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    col = new Array(n);
    diag1 = new Array(2 * n);
    diag2 = new Array(2 * n);
    res = 0;
    
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
        res++;
        return;
    }
    for (let y = 0; y < n; y++) {
        if (col[y] || diag1[y - x + n] || diag2[y + x]) {
            continue;
        }

        col[y] = diag1[y - x + n] = diag2[y + x] = true;
        dfs(x + 1, n);
        col[y] = diag1[y - x + n] = diag2[y + x] = false;
    }
}
console.log(totalNQueens(4));