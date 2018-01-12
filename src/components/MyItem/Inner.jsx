import React, { Component } from "react";
import { Con, Row, Col, Icon, Modal, Button } from "tinper-bee";
import classnames from "classnames";
import { AnimateArray } from "./data";
import { OutAnimateArray } from "./data";
export default class Inner extends Component {
  constructor(props) {
    super(props);
    let a = this.props.item;
    this.state = {
      isGood: a.isGood,
      isBad: a.isBad,
      isLike: a.isLike,
      isGoodNum: a.isGoodNum,
      isBadNum: a.isBadNum,
      isLikeNum: a.isLikeNum
    };
  }
  componentWillReceiveProps(props) {}
  userSet = (type, e) => {
    let { isGood, isBad, isLike, isGoodNum, isBadNum, isLikeNum } = this.state,
      Anum = Math.ceil(Math.random() * 43),
      Atype = AnimateArray[Anum],
      outAt = OutAnimateArray[Anum];
    switch (type) {
      case "good":
        !isGood
          ? this.setState(
              {
                isGoodNum: (isGoodNum += 1),
                isGood: true
              },
              () => {
                this.props.likeThis(Atype, "💗");
              }
            )
          : this.setState(
              {
                isGoodNum: (isGoodNum -= 1),
                isGood: false
              },
              () => {
                this.props.likeThis(outAt, "👍");
              }
            );
        break;
      case "bad":
        !isBad
          ? this.setState(
              {
                isBadNum: (isBadNum += 1),
                isBad: true
              },
              () => {
                this.props.likeThis(Atype, "🎁");
              }
            )
          : this.props.open("送礼物");
        break;
      default:
        !isLike
          ? this.setState(
              {
                isLikeNum: (isLikeNum += 1),
                isLike: true
              },
              () => {
                this.props.likeThis(Atype, "✨");
              }
            )
          : this.props.open("收藏");
    }
  };
  call = () => {
    alert("110");
  };
  render() {
    let { item, type } = this.props;
    let { isGood, isBad, isLike, isGoodNum, isBadNum, isLikeNum } = this.state;
    return (
      <Col md={12} xs={12} sm={12} key={item.id} className="item_modul_inner">
        <div className="title">
          <div>
            <Col md={2} xs={2} sm={2} className="icon_modul">
              <img src={item.img} alt="" />
            </Col>
            <Col md={10} xs={10} sm={10}>
              <div className="itme_name">
                {" "}
                {item.name}
                {type == "Mine" ? (
                  <Button style={{ float: "right" }} onClick={this.call}>
                    删除
                  </Button>
                ) : (
                  <Button style={{ float: "right" }} onClick={this.call}>
                    举报
                  </Button>
                )}
              </div>
              <div className="item_date">2017年12月12号</div>
            </Col>
          </div>
          <Col md={12} xs={12} sm={12} className="item_con">
            {item.content}
          </Col>
          <Col md={12} xs={12} sm={12} className="edit_modul">
            <Icon
              type={classnames("heart-shape-outline ", {
                "uf-heart": isGood,
                "uf-heart-o": !isGood
              })}
              onClick={this.userSet.bind(this, "good")}
            >
              <span>{isGoodNum}</span>
            </Icon>
            <Icon
              type="gift-box uf-gift"
              onClick={this.userSet.bind(this, "bad")}
            >
              <span>{isBadNum}</span>
            </Icon>

            <Icon
              type={classnames("star-1", {
                "uf-star-o": !isLike,
                "uf-star": isLike
              })}
              onClick={this.userSet.bind(this, "like")}
            >
              <span>{isLikeNum}</span>
            </Icon>
          </Col>
        </div>
      </Col>
    );
  }
}
