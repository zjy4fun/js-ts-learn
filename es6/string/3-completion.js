console.log("h".padStart(5, "o"))
console.log("h".padEnd(5, "o"))
console.log("h".padStart(5))
//如果指定的长度小于或者等于原字符串的长度，则返回原字符串
console.log("hello".padStart(5, "A"))
//如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串
console.log("hello".padEnd(10, ",world"))//hello,worl
//常用于补全位数
console.log("123".padStart(10, "0"))//0000000123
