//基本
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
// console.log(foo, bar)    //aaa bbb
// foo = 'aaa'

// let { baz : foo } = { baz : 'ddd' };
// console.log(foo)            //ddd

//可嵌套可忽略
// let obj = {p: ['hello', {y: 'world'}]}
// let {p: [x, {y}]} = obj
// console.log(x,y)  //hello world
//
// let obj = {p: ['hello', {y: 'world'}]}
// let {p: [x, { }]} = obj
// console.log(x)   //hello

//不完全解构
// let obj = {p: [{y:'world'}]}
// let {p: [{y},x]} = obj
// console.log(x,y)  //undefined world

//剩余运算符
// let {a,b,...rest} = {a:10, b: 20, c: 30, d: 40}
// console.log(a,b) //10  20
// console.log(rest)//{c: 30, d: 40}

//解构默认值
// let {a = 10, b = 5} = {a : 3}
// console.log(a,b)//3 5
// let {a: aa = 10, b: bb = 5} = {a : 3}
// console.log(aa,bb)//3 5