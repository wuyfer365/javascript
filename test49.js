//字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]

// 提示：

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] 仅包含小写字母
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};//存储每个字符串的排列顺序
    for (let i = 0; i < strs.length; i++) {//遍历每个字符串
        let str = strs[i];//当前字符串
        let key = str.split('').sort().join('');//排序后的字符串
        if (map[key]) {//如果map中存在该排列顺序 则将当前字符串添加到map中对应的数组中
            map[key].push(str);
        } else {//如果map中不存在该排列顺序 则将当前字符串添加到map中对应的数组中
            map[key] = [str];
        }
    }
    let result = [];//存储结果
    for (let key in map) {
        result.push(map[key]);//将map中的数组添加到结果数组中
    }
    return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));