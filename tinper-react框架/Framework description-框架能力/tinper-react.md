# 框架介绍和说明

1、通过上面的例子我们对tinper-react框架和tinper-bee有了一定的了解，接下来我们在利用tinper-react 和 tinper-bee来实现一个完整的项目，利用框架tinper-uba创建项目，利用tinper-bee组件库，组件库请求数据接口，uba-mock模拟数据，静态路由切换页面等技术。

实现效果如下：

![demo1-iloveimg-resized](/Users/brucefang/work_hongyan/yonyou/tinper-react-demo/tinper-react框架/Framework description-框架能力/img/demo1-iloveimg-resized.gif)



2、文件以及实现步骤

从上面效果可以看出这个项目由三个页面组成，包括第一页测试页，好友动态页，我的动态页，其中测试页面我们已经看过通过点击开关实现突破的显示与隐藏，来了解了，tinper-react框架的基本能力和用法，下面我们从好友动态和我的动态了解更多tinper-react框架的能力，包括组件的创建，事件的编写，以及组件的生命周期，如何管理路由，如何使用axios获取后台数据和模拟数据并行开发。

> 文件目录

```
├── mock//本地数据文件夹
│   └── api
│       └── user
│           ├── get.json
│           ├── item.json //好友动态数据模拟文件
│           ├── myitem.json //我的动态数据模拟文件
│           ├── post.json
│           └── put.json
├── package.json
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── animate.min.css //动画库文件
│   │   └── images
│   │       ├── favicon.png
│   │       ├── logo.png
│   │       └── tinpertest.png
│   ├── components
│   │   ├── Nav //定义Tal导航公用组件
│   │   │   ├── index.jsx //组件文件
│   │   │   └── index.less // 组件样式文件
│   │   ├── MyItem //定义动态模块组件
│   │   │   ├── Inner.jsx  //组件内子组件
│   │   │   ├── data.js  //组件所需数据
│   │   │   ├── index.jsx  //组件主文件
│   │   │   └── index.less //组件样式
│   │   └── index.js
│   ├── containers
│   │   ├── App
│   │   │   └── index.jsx   //好友动态页
│   │   ├── Mine
│   │   │   ├── index.jsx   //我的动态页
│   │   │   └── index.less  //我的动态也样式
│   │   ├── MyTest
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── index.js
│   ├── index.html	//页面HTML
│   ├── index.js	//主页面逻辑
│   ├── index.less	//主页样式或者公共样式
│   ├── route.jsx  //路由管理页面
├── uba.config.js
└── uba.mock.js
```

> 文件讲解

第一步：创建好友动态页面

也就是在containers创建App文件夹 中index.jsx文件

```
import { Component } from "react";
//引入 自定义 Navs 和 Item 组件
import { Navs } from "components";
import { Item } from "components";
export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navs />
        //渲染 Item 组件并且传值 url 和 type 和Animate 动画类型
        <Item url="/Item/Get" type="Index" Animate="zoomIn" />
      </div>
    );
  }
}

```

看到App页面也是非常简单就是引入 组件 给组件传值并且渲染组件；

第二步：Navs 组件讲解

```
│   ├── components
│   │   ├── Nav //定义Tal导航公用组件
│   │   │   ├── index.jsx //组件文件
│   │   │   └── index.less // 组件样式文件
通过上面的 路径 我们看到 自定义组件都存放在 components 内；Nav
import React, { Component } from "react";
//引入Link组件来自react-router；
import { Link } from "react-router";
import "./index.less";
export default class Navs extends Component {
  render() {
    return (
      <div className="Navs">
        <ul>
          <li>
            <Link activeClassName="active" to="/Test">
              测试
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/">
              好友动态
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/Mine">
              我的动态
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
```

第三步：Item 自定义组件解析：

