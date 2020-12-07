/**
 * subject 1 :给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个整数，并返回他们的数组下标.
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 * 提示：求和问题都可以转化成求差问题
 * */ 

function twoSum (arr, target) {
    const log = new Map()
    const len = arr.length
    for (let index = 0; index < len; index++) {
        if (log.has(target - arr[index])) {
            return [log.get(target - arr[index]), index]
        } else {
            log.set(arr[index], index)
        }
    }
    return -1
}
console.log(twoSum(testDataDemo1, 13))