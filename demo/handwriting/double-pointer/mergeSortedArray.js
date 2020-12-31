const mergeSortedArray = function (arr1, arr2) {
    let m = arr1.length - 1, n = arr2.length - 1, k = arr1.length + arr2.length - 1
    while (m >= 0 && n >= 0) {
        if (arr2[n] >= arr1[m]) {
            arr1[k] = arr2[n]
            k--
            n--
        } else {
            arr1[k] = arr1[m]
            k--
            m--
        }
    }
    while (n >= 0) {
        arr1[k] = arr2[n]
        k--
        n--
    }
    return arr1
}
export default mergeSortedArray
