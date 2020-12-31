import breadthFirstSearch from '../breadthFirstSearch'
const data = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        left: {
            val: 'F'
        },
        right: {
            val: 'G'
        }
    }
}
describe('breadthFirstSearch', () => {
    it('has', () => {
        const res1 = breadthFirstSearch(data, 'D')
        expect(res1).toEqual({
            val: 'D'
        })
        const res2 = breadthFirstSearch(data, 'B')
        expect(res2).toEqual({
            val: 'B',
            left: {
                val: 'D'
            },
            right: {
                val: 'E'
            }
        })
    })
    it('has not', () => {
        const res1 = breadthFirstSearch(data, 'H')
        expect(res1).toBe(-1)
    })
})
