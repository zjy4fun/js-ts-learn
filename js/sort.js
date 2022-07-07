'use strict'

var arr = [10, 20, 1, 2]
arr.sort(function(x,y) {
    if(x < y) {
        return -1;
    }
    if(x > y){
        return 1
    }
    return 0
})

console.log(arr)

console.log("sort返回的array也是原来的array")

var a1 = ['B', 'A', 'C']
var a2 = a1.sort()
console.log(a1)
console.log(a2)
console.log(a1 == a2)