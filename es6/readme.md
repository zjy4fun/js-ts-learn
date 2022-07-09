参考：https://www.runoob.com/w3cnote/es6-tutorial.html

# 1. 环境搭建

浏览器
Node.js

查看node已经实现的es6特性
```shell
node --v8-options | grep harmony
```

webpack 是一个现代 JavaScript 应用程序的静态模块打包器。
webpack 处理应用程序时，会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle
四个核心概念：
1. 入口（entry）
    指示 webpack 应用该是哪个模块，来作为构建其内部依赖图的开始。
2. 输出（output）
    告诉 webpack 在哪里输出它创建的 bundles，以及如何命名这些文件，默认值为 ./dist
3. loader
    让 webpack 处理非 JavaScript 文件，可以将 es6 的语法转为 es5
4. 插件（plugins）
    打包优化，压缩，定义环境变量等

gulp 是一个基于流的自动化构建工具，常用于轻量级的工程中

# 2.1 let 和 const

let 代码块内有效，只能声明一次，不存在变量提升
var 全局范围有效，可以声明多次，存在变量提升

const 声明一个只读变量，声明之后不允许改变（意味着一旦声明必须初始化）
暂时性死区：es6明确规定，代码块中如果存在let或者const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。
const保证变量指向的内存地址所保存的数据不允许改动。

# 2.2 解构赋值

针对数组或者对象进行模式匹配，然后对其中的变量进行赋值

# 2.3 Symbol

表示独一无二的值，最大的用法是用来定义对象的唯一属性值
原始数据类型包括：
Number , String ,Boolean ,Object ,null ,undefined ,Symbol
Symbol是原始数据类型，不是对象
可以接收一个字符串作为参数，为新创建的Symbol提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分

使用场景：
1. 作为属性名
由于每个Symbol的值都是不相等的，所以 Symbol 作为对象的属性名，可以保证属性不重名
Symbol 作为对象属性名时不能用点号，要是用方括号，因为点号后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性 

Symbol值作为属性名时，该属性是公有属性而不是私有属性，可以在类的外部访问，但是不会出现在 for...in   for...of 的循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回
如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到

2. 定义常量

