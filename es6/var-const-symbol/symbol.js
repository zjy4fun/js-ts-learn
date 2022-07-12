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

console.log("----------- 使用 Symbol 定义常量 ----------")
const COLOR_RED = Symbol("red")
const COLOR_YELLOW = Symbol("yellow")
const COLOR_BLUE = Symbol("blue")

function ColorException(message) {
    this.message = message
    this.name = "ColorException"
}

function getConstantName(color) {
    switch (color) {
        case COLOR_RED:
            return "COLOR_RED"
        case COLOR_YELLOW:
            return "COLOR_YELLOW"
        case COLOR_BLUE:
            return "COLOR_BLUE"
        default:
            throw new ColorException("Can't find this color")
    }
}

try{
    var color = "green"
    var colorName = getConstantName(color)
}catch (e) {
    var colorName = "unknown"
    console.log(e.message, e.name)
}

console.log("------------ Symbol.for() 类似于单例-----------------")
let yellow = Symbol("Yellow")
let yellow1 = Symbol.for("Yellow")
console.log(yellow === yellow1)         //false

let yellow2 = Symbol.for("Yellow")
console.log(yellow1 === yellow2)        //true

console.log("------------ Symbol.keyFor() 返回一个已登记的Symbol类型值的 key，用来检测该字符串参数作为名称的Symbol值是否已被登记-----------------")
let yellow3 = Symbol.for("Yellow")
console.log(Symbol.keyFor(yellow3))    //Yellow