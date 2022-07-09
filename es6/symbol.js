// let sy = Symbol("KK")
// console.log(sy)
// console.log(typeof (sy))
//
// let sy1 = Symbol("KK")
// console.log(sy === sy1)//false

//1. 作为属性名
let sy = Symbol("key1")
//写法1
let syObject = {}
syObject[sy] = "kk"
console.log(syObject)//{ [Symbol(key1)]: 'kk' }
//写法2
let syObject2 = {
    [sy]: "kk"
}
console.log(syObject2)//{ [Symbol(key1)]: 'kk' }
//写法3
let syObject3 = {}
Object.defineProperty(syObject3, sy, {value: "kk"})
console.log(syObject3)

let syObject4 = {}
syObject4[sy] = "kk"

console.log(syObject4[sy])//kk
console.log(syObject4.sy)//undefined

console.log("----------- 读取一个对象的 Symbol 属性 ----------")
let syObject5 = {}
syObject5[sy] = "kk"
console.log(syObject5)
for (let i in syObject5){
    console.log(i)//{ [Symbol(key1)]: 'kk' }
}
console.log(Object.keys(syObject5))//[]
console.log(Object.getOwnPropertySymbols(syObject5))    //[ Symbol(key1) ]
console.log(Reflect.ownKeys(syObject5))                 //[ Symbol(key1) ]




