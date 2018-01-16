import React, { Component } from "react";
import { Con, Row, Col, Icon, Modal, Button } from "tinper-bee";
import axios from "axios";
import Inner from "./Inner";
import { AnimateArray } from "./data";
import classnames from "classnames";
import "./index.less";
import { setTimeout } from "timers";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      showModal: false,
      type: "",
      isLikeShow: false,
      likeAT: "",
      likeHTML: ""
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let self = this,
      url = self.props.url;
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
    let newData = this.state.data,
      self = this;
    // if (newData.length <= 1) {
    //   alert('留一条吧')
    // } else {
    newData.splice(index, 1);
    this.setState({
      data: newData
    });
    // }
  };
  render() {
    let { data } = this.state,
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
          <Modal.Body>已经点过{this.state.type}了!!</Modal.Body>
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

        {data.length ? (
          data.map((item, index) => {
            return (
              <Inner
                item={item}
                open={this.open}
                likeThis={this.likeThis}
                type={type}
                del={this.del}
                index={index}
              />
            );
          })
        ) : (
          <div className="defaultItem">
            <img src="http://p3.pstatp.com/thumb/3a1e001b168600a17ea7" alt="" />
            <div>空空如也</div>
          </div>
        )}
      </Row>
    );
  }
}
