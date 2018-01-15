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

首先讲解 Item文件夹内 index.jsx

```
...引入文件所需文件
export default class Item extends Component {
  constructor() {
    super();
    this.state = {
    //定义组件内状态存储值。
      data: [],
      showModal: false,
      type: "",
      isLikeShow: false,
      likeAT: "",
      likeHTML: ""
    };
  }
  //生命周期 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)
  componentDidMount() {
    this.getData();
  }
  //定义获取数据方法
  getData = () => {
  	//定义this；
    let self = this,
    //获取 props 传来的值url；
      url = self.props.url;
     //通过axios.get方法 获取数据
    axios.get(url).then(res => {
      self.setState({
        data: res.data.data
      });
    });
  };
  //点击操作
  likeThis = (classN, IH) => {
    let self = this;
    this.setState(
      {
        isLikeShow: true,
        likeAT: classN,
        likeHTML: IH
      },
      () => {
        setTimeout(() => {
          self.setState({
            isLikeShow: false,
            likeAT: ""
          });
        }, 1000);
      }
    );
  };
  //模态框方法展示
  open = str => {
    this.setState({
      showModal: true,
      type: str
    });
  };
  //关闭模态框
  close = () => {
    this.setState({
      showModal: false
    });
  };
  //删除文件
  del = index => {
    let newData = this.state.data,
      self = this;
    newData.splice(index, 1);
    this.setState({
      data: newData
    });
  };
  render() {
    let { data } = this.state,
      { Animate, type } = this.props;
    return (
      <Row className={`item_modul animated ${Animate}`}>
        {this.state.isLikeShow ? (
          <div className={`tips_modul animated ${this.state.likeAT}`}>
            {this.state.likeHTML}
          </div>
        ) : ("")}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>少侠住手，你已经点过了？</Modal.Title>
          </Modal.Header>
          <Modal.Body>没看已经点过{this.state.type}了吗？</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={this.close}
              shape="border"
              style={{ marginRight: 50 }}
            >
              关闭
            </Button>
          </Modal.Footer>
        </Modal>
        //如果有数据则那么渲染数据否则渲染空数据提示
        {data.length ? (
          data.map((item, index) => {
            return (
              <Inner
                item={item}
                open={this.open}
                likeThis={this.likeThis}
                type={type}
                del={this.del}
                index={index}
              />
            );
          })
        ) : (
          <div className="defaultItem">
            <img src="http://p3.pstatp.com/thumb/3a1e001b168600a17ea7" alt="" />
            <div>空空如也</div>
          </div>
        )}
      </Row>
    );
  }
}

```

> 第四步 ：通过上面我们看到 该组件内部引用了 Inner 组件。我们开始讲解Inner'组件的写法，这种是在组件内部再次引用组件。出现了多次调用。

```
import React, { Component } from "react";
//引入tinper-bee组件库内的组件如栅格布局 Con，Row，Col，和图标Icon，模态框Modal，按钮Button；
import { Con, Row, Col, Icon, Modal, Button } from "tinper-bee";
//框架集成了classnames样式管理库，可以直接引入使用。因便于className的判断逻辑处理。
import classnames from "classnames";
//此处引入动态效果库。
import { AnimateArray } from "./data";
import { OutAnimateArray } from "./data";
export default class Inner extends Component {
  constructor(props) {
    super(props);
    //根据props 传值来给this.state赋值；
    let a = this.props.item;
    this.state = {
      isGood: a.isGood,
      isBad: a.isBad,
      isLike: a.isLike,
      isGoodNum: a.isGoodNum,
      isBadNum: a.isBadNum,
      isLikeNum: a.isLikeNum,
    };
  }
 //组件生命周期之 componentWillReceiveProps 组件props改变执行该方法；
  componentWillReceiveProps(props) {
  }
  //定义 点击事件来判断点击具体是那个元素，来判断如何显示。和逻辑。
  userSet = (type, e) => {
    let { isGood, isBad, isLike, isGoodNum, isBadNum, isLikeNum } = this.state,
      Anum = Math.ceil(Math.random() * 44),
      OAnum = Math.ceil(Math.random() * 31),
      Atype = AnimateArray[Anum],
      OAtype = OutAnimateArray[OAnum];
    switch (type) {
      case "good":
        !isGood
          ? this.setState(
              {
                isGoodNum: (isGoodNum += 1),
                isGood: true
              },
              () => {
                this.props.likeThis(Atype, "💗");
              }
            )
          : this.setState(
              {
                isGoodNum: (isGoodNum -= 1),
                isGood: false
              },
              () => {
                this.props.likeThis(OAtype, "👍");
              }
            );
        break;
        ...
  };
  call = () => {
    alert("110");
  };
  //点击删除的时候调用父组件的删除方法；
  del = (index, e) => {
    this.props.del(index);
  };
  render() {
  //采用ES6解构的方法获取组件的state值和props值。方便下面使用；
    let { item, type, index } = this.props,
    { isGood, isBad, isLike, isGoodNum, isBadNum, isLikeNum } = this.state;
    return (
      <Col md={12} xs={12} sm={12} key={item.id} className={`item_modul_inner`}>
        <div className="title">
          <div>
            <Col md={2} xs={2} sm={2} className="icon_modul">
              <img src={item.img} alt="" />
            </Col>
            <Col md={10} xs={10} sm={10}>
              <div className="itme_name">
                {" "}
                {item.name}
                {type == "Mine" ? (
                  <Button
                    style={{ float: "right" }}
                    onClick={this.del.bind(this, index)}
                  >
                    删除{item.id}
                  </Button>
                ) : (
                  <Button style={{ float: "right" }} onClick={this.call}>
                    举报
                  </Button>
                )}
              </div>
              <div className="item_date">2017年12月12号</div>
            </Col>
          </div>
          <Col md={12} xs={12} sm={12} className="item_con">
            {item.content}
          </Col>
          <Col md={12} xs={12} sm={12} className="edit_modul">
            <Icon
              type={classnames("heart-shape-outline ", {
                "uf-heart": isGood,
                "uf-heart-o": !isGood
              })}
              onClick={this.userSet.bind(this, "good")}
            >
              <span>{isGoodNum}</span>
            </Icon>
            <Icon
              type="gift-box uf-gift"
              onClick={this.userSet.bind(this, "bad")}
            >
              <span>{isBadNum}</span>
            </Icon>

            <Icon
              type={classnames("star-1", {
                "uf-star-o": !isLike,
                "uf-star": isLike
              })}
              onClick={this.userSet.bind(this, "like")}
            >
              <span>{isLikeNum}</span>
            </Icon>
          </Col>
        </div>
      </Col>
    );
  }
}

```

