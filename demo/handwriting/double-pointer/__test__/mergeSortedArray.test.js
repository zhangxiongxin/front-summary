import mergeSortedArray from '../mergeSortedArray'
const arr1 = [1,3,6,8]
const arr2 = [9,10]
const res_arr1_arr2 = '1,3,6,8,9,10'
describe('mergeSortedArray', () => {
    it('arr2先遍历结束', () => {
        const res1 = mergeSortedArray(arr1, arr2)
        expect(res1.toString()).toBe(res_arr1_arr2)
    })
})
