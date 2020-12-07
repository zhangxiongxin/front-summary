const CN_FLAG = 1
const EN_FLAG = 2
const BOST_CN_EN = CN_FLAG | EN_FLAG

let bitmark1 = CN_FLAG
let bitmark2 = EN_FLAG
let bitmark3 = CN_FLAG | EN_FLAG
const needCn = bitmark1 & CN_FLAG
const needEn = bitmark2 & EN_FLAG
const needCn2 = bitmark3 & CN_FLAG
const needBoth = (bitmark2 & CN_FLAG) && (bitmark2 & EN_FLAG)
console.log(needBoth)