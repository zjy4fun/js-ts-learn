//普通用法
let string = `Hello'\n'world`
console.log(string)
//多行字符串
let string1 = `Hey,
can you stop angry now?`
console.log(string1)
//变量
let name = "Mike"
let age = 27
let info = `My Name is ${name}, I am ${age+1} years old next year.`
console.log(info)
//字符串中调用函数
function f() {
    return "have fun"
}
let string2 = `Game Start, ${f()}`
console.log(string2)



