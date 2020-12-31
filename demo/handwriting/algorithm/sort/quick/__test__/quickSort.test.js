import quickSort from '../quickSort'
describe('quickSort', () => {
    it('全部相等', () => {
        const res = quickSort([1,1,1,1])
        expect(res).toEqual([1,1,1,1])
    })

    it('已经有序', () => {
        const sorted = [1,2,3,5]
        const res = quickSort(sorted)
        expect(sorted).toEqual(sorted)
        // expect(res.toString()).toEqual('1,2,3,5')
    })

    it('无序', () => {
        const row = [3,1,5,2]
        const sorted = [1,2,3,5]
        const res = quickSort(row)
        expect(res).toEqual(sorted)
    })
})
