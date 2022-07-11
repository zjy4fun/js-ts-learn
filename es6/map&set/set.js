let set1 = new Set()
set1.add(1)
set1.add(5)
set1.add(5)
set1.add("some text")
console.log(set1)//Set(3) { 1, 5, 'some text' }

var o = {a: 1, b: 2}
set1.add(o)
set1.add({a: 1, b: 2})
console.log(set1)//Set(5) { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }

console.log('类型转换')
var set2 = new Set(["value1", "value2", "value3"])
var array2 = [...set2]
console.log(array2)
var set3 = new Set('hello')
console.log(set3)//Set(4) { 'h', 'e', 'l', 'o' }

console.log('Set对象作用')
var set4 = new Set([1, 2, 3, 4, 4])
console.log([...set4])//[ 1, 2, 3, 4 ]

console.log('交集')
var a = new Set([1, 2, 3])
var b = new Set([4, 3, 2])
var intersect = new Set([...a].filter(x => b.has(x)))  //{2,3}
console.log(intersect)//Set(2) { 2, 3 }


console.log('差集')
var a1 = new Set([1, 2, 3])
var b1 = new Set([4, 3, 2])
var difference = new Set([...a].filter(x => !b.has(x)))
console.log(difference)//Set(1) { 1 }

console.log('并集')
var a2 = new Set([1, 2, 3])
var b2 = new Set([4, 3, 2])
var union = new Set([...a, ...b])
console.log(union)//Set(4) { 1, 2, 3, 4 }

console.log('练习：更新id信息，只对不存在的id进行更新')
var old_ids = [{
    id: 1,
    name: 'zhangsan'
},
    {
        id: 2,
        name: 'lisi'
    }]
var new_ids = [{
    id: 1,
    name: 'xiaoming'
},
    {
        id: 2,
        name: 'xiaohong'
    },
    {
        id: 3,
        name: 'wangwu'
    }]

var old_id_set = new Set(old_ids.map(obj => obj.id))
console.log(old_id_set)
var new_id_set = new Set(new_ids.map(obj => obj.id))
console.log(new_id_set)
var result = new Set([...new_ids].filter(obj => {
    return !old_id_set.has(obj.id)
}))

console.log(result)