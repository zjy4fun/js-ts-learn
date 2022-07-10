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

使用字符串表示常量的问题是不能保证常量是独特的，但是使用Symbol定义常量，就可以保证这一组常量的值都不相等。

Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该Symbol值
如果没有则新建并返回一个以该字符串参数为名称的Symbol值，并登记在全局环境中供搜索。

Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key，用来检测该字符串参数作为名称的 Symbol 值是否已被登记

# 3.1.1 Map 与 Set

Map 和 Object 的区别：
1. 一个 Object 的键只能是字符串或者Symbol，但一个 Map 的键可以是任意值
2. Map 中的键值对个数是有序的（FIFO）,添加到对象中的键则不是
3. Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算
4. Object都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突

Set允许存储任何类型的唯一值，无论是原始值或者对象引用
Set中的特殊值：
+0 和 -0 在存储判断唯一性的时候是恒等的，所以不重复
undefined 和 undefined是恒等的，所以不重复
NaN 和 NaN 是不恒等的，但是在 Set 中只能存一个，不重复

# 3.1.2 Reflect 与 Proxy

Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
Reflect可以用于获取目标对象的行为，它与Object类似，但更容易读，为操作对象提供了一种更优雅的方式。

一个Proxy对象由两部分组成，target, handler

实例方法 get(target, propKey, receiver) 用于 target 对象上 propKey 的读取操作

set(target, propKey, value, receiver) 用于拦截target对象上的propKey的赋值操作
如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用
第四个参数receiver表示原始操作行为所在对象，一般是Proxy实例本身
