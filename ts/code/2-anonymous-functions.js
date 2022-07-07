var names = ["Alice", "Bob", "Eve"];
//尽管s没有添加类型注解， TypeScript依然能够根据上下文判断出s的类型
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
