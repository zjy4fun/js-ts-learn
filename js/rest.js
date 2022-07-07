function foo(a,b,...rest) {
    console.log('a = ' + a)
    console.log('b = ' + b)
    // rest相当于一个数组，用于接收额外的参数，不再需要arguments就获取了所有参数
    // 如果传入的参数连正常定义的参数都没有填满，rest会接收一个空数组
    console.log(rest)
}

foo(1,2,3,4,5)
console.log("===============")
foo(1)