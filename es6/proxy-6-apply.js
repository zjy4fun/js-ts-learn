function sub(a,b){
    return a - b
}
let handler = {
    apply: function(target, ctx, args) {
        console.log('handle apply')
        return Reflect.apply(...arguments)
    }
}
let proxy = new Proxy(sub, handler)
console.log(proxy(3,1))