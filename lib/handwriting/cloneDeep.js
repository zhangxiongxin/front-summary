// 基础班，仅支持对象
function cloneDeep1(target) {
    let res = {}
    if (typeof target !== 'object') return target
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            res[key] = cloneDeep1(target[key])
        }
    }
}

export {
    cloneDeep1 as cloneDeep
}