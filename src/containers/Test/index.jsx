import React, { Component } from "react";
import { Link } from "react-router";
import './index.less';
export default  class Navs extends Component {
  render() {
    return (
      <div className="Navs">
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/Mine">我的页面</Link>
          </li>
        </ul>
      </div>
    );
  }
}
