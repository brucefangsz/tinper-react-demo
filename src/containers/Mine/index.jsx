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
        <div className="main_modul animated lightSpeedIn">
          <div className="item_icon">
            {user.length ? (
              <div>
                <img src={user[0].img} className="icon" alt="" />
                <div className="text">{user[0].text}</div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Item url="/MyItem/Get" type="Mine" Animate='lightSpeedIn' />
        </div>
      </div>
    );
  }
}
