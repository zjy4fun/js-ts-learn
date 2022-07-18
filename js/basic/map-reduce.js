'use strict'
function pow(x) {
    return x * x
}

var arr = [1,2,3,4,5,6,7,8,9]
var results = arr.map(pow)
console.log(results)

var strs = arr.map(String)
console.log(strs);

console.log("---------- reduce ---------")

var arr = [1,3,5,7,9]
var result = arr.reduce(function(x,y) {
    return x + y
})

console.log(result)

console.log("---------- reduce 求积---------")
function product(arr) {
    return arr.reduce(function(x,y) {
        return x * y
    })
}

// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}


var arr = [1,3,5,7,9]
var result = arr.reduce(function(x,y) {
    return x * 10 + y
})
console.log(result)
console.log("----------- string2int ------------")

function string2int(s) {
    return s.split('').map(x => x * 1).reduce((x,y)=>x*10+y)
}

var results = string2int('123')
console.log(results)

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}

console.log("------------- 首字母大写  ---------------")
function normalize(arr) {
    return arr.map(function (x) {
        return x.slice(0,1).toUpperCase() + x.slice(1, x.length).toLowerCase()
    })
}

if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}