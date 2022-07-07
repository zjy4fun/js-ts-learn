var arr = [1, 2, 4, 5, 6, 9, 10, 15]
var r = arr.filter(function(x) {
    return x % 2 !== 0
})

console.log(r)

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function(x) {
    return x && x.trim();
})
console.log(r)

console.log("回调函数的参数")

var arr = ['A', 'B', 'C']
var r = arr.filter(function(element, index, self) {
    console.log(element)
    console.log(index)
    console.log(self)
    return true
})

console.log("利用filter巧妙地去除Array的重复元素")
var r, arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry']
r = arr.filter(function(element, index, self) {
    //indexOf 总是返回第一个元素的位置
    //后续的重复元素位置与 indexOf 返回的位置不相等，因此被 filter 滤掉了
    return self.indexOf(element) === index
})

console.log(r.toString())

console.log("---------------- 使用 filter 筛选出素数 --------------------")
function get_primes(arr) {
    // 使用 filter 筛选出素数
    var ret =  arr.filter(function(element, index) {
        if (element < 2) {
            return false
        }
        for (let i = 2; i < element; i++) {
            if(element % i == 0) {
                return false
            }
        }
        return true
    })

    console.log(ret)
    return ret
}

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}