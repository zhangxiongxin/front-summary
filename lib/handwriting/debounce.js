/*
* 防抖技术仅靠传入延迟时间值的大小控制高频事件的触发频率，如果传入的延迟时间值比较大，那么就会出现一定的问题。例如当传入延迟时间为1000ms，那么当用户滚动速度大于1000ms/次时，则无论鼠标滚动多久都不会触发事件处理函数。
* @param    fn              Function    事件处理函数
* @param    delay           Number      延迟时间
* @param    isImmediate     Boolean     是否滚动时立刻执行
* @return   Function                    事件处理函数
*/
var debounce = function (fn, delay, isImmediate) {
    //使用闭包，保存执行状态，控制函数调用顺序
    var timer;
    return function () {
        var _args = [].slice.call(arguments),
            context = this;
        clearTimeout(timer);
        var _fn = function () {
            timer = null;
            if (!isImmediate) fn.apply(context, _args);
        };
        //是否立刻执行
        var callNow = !timer && isImmediate;
        timer = setTimeout(_fn, delay);
        if (callNow) fn.apply(context, _args);
    }
}