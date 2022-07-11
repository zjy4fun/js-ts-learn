// es6在Math对象上新增了17个数学相关的静态方法，这些方法只能在Math中调用

//1. Math.cbrt() 计算一个数的立方根
console.log(Math.cbrt(1))//1
console.log(Math.cbrt(0))//0
console.log(Math.cbrt(-1))//-1
//会对非数值进行转换
console.log(Math.cbrt('1'))//1

console.log(Math.cbrt('hhh'))//NaN

//2. Math.imul() 两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数
console.log(Math.imul(1, 2))//2
console.log(Math.imul(0x7fffffff, 0x7fffffff))//1

console.log(0x7fffffff)//2147483647

//3. Math.hypot() 用于计算所有参数的平方和的平方根
console.log(Math.hypot(3, 4))//5
// 非数值会先被转换为数值后进行计算
console.log(Math.hypot(1, 2, '3'))
console.log(Math.hypot(true))//1
console.log(Math.hypot(false))//0

console.log(Math.hypot(Infinity))//Infinity
console.log(Math.hypot(-Infinity))//Infinity

//参数中存在无法转换为数值的参数时返回NaN
console.log(Math.hypot(NaN))//NaN
console.log(Math.hypot(3, 4, 'foo'))//NaN
console.log(Math.hypot({}))//NaN

//4. Math.clz32() 用于返回数字的32位无符号整数形式的前导 0 的个数
console.log(Math.clz32(0))//32
console.log(Math.clz32(1))//31

//当参数为小数时，只考虑整数部分
console.log(Math.clz32(0.5))//32
//对于空值或非数值，会转化为数值再进行计算
console.log(Math.clz32('1'))//31
console.log(Math.clz32())//32
console.log(Math.clz32([]))//32
console.log(Math.clz32({}))//32
console.log(Math.clz32(NaN))//32
console.log(Math.clz32(Infinity))//32
console.log(Math.clz32(-Infinity))//32
console.log(Math.clz32(undefined))//32
console.log(Math.clz32('hhh'))//32

//5. Math.trunc() 数字处理
console.log(Math.trunc(12.3))//12
console.log(Math.trunc(12))//12
//整数部分为 0 时也会判断符号
console.log(Math.trunc(-0.5))//-0
console.log(Math.trunc(0.5))//0
console.log(0 === -0)//true
console.log(Math.trunc("12.3"))//12
console.log(Math.trunc())//NaN
console.log(Math.trunc(NaN))//NaN
console.log(Math.trunc("hhh"))//NaN
console.log(Math.trunc("123.3hhh"))//NaN

//6. Math.found() 用于获取数字的 32 位单精度浮点数形式
console.log(Math.fround(-(2 ** 24) + 1))//-16777215
console.log(Math.fround(2 ** 24 - 1))//16777215
//将64位双精度浮点数转为32位单精度浮点数
console.log(Math.fround(1.234))//1.2339999675750732
//当小数的精度超过 24 个二进制位，会丢失精度
console.log(Math.fround(0.3))//0.30000001192092896
console.log(Math.fround(NaN))//NaN
console.log(Math.fround(Infinity))//Infinity
//参数为其他类型时会将参数进行转换
console.log(Math.fround('5'))//5
console.log(Math.fround(true))//1
console.log(Math.fround(null))//0
console.log(Math.fround([]))//0
console.log(Math.fround({}))//NaN

//7. Math.sign() 判断数字的正负号
console.log(Math.sign(1))//1
console.log(Math.sign(-1))//-1
console.log(Math.sign(0))//0
console.log(Math.sign(-0))//-0
console.log(Math.sign('1'))//1
console.log(Math.sign('-1'))//-1
console.log(Math.sign(NaN))//NaN
console.log(Math.sign('hhh'))//NaN

//8. Math.expm1()  Math.log1p(x) Math.log10(x) Math.log2() 对数方法
//计算e的x次方减1的结果
console.log(Math.expm1(1))//1.718281828459045
console.log(Math.expm1(0))//0
console.log(Math.expm1(-1))//-0.6321205588285577
console.log(Math.expm1('0'))//0
console.log(Math.expm1(NaN))//NaN
//计算1+x的自然对数，即Math.log(1+x)
console.log(Math.log1p(1))//0.6931471805599453
console.log(Math.log1p(0))//0
console.log(Math.log1p(-1))//-Infinity
console.log(Math.log1p(-2))//NaN
//计算以10为底的x的对数
console.log(Math.log10(1))//0
console.log(Math.log10('1'))//0
console.log(Math.log10(0))//-Infinity
console.log(Math.log10(-1))//NaN

//9. 指数运算符
console.log(1 ** 2)//1
//右结合
console.log(2 ** 2 ** 3)//256
let exam = 2
console.log(exam **= 2)//4

