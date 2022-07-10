let handler = {
    has: function(target, propKey) {
        console.log("handle has")
        return propKey in target
    }
}

let exam = {name: "Tom"}
let proxy = new Proxy(exam, handler)
console.log('name' in proxy)  //true