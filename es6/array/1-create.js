console.log(Array.of(1, 2, 3, 4))
console.log(Array.of(1, '2', true))
console.log(Array.of())

console.log(Array.from([1, 2]))
console.log(Array.from([1, , 3]))//[ 1, undefined, 3 ]

//Array.from(arrarLike[,mapFn[,thisArg]])

//想要转换的类数组对象或可迭代对象
console.log(Array.from([1, 2, 3]))//[1,2,3]
//map函数，用于对每个元素进行处理，放入数组的是处理后的元素
console.log(Array.from([1, 2, 3], (n) => n * 2))//[2,4,6]
//thisArg 可选，用于指定 map 函数执行时的 this 对象
let map = {
    do: function (n) {
        return n * 2
    }
}
let arrayLike = [1, 2, 3]
console.log(Array.from(arrayLike, function (n) {
    return this.do(n)
}, map))

console.log("类数组对象")
console.log("一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符")
let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
})
console.log(arr)

console.log("元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组")
let array1 = Array.from({
    a:1,
    b:2,
    length:2
})
console.log(array1)//[ undefined, undefined ]

console.log("转换可迭代对象")
console.log("转换map")
let map2 = new Map()
map2.set('key0', 'value0')
map2.set('key1', 'value1')
console.log(Array.from(map2))// [ [ 'key0', 'value0' ], [ 'key1', 'value1' ] ]
console.log("转换set")
let arr2 = [1,2,3]
let set = new Set(arr2)
console.log(Array.from(set))// [ 1, 2, 3 ]
console.log("转换字符串")
let str3 = 'abc'
console.log(Array.from(str3))//[ 'a', 'b', 'c' ]