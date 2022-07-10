let exam = {
    name: "Tom",
    age: 24
}

let proxy = new Proxy(exam, {
    get(target, propKey, receiver) {
        console.log('Getting ' + propKey)
        return target[propKey]
    }
})

console.log(proxy.name)
console.log(proxy.age)