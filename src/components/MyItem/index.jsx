import React, { Component } from "react";
import { Con, Row, Col, Icon, Modal, Button } from "tinper-bee";
import axios from "axios";
import Inner from "./Inner";
import { AnimateArray } from "./data";
import classnames from "classnames";
import "./index.less";
import "assets/css/animate.min.css";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      showModal: false,
      type: "",
      isLikeShow: false,
      likeAT: "",
      likeHTML: "",
      delStyle: ""
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let self = this,
      url = this.props.url;
    axios.get(url).then(res => {
      self.setState({
        data: res.data.data
      });
    });
  };
  likeThis = (classN, IH) => {
    let self = this;
    this.setState(
      {
        isLikeShow: true,
        likeAT: classN,
        likeHTML: IH
      },
      () => {
        setTimeout(() => {
          self.setState({
            isLikeShow: false,
            likeAT: ""
          });
        }, 1000);
      }
    );
  };
  open = str => {
    console.log(str);
    this.setState({
      showModal: true,
      type: str
    });
  };
  close = () => {
    this.setState({
      showModal: false
    });
  };
  del = index => {
    let data = this.state.data;
    this.setState({
      data: data.splice(index + 1, 1)
    });
  };
  render() {
    let { data, delStyle } = this.state,
      { Animate, type } = this.props;

    return (
      <Row className={`item_modul animated ${Animate}`}>
        {this.state.isLikeShow ? (
          <div className={`tips_modul animated ${this.state.likeAT}`}>
            {this.state.likeHTML}
          </div>
        ) : (
          ""
        )}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>少侠住手，你已经点过了？</Modal.Title>
          </Modal.Header>

          <Modal.Body>没看已经点过{this.state.type}了吗？</Modal.Body>

          <Modal.Footer>
            <Button
              onClick={this.close}
              shape="border"
              style={{ marginRight: 50 }}
            >
              关闭
            </Button>
          </Modal.Footer>
        </Modal>
        {data.map((item, index) => {
          console.log(index);
          return (
            <Inner
              item={item}
              open={this.open}
              likeThis={this.likeThis}
              type={type}
              del={this.del}
              index={index}
              delStyle={delStyle}
            />
          );
        })}
      </Row>
    );
  }
}
