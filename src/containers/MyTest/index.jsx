import React, { Component } from "react";
import { Navs } from "components";
import img from "assets/images/tinpertest.png";
import "./index.less";
import { Switch } from "tinper-bee";
export default class MyTest extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    };
  }
  onChange = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };
  render() {
    let { isShow } = this.state;
    return (
      <div>
        <Navs />
        <div className="test_modul animated bounceInLeft">
          <div className="swith_modul">
            <Switch
              size="lg"
              checked={isShow}
              onChange={this.onChange}
              checkedChildren={"显示"}
              unCheckedChildren={"隐藏"}
            />
          </div>
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
