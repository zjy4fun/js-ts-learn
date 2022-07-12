function *func() {
    console.log("one")
    yield '1'
    console.log("two")
    yield '2'
    console.log("three")
    return '3'
}

let f = func()
f.next()//one
f.next()//two
f.next()//three


function *sendParameter() {
    console.log("start")
    var x = yield '2'
    console.log("one:" + x)
    var y = yield '3'
    console.log("two: " + y)
    console.log("total: "+ (x + y))
}

let f1 = sendParameter()
f1.next()
f1.next()
f1.next()

/*
start
one:undefined
two: undefined
total: NaN
 */

let f2 = sendParameter()
//next里面的参数传给了yield的返回值
f2.next(10)
f2.next(20)
f2.next(50)
/*
start
one:20
two: 50
total: 70
 */

function *foo(){
    yield 1
    yield 2
    yield 3
}

var f3 = foo()
console.log(f3.next())//{ value: 1, done: false }
console.log(f3.return("foo"))//{ value: 'foo', done: true }
console.log(f.next())//{ value: undefined, done: true }

var g = function *(){
    try{
        yield
    }catch (e) {
        console.log("catch inner", e)
    }
}
var i = g()
console.log(i.next())

try {
    i.throw('a')
    i.throw('b')
}catch (e){
    console.log('catch outside', e)
}
/*
catch inner a
catch outside b

遍历器对象抛出了两个错误, 一个被Generator函数内部捕获, 第二个因为函数体内部的catch函数已经执行过了, 不会再捕获这个错误, 所以这个错误就抛出了Generator函数体,被函数体外的catch捕获
 */


