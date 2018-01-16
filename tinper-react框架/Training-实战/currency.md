# 实战开发-币种

### 币种开发效果

![currency-iloveimg-resized](/Users/brucefang/work_hongyan/yonyou/tinper-react-demo/tinper-react框架/Training-实战/img/currency-iloveimg-resized.gif)

通过我们tinper-bee 来实现一个币种表格的增加编著删除等功能，下面我们开始从主文件开始讲解实现的方式。

```
//文件引入不过多介绍
import React, { Component } from "react";
import { Link } from "mirrorx";
import axios from "axios";
import {Row,Col,Panel,Table,Select,Button, Modal,Form, FormControl,FormGroup,InputGroup,Icon,Input,Popconfirm, Animate, ControlLabel
} from "tinper-bee";
import "./index.css";
import { URL } from "components/util";
```

定义组件继承和state的值

```
  constructor(props) {
    super(props);
    // 定义表格表头
    changedPropertyNames: null;
    code: "test0";
    creationtime: null;
    creator: null;
    currdigit: "0";
    dr: 0;
    metaDefinedName: "currtype";
    modifiedtime: null;
    modifier: null;
    name: "测试0";
    namespace: "train";
    pk_currtype: "3316755e-0f32-4d26-8a98-2bf4fdb16196";
    status: 0;
    ts: null;
    this.columns = [
      { title: "币种", dataIndex: "name", key: "name" },
      { title: "编码", dataIndex: "code", key: "code" },
      { title: "精度", dataIndex: "currdigit", key: "currdigit" },
      { title: "状态", dataIndex: "status", key: "status" },
      {
        title: "删除",
        dataIndex: "operation",
        key: "operation",
        render: (text, record, index) => {
          return (
            <Popconfirm
              content="确认删除?"
              id="aa"
              onClose={this.onDelete(index)}
            >
              <Icon type="uf-del" />
            </Popconfirm>
          );
        }
      }
    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          name: "沉鱼",
          code: "1",
          currdigit: "18",
          pk_currtype: false,
          enablestatus: "96, 77, 89"
        },
    	...
      ],
      count: 4,
      showModal: false,
      refCbData: [],
      addOrChange: false,
      changeIndex: "",
      name: "",
      code: "",
      currdigit: "",
      enablestatus: "1",
      pk_currtype: false,
      dataLink: []
    };
    self = this;
  }
```

初始化数据获取接口数据

```
 componentDidMount() {
     this.initData();
  }
// 初始化数据
  initData = () => {
    axios.get(`${URL.host}${URL.project}currtype/list`).then(res => {
      if (res.data.success == "success") {
        let data = res.data.detailMsg.data.content.map((item, index) => {
          item.key = index;
          return item;
        });
        self.setState({
          dataSource: data
        });
      }
    });
  };
```

点击添加按钮

```
// 点击添加按钮清空组件状态
  handleAdd = () => {
    this.setState({
      name: "",
      code: "",
      currdigit: "",
      addOrChange: false,
      showModal: true
    });
  };
```

删除数据

```

onDelete = index => {
    return () => {
    修改本地state的值，
      const dataSource = [...this.state.dataSource];
      dataSource.splice(index, 1);
      this.setState({ dataSource });
    };
    并且传递给后台。
     axios.get(`${URL.host}${URL.project}currtype/del?id=1`).then(res => {
      if (res.data.success == "success") {
        let data = res.data.detailMsg.data.content.map((item, index) => {
          item.key = index;
          return item;
        });
        self.setState({
          dataSource: data
        });
      }
    });
  };
```



渲染组件利用tinper-bee组件库栅格布局，表格，模态框，输入组件，按钮组件等。

```
 return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>{addOrChange ? "修改" : "添加"}币种信息：</Modal.Title>
          </Modal.Header>
          <Row>
            <Modal.Body
              ref={c => {
                this.FormData = c;
              }}
              style={tac}
            >
              <Col md={2} xs={2} sm={2} style={lmt}>
                币种：
              </Col>
              <Col md={4} xs={4} sm={4}>
                <FormControl
                  type="text"
                  onChange={this.valueChange.bind(this, "name")}
                  value={data.name}
                  style={mt}
                />
              </Col>
              <Col md={2} xs={2} sm={2} style={lmt}>
                编码：
              </Col>
              <Col md={4} xs={4} sm={4}>
                <FormControl
                  type="text"
                  onChange={this.valueChange.bind(this, "code")}
                  value={data.code}
                  style={mt}
                />{" "}
              </Col>
              <Col md={2} xs={2} sm={2} style={lmt}>
                精度：
              </Col>
              <Col md={4} xs={4} sm={4}>
                <FormControl
                  type="text"
                  onChange={this.valueChange.bind(this, "currdigit")}
                  value={data.currdigit}
                  style={mt}
                />
              </Col>
            </Modal.Body>
          </Row>
          <Modal.Footer>
            <Button
              onClick={this.close}
              shape="border"
              style={{ marginRight: 50 }}
            >
              关闭
            </Button>
            <Button onClick={this.addMoreList} colors="primary">
              {addOrChange ? "修改" : "确认"}
            </Button>
          </Modal.Footer>
        </Modal>
        <Button
          className="editable-add-btn"
          colors="primary"
          className="a"
          onClick={this.handleAdd}
          style={{ margin: "15px" }}
        >
          添加
        </Button>
        <Table
          bordered
          data={dataSource}
          columns={columns}
          getBodyWrapper={this.getBodyWrapper}
          onRowClick={this.rowClick}
        />
      </div>
    );
```

