let exam = {
    name: "Tom",
    age: 24,
    set info(value) {
        return this.age = value
    }
}

console.log(exam.age)
Reflect.set(exam, 'age', 25)
console.log(exam.age)

//value为空时，会将name属性清除
Reflect.set(exam, 'age', )
console.log(exam.age)//undefined

let receiver = {
    age: 18
}
Reflect.set(exam, 'info', 1, receiver)
console.log(receiver.age)

let receiver1 = {
    name: 'opps'
}
Reflect.set(exam, 'info', 1, receiver1)
console.log(receiver1.age)//1