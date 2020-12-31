const breadthFirstSearch = (rootNode, target) => {
    const queue = [rootNode]
    while (queue.length > 0) {
        const currentNode = queue.shift()
        if (currentNode.val === target) {
            return currentNode
        }
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    return -1
}
export default breadthFirstSearch
