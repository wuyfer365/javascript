//螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。


// 示例 1：


// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：


// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length==0){
        return [];
    }
    let ret=[];
    let row=matrix.length;//行数
    let col=matrix[0].length;//列数
    let left=0;//左边界
    let right=col-1;//右边界
    let top=0;//上边界
    let bottom=row-1;//下边界
    while(left<=right&&top<=bottom){
        for(let i=left;i<=right;i++){//从左到右
            ret.push(matrix[top][i]);//上边界的行 从左到右
        }
        top++;//上边界+1
        if(top>bottom){
            break;
        }
        for(let i=top;i<=bottom;i++){//从上到下
            ret.push(matrix[i][right]);//右边界的列 从上到下
        }
        right--;//右边界-1
        if(left>right){
            break;
        }
        for(let i=right;i>=left;i--){//从右到左
            ret.push(matrix[bottom][i]);//下边界的行 从右到左
        }
        bottom--;//下边界-1
        if(top>bottom){
            break;
        }
        for(let i=bottom;i>=top;i--){//从下到上
            ret.push(matrix[i][left]);//左边界的列 从下到上
        }
        left++;//左边界+1
    }
    return ret;//返回结果

};
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));