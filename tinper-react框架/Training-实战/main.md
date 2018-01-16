# 实战开发-主子表

### 主子表

效果图：![main](/Users/brucefang/work_hongyan/yonyou/tinper-react-demo/tinper-react框架/Training-实战/img/main.png)

通过上图可以看出，主子表增加删除编辑以及搜索等功能，并且主表和子表关联性更强，需要请求不同的接口来实现此类表单。[线上主子表地址](http://bee.tinper.org/bee-table/)

主页渲染部分：

```
 {this.state.isAddData ? (
 ""
 ) : (
 <EditModul
 addData={this.addData}
 deleteData={this.deleteData}
 handleEdit={this.handleEdit}
 frozen={this.frozen}
 cancelFrozen={this.cancelFrozen}
 />
 )}
 <EditHandle isEdit={isEdit} cancelEdit={this.cancelEdit} />
 <AddModul
 isAddData={isAddData}
 cancelAdd={this.cancelAdd}
 addButton={this.addButton}
 />
<SearchModul isSearch={isSearch} />
<Table
style={{ width: "100%" }}
columns={tableColumns}
data={tableData}
onRowClick={this.rowclick}
title={currentData => <div>标题: 我是主表</div>}
/>
<Table
columns={columnsChild}
data={this.state.children_data}
title={currentData => <div>标题: 我是子表</div>}
/>
```

