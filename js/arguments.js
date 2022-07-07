'use strict'
function foo(x) {
    console.log('x = ' + x)
    //arguments 永远指向当前函数调用者传入的所有参数
    for(var i = 0; i < arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i])
    }
}

foo(10,20,30)

function abs() {
    if(arguments.length == 0){
        return 0
    }
    var x = arguments[0]
    return x >= 0 ? x : -x
}
console.log(abs())
console.log(abs(10))
console.log(abs(-9))