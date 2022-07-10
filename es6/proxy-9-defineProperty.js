'use strict'
//需要开启严格模式才能看到效果
let handler = {
    defineProperty: function (target, propKey, propDesc) {
        console.log("handle defineProperty")
        return true
    }
}

let target = {}
let proxy = new Proxy(target, handler)
proxy.name = "Tom"
console.log(target)

let handler1 = {
    defineProperty: function(target, propKey, propDesc) {
        console.log("handle defineProperty")
        return false
    }
}
let target1 = {}
let proxy1 = new Proxy(target1, handler1)
proxy1.name = "Jerry"
console.log(target1)