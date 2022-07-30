//合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。


// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

// 提示：

// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];//如果没有区间，直接返回空数组
    intervals.sort((a,b) => a[0] - b[0]);//按照区间的起始位置排序 从小到大
    let res=[];
    let start = intervals[0][0];//初始化起始位置
    let end = intervals[0][1];//初始化结束位置
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= end){//如果区间的起始位置小于等于结束位置，说明区间重叠
            end = Math.max(end, intervals[i][1]);//更新结束位置
        }else{//如果区间的起始位置大于结束位置，说明区间不重叠
            res.push([start, end]);//添加到结果数组
            start = intervals[i][0];//更新起始位置
            end = intervals[i][1];//更新结束位置
        }
    }
    res.push([start, end]);//添加最后一个区间
    return res;

};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

