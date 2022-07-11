let target = {a: 1}
let object2 = {b: 2}
let object3 = {c:3}
Object.assign(target, object2, object3)
console.log(target)//{ a: 1, b: 2, c: 3 }
//如果同名，后面的会覆盖掉之前的

//如果函数只有一个参数，当参数为对象时，直接返回该对象；如果参数不是对象，会先将参数转为对象，然后返回
console.log(Object.assign(3))//[Number: 3]
console.log(typeof Object.assign(3))//object

//因为null和undefined不能转化为对象， 所以会报错
//还要注意Object.assin()是浅拷贝
let sourceObj = {
    a: {
        b:1
    }
}
let targetObj = {c: 3}
Object.assign(targetObj, sourceObj)
targetObj.a.b = 2
console.log(sourceObj.a.b)//2

//同名属性替换
targetObj2 = {
    a: {
        b:1,
        c:2
    }
}
sourceObj2 = {
    a:{
        b:'hh'
    }
}
Object.assign(targetObj2, sourceObj2)
console.log(targetObj2)//{ a: { b: 'hh' } }

//数组的处理
//过程：先封装对象，[2,3] ==> {0:2, 1:3}, [5] ==> {0: 5} 赋值后，{0:5, 1:3} ==> [5,3]
arr1 = [2,3]
arr2 = [5]
Object.assign(arr1, arr2)
console.log(arr1)//[5,3]

console.log(Object.is("q", "q"))
console.log(Object.is(1,1))
console.log(Object.is([1],[1]))//false
console.log(Object.is({q:1}, {q:1}))//false

//与 === 的区别
console.log(Object.is(+0, -0))//false
console.log(Object.is(NaN, NaN))//true
console.log(NaN === NaN)//false