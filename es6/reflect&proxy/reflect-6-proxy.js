let exam = {
    name: "Tom",
    age: 24
}

let handler = {
    get:function (target, key) {
        console.log("getting " + key)
        return Reflect.get(target, key)
    },
    set: function(target, key, value) {
        console.log("setting " + key + " to " + value)
        Reflect.set(target, key, value)
    }
}
let proxy = new Proxy(exam, handler)
proxy.name = "Jerry"
console.log(proxy.name)
/*
setting name to Jerry
getting name
Jerry
* */