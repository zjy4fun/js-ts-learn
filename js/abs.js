function abs(x) {
    if(typeof x !== 'number'){
        throw 'Not a number'
    }
    if(x >= 0) {
        return x
    }else{
        return -x
    }
}
console.log(abs(-9))