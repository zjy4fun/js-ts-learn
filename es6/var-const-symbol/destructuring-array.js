// let [a,b,c] = [1,2,3]
// let [a,[[b], c]] = [1,[[2], 3]]
// let [a, ,b] = [1,2,3]

// 不完全解构
// let [a = 1,b] = []  //a = 1, b = undefined

// 剩余运算符
// let [a,...b] = [1,2,3]

// 字符串等
// let [a,b,c,d,e] = 'hello'
// console.log(a,b,c,d,e)

//解构默认值
//当解构模式由匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果
// let [a = 2] = [undefined]
// console.log(a)    //2
// let [a = 3, b = a] = []
// console.log(a,b)      //3 3
// let [a = 3, b = a] = [1]
// console.log(a,b)      //1 1
// let [a = 3, b = a] = [1, 2]
// console.log(a,b)      //1 2
