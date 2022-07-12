console.log("find 查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素")
let arr = Array.of(1, 2, 3, 4)
console.log(arr.find(item => item > 2)) //3
console.log("数组空位处理为 undefined")
console.log([, 1].find(n => true))//undefined

console.log("findIndex 查找数组中符合条件的元素索引，若有多个符合条件的元素，返回第一个元素索引")
let arr2 = Array.of(1, 2, 1, 3)
console.log(arr2.findIndex(item => item === 2))//1
console.log([, 1].findIndex(n => true))//0

console.log("fill 将一定范围索引内的数组元素内容填充为单个指定的值")
let arr3 = Array.of(1, 2, 3, 4)
//参数1：用来填充的值
//参数2：被填充的起始索引
//参数3（可选）：被填充的结束索引，默认为数组末尾
console.log(arr3.fill(0, 1, 2))//[ 1, 0, 3, 4 ]

console.log("copyWithin 将一定范围索引内的数组元素修改为此数组另一指定范围索引的元素")
console.log([1, 2, 3, 4].copyWithin(0, 2, 4))
console.log([1, 2, 3, 4].copyWithin(-2, 0))//[ 1, 2, 1, 2 ]
console.log([1, 2, 3, 4].copyWithin(-2, 1))//[ 1, 2, 2, 3 ]
console.log([1, 2, , 4].copyWithin(0, 2, 4))//[, 4, 4]

console.log("entries 遍历键值对")
for (let [key, value] of ['a', 'b'].entries()) {
    console.log(key, value)
}
/*
* 0 a
* 1 b
* */
let entries = ['a', 'b'].entries()
console.log(entries.next().value) // [0, 'a']
console.log(entries.next().value) // [1, 'b']
//数组含空位
console.log([...[, 'a'].entries()])// [ [0, undefined], [1, 'a'] ]

console.log("keys 遍历键名")
for (let key of ['a', 'b'].keys()) {
    console.log(key)
}//0 1
//数组含空位
console.log([...[, 'a'].keys()])//[0, 1]

console.log("value 遍历键名")
for (let value of ['a', 'b'].values()) {
    console.log(value)
}//a  b
console.log([...[, 'a'].values()])//[undefined, 'a']

console.log("includes 是否包含指定值")
console.log([1, 2, 3].includes(1))//true
//第二个参数表示搜索的起始索引
console.log([1, 2, 3].includes(1, 2))//false
console.log([1, NaN, 3].includes(NaN))//true

console.log("flat 嵌套数组转一维数组")
console.log([1, [2, 3]].flat())//[1,2,3]
//指定嵌套的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2))//[ 1, 2, 3, [ 4, 5 ] ]
//不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity))//[ 1, 2, 3, 4, 5 ]
//自动跳过空位
console.log([1, [2, , 3]].flat())//[1,2,3]
console.log("flatMap 先对数组中每个元素进行处理，再对数组执行flat方法")
//参数1：遍历函数，该遍历函数可接收三个参数：当前元素，当前元素索引，原数组
//参数2：指定遍历函数中 this 的指向
console.log([1, 2, 3].flatMap(n => [n * 2]))//[2,4,6]

