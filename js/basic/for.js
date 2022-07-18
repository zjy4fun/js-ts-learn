'use strict'

var o = {
    name: 'jack',
    age: 20,
    city: 'beijing'
}
for (var key in o) {
    if (o.hasOwnProperty(key)){
        console.log(key)
    }
}

console.log("=============")

var a = ['A', 'B', 'C']
for (var i in a) {
    console.log(i, a[i])
    if(typeof i == 'string') {
        console.log('string')
    }
    // console.log(a[i])
}

console.log("=============")
var arr = ['Bart', 'Lisa', 'Adam'];
var i = 0
while(i < arr.length) {
    console.log(arr[i])
    i++
}