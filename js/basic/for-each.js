'use strict'
var a = ["A", "B", "C"]
a.forEach(function (element, index, array) {
    //element 指向当前元素
    //index 指向当前索引
    // array指向Array对象本身
    console.log(element + ', index = ' + index)
    console.log(array[index])
})

console.log("--------------------------")

var s = new Set(['A', 'B', 'C'])
s.forEach(function (element, sameElement, set) {
    console.log(element, sameElement)
})

console.log("--------------------------")

var m = new Map([[1, 'X'], [2, 'y'], [3, 'z']])
m.forEach(function (value, key, map) {
    console.log(key, value)
})

console.log("--------------------------")

a.forEach(function(element) {
    console.log(element)
})