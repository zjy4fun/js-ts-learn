//从全局移植到Number对象的方法
//1. Number.parseInt()

//不指定进制时默认为 10 进制
console.log(Number.parseInt("12.34"))//12

//指定进制
console.log(Number.parseInt('0011', 2))//3

//与全局的 parseInt() 函数是同一个函数
console.log(Number.parseInt=== parseInt)//true

//2. Number.parseFloat()
console.log(Number.parseFloat('123.45'))//123.45
console.log(Number.parseFloat('123.45abc'))//123.45

//无法被解析成浮点数，返回 NaN
console.log(Number.parseFloat('abc'))//NaN

//与全局的 parseFloat() 方法是同一个方法
console.log(Number.parseFloat === parseFloat)//true

//3. Number.isInteger()
console.log(Number.isInteger(0))//true
//JavaScript 内部，整数和浮点数采用的是同样的存储方法，因此 1 和 1.0 被视为相同的值
console.log(Number.isInteger(1))//true
console.log(Number.isInteger(1.0))//true
console.log(1 === 1.0) //true

console.log(Number.isInteger(1.1))//false
console.log(Number.isInteger(Infinity))//false
console.log(Number.isInteger(-Infinity))//false

console.log(Number.isInteger("10"))//false
console.log(Number.isInteger(true))//false
console.log(Number.isInteger(false))//false
console.log(Number.isInteger([1]))//false

//数值的精度超过 53 个二进制位时，由于第 54 位及后面的位被丢弃，会产生误判
console.log(Number.isInteger(1.0000000000000000001))//true
//一个数值的绝对值小于Number.MIN.VALUE(5E-324)，即小于 JavaScript能够分辨的最小值，会被自动转为 0，也会产生误判
console.log(Number.isInteger(5E-324))//false
console.log(Number.isInteger(5E-325))//true

//4. Number.isSafeInteger()
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1))//false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))//false