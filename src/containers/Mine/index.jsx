import React, { Component } from "react";
import { Navs } from "containers";
import axios from "axios";
import { Item } from "components";
import "./index.less";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let self = this;
    axios.get("/User/Get").then(res => {
      console.log(res);
      if (res.status == 200 && res.data.message == "success") {
        self.setState({
          user: res.data.data
        });
      }
    });
  };
  render() {
    let { user } = this.state;
    console.log(user);
    return (
      <div>
        <Navs />
        {user.map(item => {
          return (
            <li className="item_my">
              {`${item.id}.
              ${item.name}`}
              我的页面
            </li>
          );
        })}
        
      </div>
    );
  }
}
