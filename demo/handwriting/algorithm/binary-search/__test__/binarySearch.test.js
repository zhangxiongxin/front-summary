import binarySearch from "../binarySearch";
const arr1 = [1,2,4,6,8]
const arr2 = [1,2,2,6,7]
describe('binarySearch', () => {
    it('binarySearch', () => {
        const res1 = binarySearch(arr1, 1)
        expect(res1).toBe(0)
        const res2 = binarySearch(arr1, 4)
        expect(res2).toBe(2)
        const res3 = binarySearch(arr1, 18)
        expect(res3).toBe(-1)
        const res4 = binarySearch(arr2, 2)
        expect(res4).toBe(1)
    })
})
