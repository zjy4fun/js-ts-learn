function printName(obj) {
    var _a;
    console.log(obj);
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "jack" });
printName({ first: "jack", last: "ma" });
