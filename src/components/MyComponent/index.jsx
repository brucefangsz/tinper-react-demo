import React, { Component } from "react";
import "./index.less";
const imgSrc =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515405459112&di=975c1d2f5fd54831389d0fc3d4157bad&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150601%2F0017030521583969_b.jpg";
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  //点击 展示或隐藏图片
  showPic = () => {
    let { isShow } = this.state;
    this.setState({
      isShow: !isShow
    });
  };
  render() {
    return (
      <div  className="my_modul">
        <div onClick={this.showPic}>点击我吧！</div>
        {this.state.isShow ? (
          <img src={imgSrc} className="my_pic" style={{ width: "40%" }} alt="" />
        ) : (
          ""
        )}
      </div>
    );
  }
}
