# 实现点击显示隐藏图片功能

1、实现效果点击开关控制图片显示隐藏：

![showOrHide](/Users/brucefang/work_hongyan/yonyou/tinper-react-demo/tinper-react框架/Introduction-介绍/img/showOrHide.gif)

2、开始之前

> - 确保tinper-uba 已经安装完成
> - 初始化项目可以启动

3、实现步骤：

> 创建组件

```
在containers文件夹内创建文件夹MyTest文件夹
在MyTest文件夹内增加 index.jsx 和 index.less文件
├── MyTest
│   ├── index.jsx
│   └── index.less
```

> 编写组件

```
index.jsx文件内部：
//引入所需文件react核心代码
import React, { Component } from "react";
//引入自定义组件 Navs；
import { Navs } from "containers";
//引入要显示的图片路径并定义为img变量；
import img from "assets/images/tinpertest.png";
//引入样式修饰渲染元素;
import "./index.less";
//引入 tinper-bee 组件库中的开关组件；
import { Switch } from "tinper-bee";
//定义默认输出组件 是MyTest；
export default class MyTest extends Component {
  constructor() {
    super();
    //定义组件内部状态
    this.state = {
      isShow: false
    };
  }
  //定义事件
  onChange = () => {
  //事件执行修改内部state值
    this.setState({
      isShow: !this.state.isShow
    });
  };
  //渲染元素
  render() {
    let { isShow } = this.state;
    return (
      <div>
      //自定义组件使用
        <Navs />
        <div className="test_modul animated bounceInLeft">
          <div className="swith_modul">
          //tinper-bee组件引用并且传入 size 显示状态 事件等；
            <Switch
              size="lg"
              checked={isShow}
              onChange={this.onChange}
              checkedChildren={"显示"}
              unCheckedChildren={"隐藏"}
            />
          </div>
          //根据组件内部状态判断显示图片or 显示默认文字；
          {isShow ? (
            <img src={img} className="animated bounceIn" alt="" />
          ) : (
            <div className="img_default animated bounceIn">图片位置</div>
          )}
        </div>
      </div>
    );
  }
}
```

> 编写样式（框架支持 css扩展less 和sass 写法）；

```
.test_modul {
  text-align: center;
  margin-top: 43px;
  .swith_modul {
    line-height: 43px;
    margin: 20px 0;
    cursor: pointer;
    .u-switch-inner {
      font-size: 12px;
      color: #000;
    }
  }
  .img_default {
    font-size: 20px;
    line-height: 300px;
    text-shadow: 1px 8px 10px #000;
  }
  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
}
```

> 路由处引入组件(route.jsx文件引入编写组件路径 MyTest 为自定义组件名称)

```
import { Router, Route, hashHistory } from "react-router";
import {  MyTest } from "containers";
export default (
  <Router history={hashHistory}>
    <Route path="/Test" component={MyTest} />
  </Router>
);

```

> 浏览页面

```
编写完 npm run dev 在浏览器打开项目发现没有自己编写的页面？
http://127.0.0.1:3111/#/启动路径
在启动路径 http://127.0.0.1:3111/#/后加Test
http://127.0.0.1:3111/#/Test
就直接可以看到自己编写的页面。
点击开关按钮，就能直接控制图片的显示隐藏了。
```

