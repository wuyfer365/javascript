//字符串相乘
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"

// 提示：

// 1 <= num1.length, num2.length <= 200
// num1 和 num2 只能由数字组成。
// num1 和 num2 都不包含任何前导零，除了数字0本身。
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = '';
    let len1 = num1.length;// num1长度
    let len2 = num2.length;// num2长度
    //定义一个int数组 存放结果 有len1+len2个元素
    let arr = new Array(len1+len2).fill(0);
    //num1和num2的每一位置相乘后放在arr中的位置为num1的位置+num2的位置
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            arr[i+j] += parseInt(num1[len1-i-1]) * parseInt(num2[len2-j-1]);// 将num1的每一位和num2的每一位相乘 并存放在arr中 位置为num1的位置+num2的位置
        }
    }
    console.log(arr);
    //把arr中数按倒序处理进位后的结果放在arr中
    for (let i = 0,carry=0; i < arr.length; i++) {
        arr[i] = arr[i] + carry;
        carry = Math.floor(arr[i]/10);
        arr[i] = arr[i]%10;
    }
    //把arr中的数字拼接成字符串,并去掉前导0,倒序拼接 //如0441去掉前导0后拼接成144  
    for (let i = arr.length-1; i >= 0; i--) {
        //处理前导0
        if(arr[i] === 0 && res === ''){
            continue;
        }
        res+=arr[i]+"";
    }
    return res?res:"0";
};
console.log(multiply('0','0'));