# About JsTry

由于 JavaScript 的开发技术越来越复杂，不得不写点文档和示例代码，防止时间过太久而把东西忘记掉，让自己可以快速重新找回关键记忆。

## JavaScript 语法的扩展

`ECMAScript 2015` 是最新的语法标准，在正式发布前叫 `ECMAScript 6`。
简称 `ES2015` 或 `ES6`，浏览器普遍支持的版本是 `ES5`。

所以如果要用 `ES6` 语法开发应用，需要用 [babel](https://babeljs.io/docs/en/) 转译成 `ES5`。
你可能需要学习 `ES6` 语法，`Babel` 官方文档写了一篇详细的文章 [Learn ES2015](https://babeljs.io/docs/en/learn)。

然而 `Babel` 可以做和事情，不单单是转译 `ES6`，它还可以转译 `TypeScript`、`jsx`，
它们在现代前端开发中，重要性不亚于 `ES6`，但归根到底，这几个都是在扩展 JavaScript 的语法。

## 在操作系统环境中运行 JavaScript

在过去很长的一段时间里，JavaScript 只能在浏览器中运行，它所能做的事件便局限在浏览器中。
直到 [NodeJs](https://nodejs.org/en/) 的出现，它让 JavaScript 可以在操作系统环境中运行，
它使得 JavaScript 有了类似 Python 和 PHP 的直接和操作系统交互的能力。

NodeJs 为 JavaScript 在操作系统中运行时提供了丰富的 API，当然地，在操作系统中运行时，
JavaScript 是没有浏览器相关对象可以访问的。

NodeJs 为 JavaScript 创造了模块化和依赖管理工具 npm，使得 JavaScript 代码从此有了生态。
这是现代前端开发技术得以繁荣的基础。

`Babel` 其实就是一个 npm 包。

## 构建浏览器应用

NodeJs 的出现，使得浏览器应用的开发方式出现了变化，一个浏览器应用也可以被组织成一个 npm 模块。
这样一来浏览器应用的开发便可以方便地使用  `TypeScript`、`jsx`、`SASS` 等技术。
但是要让一个以 npm 模块形式开发的浏览器应用能够被浏览器运行，需要进行一系列的代码转换，
这个转换过程被称为浏览器应用的构建。
为了提高构建效率，于是自动化构建工具 [Webpack](https://webpack.js.org/) 出现了。

Webpack 可以自动化地把 npm 模块中的各种资源打包成一个 Web 应用。