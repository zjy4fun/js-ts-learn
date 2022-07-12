const p = new Promise(function(resolve, reject) {
    resolve("success")
})

//通过 .then 形式添加的回调函数,无论什么时候,都会被调用
//then 方法将返回一个 resolved 或 rejected 状态的 Promise 对象用于链式调用,且 Promise 对象的值就是这个返回值
p.then(function(value) {
    console.log(value)
})

console.log("first")
/*
first
success
 */


//通过多次调用.then,可以添加多个回调函数, 他们会安好插入顺序并且独立运行
const p1 = new Promise(function(resolve, reject) {
    resolve(1)
}).then(function(value) {
    console.log(value)  //1
    return value * 2
}).then(function(value) {
    console.log(value)//2
    return Promise.resolve('resolve')
}).then(function(value) {//这里的value是字符串'resolve'
    console.log(value)
    return Promise.reject('reject')
}).then(function(value) {
    console.log('resolve: ' + value)
}, function(err) {
    //执行了
    console.log("reject: " + err)
})