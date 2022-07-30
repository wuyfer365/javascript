//螺旋矩阵 II
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

// 示例 1：


// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]

// 提示：

// 1 <= n <= 20
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let left=0;
    let right=n-1;
    let top=0;
    let bottom=n-1;
    let res=[];
    //初始化res
    for(let i=0;i<n;i++){
        res[i]=[];
    }
    let num=1;
    while(true){
        for(let i=left;i<=right;i++){
            res[top][i]=num++;
        }
        top++;
        if(top>bottom)break;
        for(let i=top;i<=bottom;i++){
            res[i][right]=num++;
        }
        right--;
        if(left>right)break;
        for(let i=right;i>=left;i--){
            res[bottom][i]=num++;
        }
        bottom--;
        if(top>bottom)break;
        for(let i=bottom;i>=top;i--){
            res[i][left]=num++;
        }
        left++;
        if(left>right)break;
    }
    return res;

};

console.log(generateMatrix(3));
