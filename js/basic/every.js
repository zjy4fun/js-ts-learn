'use strict'
console.log("every方法可以判断数组的所有元素是否满足测试条件")

var arr = ['Apple', 'pear', 'orange']
console.log(arr.every(function(s) {
    return s.length > 0
}))

console.log(arr.every(function (s){
    return s.toLowerCase() === s
}))