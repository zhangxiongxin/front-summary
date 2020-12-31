const throttle = (fn, wait) => {
    let needCallFlg = true
    return function () {
        if (!needCallFlg) return
        setTimeout(() => {
            fn.apply(this, arguments)
            needCallFlg = true
        }, wait)
    }
}
export default throttle
