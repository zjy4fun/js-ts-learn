console.log("通过数组缓冲区生成")
let buffer = new ArrayBuffer(10)
view = new Int8Array(buffer)
console.log(view.byteLength)//10

console.log("通过构造函数")
let view2 = new Int32Array(10)
console.log(view2.byteLength)//40
console.log(view2.length)//10

//不传参则默认长度为0, 这种情况下数组缓冲区分配不到空间, 创建的定型数组不能用来保存数据
let view3 = new Int32Array()
console.log(view3.byteLength)//0
console.log(view3.length)//0

//可接受参数包括定型数组, 可迭代对象, 数组, 类数组对象
let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
})

let view4 = new Int16Array([1,2]),
    view5 = new Int32Array(view4),
    view6 = new Int16Array(new Set([1,2,3])),
    view7 = new Int16Array([1,2,3]),
    view8 = new Int16Array(arr);

console.log(view4.buffer === view5.buffer)//false
console.log(view6.byteLength)//6
console.log(view7.byteLength)//6
console.log(view8.byteLength)//6

console.log("注意:length属性不可写")
console.log("定型数组可使用entries,keys,values来进行迭代")
let view9 = new Int16Array([1,2])
for (let [k,v] of view9.entries()){
    console.log(k,v)
}

let view10 = new Int16Array([1,2])
console.log(view10.find(n => n > 1))//2

let view11 = Int16Array.of(1,2)
console.log(view11 instanceof Int16Array)//true

console.log("定型数组不是普通数组,不能继承自Array")
let view12 = new Int16Array([1,2])
console.log(Array.isArray(view12))//false

console.log("定型数组增加了set和subarray方法, set方法用于将其他数组复制到已有定型数组,subarray用于提取已有定型数组的一部分形成新的定型数组")
let view13 = new Int16Array(4)
//参数1:一个定型数组或普通数组
//参数2:可选,偏移量,开始插入数据的位置,默认为0
view13.set([1,2])
view13.set([3,4], 2)
console.log(view13)//Int16Array(4) [ 1, 2, 3, 4 ]

let view14 = new Int16Array([1,2,3,4]),
    subview1 = view14.subarray(),
    subview2 = view14.subarray(1),
    subview3 = view14.subarray(1,3)
console.log(subview1)//Int16Array(4) [ 1, 2, 3, 4 ]
console.log(subview2)//Int16Array(3) [ 2, 3, 4 ]
console.log(subview3)//Int16Array(2) [ 2, 3 ]

console.log("扩展运算符,含空位时转为undefined")
let arr2 = [1,,3],
    arr3 = [...arr2]
console.log(arr3)//[ 1, undefined, 3 ]