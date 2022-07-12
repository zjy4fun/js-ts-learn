console.log("类定义")
//匿名类
let Example1 = class {
    constructor(a) {
        this.a = a
    }
}
//命名类
let Example2 = class Example2{
    constructor(a) {
        this.a = a
    }
}

console.log("类声明")
class Example3 {
    constructor(a) {
        this.a = a
    }
}

console.log("不可以重复声明")
console.log("类定义不会被提升, 这意味着, 必须在访问前对类进行定义, 否则就会报错")
console.log("类中方法不需要function关键字")
console.log("方法间不能加分号")

let Example4 = class Exam {
    constructor(a) {
        this.a = a
    }
}
console.log(Example4.name)//Exam

let Example5 = class {
    constructor(a) {
        this.a = a
    }
}

console.log(Example5.name)//Example5

class Example6 {
    constructor() {
        console.log("我是constructor")
    }
}
new Example6()

class Example7 {
    constructor() {
        //默认返回实例对象 this
    }
}

console.log(new Example7() instanceof Example7)//true

class Example8 {
    constructor() {
        //指定返回对象
        return new Example7()
    }
}

console.log(new Example8() instanceof Example8)//false

class Example9 {
    //静态方法无需实例化对象即可直接使用
    static sum(a, b) {
        console.log(a + b)
    }
}
Example9.sum(1,2)

class Example10 {
    //原型方法
    sum(a,b){
        console.log(a+b)
    }
}
let exam10 = new Example10()
exam10.sum(1,3)

class Example11{
    //实例方法
    constructor() {
        this.sum = (a,b) => {
            console.log(a+b)
        }
    }
}
let exam11 = new Example11()
exam11.sum(1,2)

class Example12 {
    constructor(a,b) {
        this.a = a
        this.b = b
        console.log("Example")
    }
    sum() {
        return this.a + this.b
    }
}
let exam112 = new Example12(2,1)
let exam212 = new Example12(3,1)
console.log(Object.getPrototypeOf(exam112) === Object.getPrototypeOf(exam212))//true

Object.getPrototypeOf(exam112).sub = function () {
    return this.a - this.b
}
console.log(exam112.sub())//1
console.log(exam212.sub())//2

function testable(target) {
    target.isTestable = true
}
//todo: 在nodejs下运行会报错, 可能需要借助插件来完成(webpack)
//SyntaxError: Invalid or unexpected token
@testable
class Example13{}
console.log(Example13.isTestable)



