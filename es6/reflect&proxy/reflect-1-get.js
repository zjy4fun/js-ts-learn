//查找并返回target对象的name属性
let exam = {
    name: "Tom",
    age: "24",
    get info(){
        return this.name + this.age
    }
}
console.log(Reflect.get(exam, 'name'))

//当 target 对象中存在 name 属性的 getter 方法时，getter 方法的 this 会绑定  receiver
let receiver = {
    name: "Jerry",
    age: 20
}

console.log(Reflect.get(exam, 'info', receiver))//Jerry20

//当 name 为不存在于 target 对象的属性时，返回 undefined
console.log(Reflect.get(exam, 'birth'))

// Reflect.get(1, "name")//TypeError: Reflect.get called on non-object



