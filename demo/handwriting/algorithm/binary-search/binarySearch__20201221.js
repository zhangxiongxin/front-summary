// 要求返回第一个匹配到的索引
const binarySearch = (arr, target) => {
    let l = -1, r = arr.length
    const isBlue = item => item < target
    while (l + 1 !== r) {
        const m = Math.floor((l + r) / 2)
        if (isBlue(arr[m])) {
            l = m
        } else {
            r = m
        }
    }
    return arr[l + 1] === target ? l + 1 : -1
}
export default binarySearch
