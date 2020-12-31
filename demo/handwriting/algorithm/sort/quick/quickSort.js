const quickSort = (arr) => {
    if (arr.length <= 1) return arr
    let left = [], right = []
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]
    const equals = [pivot]
    arr.forEach(item => {
        if (item < pivot) {
            left.push(item)
        } else if (item > pivot) {
            right.push(item)
        } else {
            equals.push(item)
        }
    })
    const leftSorted = quickSort(left)
    const rightSorted = quickSort(right)
    return leftSorted.concat(equals, rightSorted)
}
export default quickSort
