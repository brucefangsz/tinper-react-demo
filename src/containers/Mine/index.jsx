import React, { Component } from "react";
import { Navs } from "containers";
import axios from "axios";
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
        {user.map(item => {
          return (
            <li>
              {`${item.id}.
              ${item.name}`}
            </li>
          );
        })}
        我的页面
        <Navs />
      </div>
    );
  }
}
