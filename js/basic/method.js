var xiaoming = {
    name: '小明',
    birth: 1997,
    age: function() {
        var y = new Date().getFullYear()
        return y - this.birth
    }
}

console.log(xiaoming.age())