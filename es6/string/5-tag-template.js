//当模板字符串中带有变量，会将模板字符串参数处理成多个参数
function f(stringArr, ...values) {
    let result = ""
    for (let i = 0; i < stringArr.length; i++) {
        result += stringArr[i]
        if (values[i]) {
            result += values[i]
        }
    }
    return result
}
let name = "Mike"
let age = 27
console.log(f`My name is ${name}, I am ${age+1} years old next year.`)
