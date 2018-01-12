# 管理路由

> 什么是[路由](https://react-guide.github.io/react-router-cn/docs/Introduction.html)？

React Router 是一个基于 [React](http://facebook.github.io/react/) 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。

> 路由基础

* 路由配置

路由配置是一组指令，用来告诉 router 如何匹配 URL以及匹配后如何执行代码。我们来通过一个简单的例子解释一下如何编写路由配置。

```
//路由文件引入路由模块
import { Router, Route, hashHistory } from "react-router";
import { App, Mine } from "containers";
//输出路由模块
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/Mine" component={Mine} />
  </Router>
);


//引入路由模块
import React from 'react';
import ReactDOM from 'react-dom';
//此处引入路由模块
import route from './route';
import './index.less';

ReactDOM.render(route, document.querySelector("#app"));
```

> 路由原理

* 嵌套关系

```
React Router 使用路由嵌套的概念来让你定义 view 的嵌套集合，当一个给定的 URL 被调用时，整个集合中（命中的部分）都会被渲染。嵌套路由被描述成一种树形结构。React Router 会深度优先遍历整个路由配置来寻找一个与给定的 URL 相匹配的路由。
```

* 路径语法

```
路由路径是匹配一个（或一部分）URL 的 一个字符串模式。大部分的路由路径都可以直接按照字面量理解，除了以下几个特殊的符号：

:paramName – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数
() – 在它内部的内容被认为是可选的
* – 匹配任意字符（非贪婪的）直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数

<Route path="/hello/:name">         // 匹配 /hello/michael 和 /hello/ryan
<Route path="/hello(/:name)">       // 匹配 /hello, /hello/michael 和 /hello/ryan
<Route path="/files/*.*">           // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg
```

* 优先级

最后，路由算法会根据定义的顺序自顶向下匹配路由。因此，当你拥有两个兄弟路由节点配置时，你必须确认前一个路由不会匹配后一个路由中的`路径`。例如，千万**不要**这么做：

```
<Route path="/comments" ... />
<Redirect from="/comments" ... />
```

> History

React Router 是建立在 history之上的。 简而言之，一个 history 知道如何去监听浏览器地址栏的变化， 并解析这个 URL 转化为 `location` 对象， 然后 router 使用它匹配到路由，最后正确地渲染对应的组件。

常用的 history 有三种形式， 但是你也可以使用 React Router 实现自定义的 history。

* browserHistory
* hashHistory
* createMemoryHistory

