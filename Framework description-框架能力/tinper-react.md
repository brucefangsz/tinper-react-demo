# tinper-react框架说明和介绍

1、框架能力和技术方案概述（具体功能）



2、使用到的技术方案

> 技术方案



3、基础工程化能力有哪些

> 基础工程化能力

- 命令初始化项目
- 本地项目调试
- uba 一键产出工程文件

4、如何创建组件

> 创建组件

components文件夹内存放我们项目的公用组件我们来创建一个自己组件，首先在components创建 一个文件夹MyComponent中加 index.jsx 和 index.less;

> 首先看index.jsx

```
//引入 React 核心代码；
import React, { Component } from "react";
//引入组件主样式
import "./index.less";
//定义一个常量 存储 一张图片地址
const imgSrc =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515405459112&di=975c1d2f5fd54831389d0fc3d4157bad&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150601%2F0017030521583969_b.jpg";
  
//export 输出 default 默认 组件 MyComponent 组件名 继承自Component；
export default class MyComponent extends Component {
//继承
  constructor() {
    super();
//定义组件内状态
    this.state = {
      isShow: false
    };
  }
  componentWillMount(){
    // 在渲染前调用,在客户端也在服务端。
    这个方法内的方法是在组件渲染之前执行；
  }
  componentDidMount(){
    //这个方法的方法是在组件渲染之后执行；
    组件内调用 this.props来接受父组件传过来的值。
    如：let getArray = this.props.parentArray;
  }
  componentWillReceiveProps(props){
    //这个方法在props更新后执行，重新定义props；
  }
//定义事件 点击 展示或隐藏图片
  showPic = () => {
    let { isShow } = this.state;
    this.setState({
      isShow: !isShow
    });
  };
 //组件渲染输出
  render() {
    return (
    	//className 来写入 样式；
      <div className="my_modul">
      	//为元素绑定点击事件执行组件内部事件
        <div onClick={this.showPic}>点击我吧！</div>
        //三元运算符根据组件状态来判断是否渲染 img 图片元素 并且根据状态改变会实时更新 页面显示与否。
        {this.state.isShow ? (
        	//可以是class样式，也可以写上行内样式(不建议)如 style={{width:'40%',height:'400px'}} style 由双大括号写入。
          <img src={imgSrc} className="my_pic" style={{ width: "40%" }} alt="" />
        ) : (
          ""
        )}
      </div>
    );
  }
}
```

> 再来看index.less:

```
//less样式语法
.my_modul {
  margin: 30px auto;
  text-align: center;
  cursor: pointer;
  .my_pic {
    text-align: center;
    display: block;
    margin: 30px auto;
    width: 40%;
    border-radius: 50%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  }
}

```

> 效果图：（点击展示或者隐藏图片，是不是很简单实现了一个简单的组件）



> 组件引用和传值

```
//父组件引入自定义的子组件写法；
import { Component } from "react";
import { Navbar, FormControl, Menu, Badge, Icon, Breadcrumb } from "tinper-bee";
//此处引用自定义组件 import 引入自己定义的 MyComponent组件 from 组件路径；
import MyComponent from "components/MyComponent";
 constructor(props) {
    super(props);
    this.state = {
      parentArray: []
    };
  }
……
render(){
  return(
  	//直接如 标签一样直接写在render方法内页面就会出现你定义元素；通过自定义属性的方法将父组件state中的parentArray 来传递给 子组件MyComponent ；
  	<MyComponent ParentArray={this.state.parentArray} />
  )
}
```



> 组件的声明周期：

```
 组件的生命周期
 componentWillMount: 在渲染前调用,在客户端也在服务端。
 componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
 componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
 shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
 可以在你确认不需要更新组件时使用。
 componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
 componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
 componentWillUnmount 在组件从 DOM 中移除的时候立刻被调用。
```

