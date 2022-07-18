'use strict'

function foo() {
    var x = 'Hello, ' + y
    console.log(x)
    var y = 'Bob' //js引擎自动提升了变量 y 的声明，但不会提升变量 y 的赋值
}

function foo1() {
    var y;//变量提升
    var x = 'Hello, ' + y
    console.log(x)
    y = 'Bob'
}
foo()//Hello, undefined
foo1()