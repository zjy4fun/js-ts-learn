let exam = {
	name: "Tom",
	age: 24
}

Reflect.deleteProperty(exam, 'name')
console.log(exam)
//property不存在时也会返回true
console.log(Reflect.deleteProperty(exam, 'name'))
