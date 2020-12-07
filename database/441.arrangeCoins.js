/**
 * 
 * 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
给定一个数字 n，找出可形成完整阶梯行的总行数。
n 是一个非负整数，并且在32位有符号整型的范围内。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/arranging-coins
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。} n 
 */
function arrangeCoins(n) {
  let sum = 0
  let idx = 1
  while (sum <= n) {
    sum = sum + idx
    idx++
  }
  return idx - 2
}
// 迭代法
function arrangeCoins2(n) {
  let i = 1;
  while (n >= i) {
      n -= i;
      i++;
  }
  return i - 1;
}
// 二分法
function arrangeCoins3(n) {
  let i = 1;
  while (n >= i) {
      n -= i;
      i++;
  }
  return i - 1;
}
function pow(x, n) {
  let res = 1;
  for(let i = n; i !== 0; i /= 2){
      if(i % 2 !== 0){
          res *= x;
      }
      x *= x;
  }
  return  n < 0 ? 1 / res : res;
}
console.log(pow(2, 3))