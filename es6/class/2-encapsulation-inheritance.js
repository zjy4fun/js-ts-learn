class Example1 {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    get a() {
        console.log("getter")
        return this.a
    }

    set a(a) {
        console.log("setter")
        this.a = a  //自身递归调用!!!
    }
}

// let exam1 = new Example1(1, 2)//RangeError: Maximum call stack size exceeded


class Example2 {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    get a(){
        console.log("getter")
        return this._a
    }
    set a(a){
        console.log("setter")
        this._a = a
    }
}
let exam2 = new Example2(1,2)//setter 只输出setter, 不会调用getter方法
console.log(exam2._a)// 1

console.log("getter不可以单独出现")
class Example3 {
    constructor(a) {
        this.a = a
    }
    get a(){
        return this.a
    }
}
// let exam3 = new Example3(1)//TypeError: Cannot set property a of #<Example3> which has only a getter

console.log("getter和setter必须同级出现")
class Father {
    constructor() {

    }
    get a(){
        return this._a
    }
}

class Child extends Father{
    constructor() {
        super()
    }
    set a(a){
        this._a = a
    }
}

let test = new Child()
test.a= 2
console.log(test.a)//undefined

class Father1 {
    constructor() {
    }
    //或者都放在自类中
    get a(){
        return this._a
    }
    set a(a){
        this._a = a
    }
}

class Child1 extends Father1 {
    constructor() {
        super()
    }
}

let test1 = new Child1()
test1.a = 3
console.log(test1.a)//3

class Father2 {
  test(){
      return 0
  }

  static test1(){
      return 5
  }
}

class Child2 extends Father2 {
    constructor() {
        super()
        //调用父类普通方法
        console.log(super.test())
    }
    static test2(){
        return super.test1()+2
    }
}

console.log(Child2.test2())//7

console.log("不可以继承常规对象")


