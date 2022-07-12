for (var i = 0; i < 10; i++) {
    //循环里的setTimeout 是异步的，是在循环结束后才执行，所以此时的全局变量 i 为 10
    setTimeout(function () {
        console.log(i)//输出10*10
    })
}

for (let j = 0; j < 10; j++) {
    //j 是用 let 声明的，只在当前代码块中有效，每次循环的 j 都是一个新的变量，所以 setTimeout 中的 j 不是相同的
    //每次循环的 j 都是重新声明的，JavaScript 引擎内部会记住前一个循环的值
    setTimeout(function () {
        console.log(j)//输出0~9
    })
}

console.log(a);//ReferenceError: Cannot access 'a' before initialization
let a = 'apple'

console.log(b)//undefined
var b = 'banana'