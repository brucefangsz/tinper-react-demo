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
    axios.get("/MyItem/Get").then(res => {
      if (res.status == 200 && res.data.message == "success") {
        self.setState({
          user: res.data.data
        });
      }
    });
  };

  render() {
    let { user } = this.state;
    return (
      <div>
        <Navs />
        <div className="mine_modul animated lightSpeedIn">
          {user.length ? (
            <div className="mine_icon">
              <img src={user[0].img} className="icon" alt="" />
              <div className="text"> {user[0].text}</div>
            </div>
          ) : (
            ""
          )}

          <Item
            url="/MyItem/Get"
            type="Mine"
            Animate=""
          />
        </div>
      </div>
    );
  }
}