> 第五步： 页面渲染以及逻辑处理完成了。下面看一下静态路由管理。

```
import { Router, Route, hashHistory } from "react-router";
//引入路由对应的渲染模块。
import { App, Mine, MyTest } from "containers";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/Mine" component={Mine} />
    <Route path="/Test" component={MyTest} />
  </Router>
);

```

路由管理引入Router，Route和hashHistory 通过react-router;

引入路由对应的渲染模块。

> 发送请求

在MyItem组件中我们用到了，axios 下面我们具体说一下axios的使用方法和本地模拟数据mock；

```
 componentDidMount() {
    this.getData();
  }
  getData = () => {
    let self = this,
      url = self.props.url;
    axios.get(url).then(res => {
      self.setState({
        data: res.data.data
      });
    });
  };
```

通过例子可以看出我们 在组件渲染完后执行了获取数据方法，获取数据方法执行的axios。get方法获取地址是组件props传值 self.props.url;

通过例子我们看出self.props.url是App文件夹内的index.jsx

```
<Item url="/Item/Get" type="Index" Animate="zoomIn" /> 
url ="/Item/Get" 为父组件给子组件传值url
type和Animate 亦然；
```

> uba-mock 功能介绍

tinper-uba 不仅有生成项目 打包项目等功能，uba 还具有 uba-mock模拟后台数据功能，依赖强大的集成开发工具 `uba` 内置 `数据模拟`、`代理请求`、`静态托管`、`开放配置`等功能.

> 配置uba-mock

通过我们使用uba 来初始化工程来看，项目内有uba-mock.js:

```
module.exports = {
  "GET": [{
    "/User/Get": "./mock/api/user/get.json"
  }],
  "POST": [{
    "/User/Post": "./mock/api/user/post.json"
  }],
  "PUT": [{
    "/User/Put": "./mock/api/user/put.json"
  }]
}

```

项目初始化暂定了三种请求方式来模拟后台数据接口。

> 使用get获取数据方式

```
...
constructor() {
    super();
    //定义 组件状态初始值
    this.state = {
      user: []
    };
  }
  componentDidMount() {
  	//组件加载完成执行获取数据方法；
    this.getData();
  }
  //获取数据方法
  getData = () => {
    let self = this;
    //使用uba-mock 定义的数据接口
    axios.get("/User/Get").then(res => {
      console.log(res);
     // {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
     //mock 模拟数据如线上接口一致。
      if (res.status == 200 && res.data.message == "success") {
        self.setState({
          user: res.data.data
        });
      }
    });
  };
  ...
```

假使项目测试登录 接口，本地无法模拟，那么我们可以修改uba.config.js启用代理功能；

uba.config.js内配置

```
//远程代理访问，可以配置多个代理服务
const proxyConfig = [
  {
  	//此处打开代理
    enable: true, //true启用代理,mock服务失效.
    router: "/", //代理的路由
    url: "http://cnodejs.org",//设置代理主机域名
    options: {
      filter: function(req, res) {
        //不需要代理可以排除
        return req.url.indexOf("webpack_hmr") > -1 ? false : true;
      }
    }
  }
];
```

开启代理功能那么，就能从本地获取到，http://condejs.org上的数据。了解更多[参考](https://www.npmjs.com/package/express-http-proxy)。

