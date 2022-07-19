function Person() {
    Person.prototype.name = "Jack"
    Person.prototype.age = 29
    Person.prototype.job = "software engineer"
    Person.prototype.sayName = function () {
        console.log(this.name)
    }
}

let person1 = new Person()
person1.sayName()
let person2 = new Person()
person2.sayName()
console.log(person1.sayName === person2.sayName)//true