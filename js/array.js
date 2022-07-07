var a = ['A', 'B', 'C']
a.name = 'Hello'
for (var x in a) {
    console.log(x)//0 1 2 name
}
// for...in 循环将把 name 包括在内，但 Array 的 length属性却不包括在内
// for...of 完全修复了这些问题，它只会循环集合本身的元素
console.log("for...of")
for(var x of a) {
    console.log(x)//A B C
}