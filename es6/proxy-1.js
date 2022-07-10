// 在严格模式下, set代理如果没有返回true，就会报错
// 'use strict'
let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    get: function(target, key) {
        console.log('getting '+key);
        return target[key]; // 不是target.key
    },
    set: function(target, key, value) {
        console.log('setting '+key);
        target[key] = value;
    }
}
let proxy1 = new Proxy(target, handler)
console.log(proxy1.name)     // 实际执行 handler.get
proxy1.age = 25              // 实际执行 handler.set

let targetEpt = {}
let proxyEpt = new Proxy(targetEpt, handler)
console.log(proxyEpt.name)//undefined
proxyEpt.name = 'Tom'
console.log(proxyEpt.name)//Tom

console.log('通过构造函数新建实例时，其实是对目标对象进行了浅拷贝，因此目标对象与代理对象会互相影响')
let targetEmpty = {}
let proxyEmpty = new Proxy(targetEmpty, {})
proxyEmpty.name = 'Tom'
console.log(targetEmpty)


