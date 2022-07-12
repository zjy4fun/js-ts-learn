import {exportName} from "./export.js";
//使用as重新定义导出的接口名称, 隐藏模块内部的变量
import {myName as name1} from "./1-export.js"
import {myName as name2} from "./2-export.js"
console.log(exportName)

console.log(name1)
console.log(name2)

