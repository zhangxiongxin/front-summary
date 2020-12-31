const arr = [1,2,3,4,5]
function randomArr(arr) {
    return arr.sort(() => {
        return (Math.random() - 0.5)
    })
}
// 洗牌算法
function shuffle(arr) {
    let length = arr.length,
        r      = length,
        rand   = 0;

    while (r) {
        rand = Math.floor(Math.random() * r--);
        [arr[r], arr[rand]] = [arr[rand], arr[r]];
    }
    return arr;
}
console.log(randomArr(arr))
console.log(shuffle(arr))
