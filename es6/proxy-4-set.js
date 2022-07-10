let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age'){
            if (!Number.isInteger(value)){
                throw new TypeError('The age is not an integer')
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid')
            }
            obj[prop] = value
        }
    }
}

let proxy = new Proxy({}, validator)
proxy.age = 100
console.log(proxy.age)
proxy.age = 'opps'
proxy.age = 300