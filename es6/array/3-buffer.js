console.log("创建数组缓冲区")
let buffer = new ArrayBuffer(10)
console.log(buffer.byteLength)//10
//分割已有数组缓冲区
let buffer1 = buffer.slice(1,3)
console.log(buffer1.byteLength)//2

console.log("默认 DataView 可操作数组缓冲区全部内容")
let buffer2 = new ArrayBuffer(10)
dataView = new DataView(buffer2)
dataView.setInt8(0,1)
console.log(dataView.getInt8(0))//1

console.log("通过设置偏移量与长度指定 DataView 可操作性的字节范围")
let buffer4 = new ArrayBuffer(10)
dataView1 = new DataView(buffer4, 0, 3)
// dataView1.setInt8(5,1)//RangeError: Offset is outside the bounds of the DataView

