'use strict'

console.log('key是字符串')
var myMap = new Map()
var keyString = "a string"

myMap.set(keyString, "和键'a string'关联的值")
console.log(myMap.get(keyString))//和键'a string'关联的值
console.log(myMap.get("a string"))//和键'a string'关联的值

console.log('key是对象')
var map1 = new Map()
var keyObj1 = {}
map1.set(keyObj1, "和键keyObj1关联的值")
console.log(map1.get(keyObj1))//和键keyObj1关联的值
console.log(map1.get({}))//undefined, 因为 keyObj1 !== {}

console.log('key是函数')
var map2 = new Map()
var keyFunc = function () {
}
map2.set(keyFunc, "和键keyFunc关联的值")
console.log(map2.get(keyFunc))//和键keyFunc关联的值
console.log(map2.get(function () {}))//undefined


console.log('key是NaN')
var map3 = new Map()
map3.set(NaN, "not a number")
console.log(map3.get(NaN))//not a number
var otherNaN = Number("foo")
console.log(map3.get(otherNaN))//not a number, 虽然NaN和任何值都不相等，但是作为Map的键来说是没有区别的

console.log('Map的迭代')
console.log('for...of')
var map4 = new Map()
map4.set(0, "zero")
map4.set(1, "one")

for(var [key,value] of map4) {
    console.log(key + " = " + value)
}
//entryies 方法返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组
for(var [key,value] of map4.entries()){
    console.log(key + " = " + value)
}

//遍历keys和values返回的都是Iterator对象，顺序是插入顺序
for(var key of map4.keys()){
    console.log(key)//0   1
}
for(var value of map4.values()){
    console.log(value)//zero   one
}

console.log('forEach')
var map5 = new Map()
map5.set(0, "zero")
map5.set(1, "one")

map5.forEach(function (value, key) {
    console.log(key + " = " + value)
}, map5)

console.log('Map与Array的转换')
var kvArray = [["key1", "value1"], ["key2", "value2"]]
//使用构造函数将一个二维数组转换成一个Map对象
var map6 = new Map(kvArray)
//使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
var outArray = Array.from(map6)

console.log('Map的克隆')
var map7 = new Map([["key1", "value1"], ["key2", "value2"]])
var map8 = new Map(map7)
console.log(map7 === map8)//false

console.log('Map的合并')
var first = new Map([[1, "one"], [2, "two"], [3, "three"]])
var second = new Map([[1, "uno"], [2, "dos"]])
//合并两个Map对象时，如果有重复的键值，则后面的会覆盖掉前面的，对应值即uno, dos, three
var merged = new Map([...first, ...second])
console.log(merged)//Map(3) { 1 => 'uno', 2 => 'dos', 3 => 'three' }




