function* callee(){
    console.log("callee: " + (yield ))
}
function* caller(){
    while(true){
        //返回一个遍历器对象, 用于在一个Generator函数里面调用另一个Generator函数
        yield* callee()
    }
}

const callerObj = caller()
console.log(callerObj.next())
console.log(callerObj.next("a"))
console.log(callerObj.next("b"))
/*
{ value: undefined, done: false }
callee: a
{ value: undefined, done: false }
callee: b
{ value: undefined, done: false }
 */

// 上面的代码等价于
function* caller2(){
    while(true){
        for(var value of callee()){
            yield value
        }
    }
}

console.log("等价于")

const callerObj2 = caller2()
console.log(callerObj2.next())
console.log(callerObj2.next("a"))
console.log(callerObj2.next("b"))

