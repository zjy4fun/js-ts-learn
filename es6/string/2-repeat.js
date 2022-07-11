'use strict'
console.log("Hello,".repeat(2))//Hello,Hello,
console.log("Hello,".repeat(3.2))//Hello,Hello,Hello,
console.log("Hello,".repeat(-0.5))//""
console.log("Hello,".repeat(NaN))//""
//如果重复次数是负数或者Infinity，会报错
//console.log("Hello,".repeat(-1))
console.log("Hello,".repeat("hh"))
console.log("Hello,".repeat("2"))