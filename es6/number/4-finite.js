//用于检查一个数值是否为有限的，即不是 Infinity
console.log(Number.isFinite(1))//true
console.log(Number.isFinite(0.1))

//NaN不是有限的
console.log(Number.isFinite(NaN))//false

console.log(Number.isFinite(Infinity))//false
console.log(Number.isFinite(-Infinity))//false

//Number.isFinite 没有隐式的Number()类型转换，所有非数值都返回false
console.log(Number.isFinite('foo'))//false
console.log(Number.isFinite('15'))//false
console.log(Number.isFinite(true))//false

//检查一个值是否为NaN
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN('true'/0))//true

//在全局的 isNaN() 中，以下皆为 true，因为在判断前会将非数值向数值转换
//而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
console.log(Number.isNaN("NaN"))//false
console.log(Number.isNaN(undefined))//false
console.log(Number.isNaN({}))//false
console.log(Number.isNaN("true"))//false

