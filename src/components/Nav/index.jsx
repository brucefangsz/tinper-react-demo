import React, { Component } from "react";
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
