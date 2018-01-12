import { Component } from "react";
import { Navbar, FormControl, Menu, Badge, Icon, Breadcrumb } from "tinper-bee";
import { Navs } from "containers";
import { Item } from "components";
export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navs />
        <Item url="/Item/Get" type="Index" Animate="bounceInLeft"/>
      </div>
    );
  }
}
