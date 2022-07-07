function printId(id) {
    // console.log(id.toUpperCase())
    /*
    * TS2339: Property 'toUpperCase' does not exist on type 'string | number'.
    * Property 'toUpperCase' does not exist on type 'number'.
    * */
    //使用代码收窄联合类型
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId("helloid");
printId(100);
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5, 6, 7]));
console.log(getFirstThree('abcdefghi'));
