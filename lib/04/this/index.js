function animal() {}
animal.prototype.title = 'animal'
animal.prototype.age = 2
animal.prototype.sayHi = function () {
  console.log(this.title, this.age)
}

function func() {
  let animal1 = new animal()
  animal1.sayHi()
}
func.prototype.title = 'func'
func()

/**
 * this指向什么？
 * 1.函数作为方法调用: 当前对象
 */
let obj = {
  name: 'len',
  sayName: function(num) {
      console.log(this, num)
  }
}
obj.sayName()
/**
 * 2.new 关键字调用: 空对象 {}
 */

new obj.sayName()

/**
 * 3.apply,call,bind 第一个参数
 */

obj.sayName.call({name: 'call'}, 1)

/**
 * 4.全局对象
 */
function foo() {
  console.log(this)
}

// foo() // Window{}

/**
 * 5.闭包中的this
 */
name = 'window'
let object = {
    name: 'len',
    sayName: function() {
        return function() {
            return this.name
        }
    }
}

console.log(222, object.sayName()()) // window

/**
 * 6.es6中的this
 * es6保留的是父级作用域中的this
 */

 /**
  * 7.setTimeout中的this
  * 7.1 浏览器端指向window
  * 7.2 node 指向Timeout对象
  */
 name2 = 'setTimeout'
 let obj3 = {
  name: 'len',
  sayName: function(num) {
    setTimeout(function () {
      console.log(this, 'setTimeout')
    }, 100)
  }
}
obj3.sayName()

/**
 * 实践题目1
 * 
 */
const obj2 = {
  value: 'hi',
  printThis: function() {
      console.log(this)
  }
}
const print = obj2.printThis

// 规则1，this指向的就是obj
obj2.printThis()  // {value: 'hi', printThis: f} 
// 规则4，this指向的就是Window
print() // Window {}


