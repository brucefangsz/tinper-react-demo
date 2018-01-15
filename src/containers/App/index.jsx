import { Component } from "react";
import { Navs } from "components";
import { Item } from "components";
export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navs />
        <Item url="/Item/Get" type="Index" Animate="zoomIn" />
      </div>
    );
  }
}
