# tinper-react 概述

## 初心

我们为什么要做这个整体解决方案。

- 第一点，现在前端生态很好，各种框架和类库层出不穷，质量和易用性也是参差不齐。对于每一个项目，复杂的前端选型过程带给我们沉重的负担。
- 第二点，当我们好不容易做好了技术选型，又要花很多时间来拼凑他们，并且需要沉淀很长时间，踩很多的坑，来得到一个比较好的实践。
- 第三点，现在前端工程日益复杂，目前主流的方案，都需要依赖于webpack或是其他工具来辅助开发。配置开发工程已经很需要耗时耗力了， 在上线时，还需要更深入的了解这些工具，来优化我们的工具配置和代码。

这些内容都耗费了我们大量的心力和时间。所以这里将我们在项目中的最佳实践，分享出来，做一个整体技术方案，介绍给大家。

## 概述

### 1、tinper-react整体介绍

tinper-react是基于react库及周边技术搭建的整体复杂应用解决方案。集成了react，redux，axios，react-router，webpack等开源技术。 并根据大量项目的实践，得出的一套最佳解决方案。帮助开发者快速搭建前端项目，又快又好地开发前端业务。

###2、tinper-react有什么能力？

> 能力

![new](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/new.svg)完美解析ES6以及ES6+语法新特性

![css](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/css.svg)支持 LESS、SASS预处理器

![auto](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/auto.svg)自动化编译完自动浏览器预览

![huanjing](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/huanjing.svg)环境选择区分开发环境和生产环境

![update](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/update.svg)支持热更新，随时修改保存随时浏览器查看效果

![fenli](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/fenli.svg)分离业务功能和公共依赖的代码清晰明了

![CSS3](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/CSS3.svg)分离css样式文件方便调试

![flag](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/flag.svg)支持文件MD5戳 避免文件缓存

![pic](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/pic.svg)支持图片、图标、字体等资源编译减小项目体积

![code](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/code.svg)支持浏览器源码调试

![test](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/test.svg)可进行代码规则校验

![onekey](/Users/brucefang/Downloads/tinper-react框架/Summary-概述/img/onekey.svg)使用命令简单易用，一键启动，一键产出。

> 快速初始化前端react项目

* [tinper-uba](https://github.com/iuap-design/tinper-uba)快速初始化前端项目，`uba`采用微内核、多插件开发，它基于 `webpack` 封装的 `cli` 命令行工具，为了解决目前前端快速开发不足而打造， 提供一站式项目脚手架、最佳实践初始化、本地服务调试、数据模拟、远程代理、资源编译、静态产出、性能优化等功能。 `uba`是一个前端开发工具，可以提供多种开发场景。 核心开发人员会在远端最佳实践仓库 [uba-templates](https://github.com/uba-templates) 进行更新和维护，当然也可以根据所需的样式和功能提供不同的模板。 可以给使用开发者提供轻量、简单、便捷的开发体验，让开发者从复杂的配置中脱离出来，这些复杂而又不易初学者学习的内容， 就交给我`uba`来解决吧！

> 完整实用的UI库

* [tinper-bee](http://bee.tinper.org/)react 组件库，包含丰富的基础组件和应用组件，支持组件的灵活调用和扩展，助力快速进行应用的组件化开发。tinper-bee 是基于 iuap design设计规范封装的 react 组件库，包含丰富的基础组件和应用组件， 支持组件的灵活调用和扩展，助力快速进行应用的组件化开发。并且我们提供适用于企业级应用的表单， 表格和grid组件，满足您大量数据的处理操作展示和复杂交互需求。

> 复杂项目数据管理

* [mirror数据管理框架](https://github.com/mirrorjs/mirror)一款简洁、高效、易上手的 React 框架。

  ​

### 3、适用于那些业务场景？

* 企业级的web应用开发
* 网站快速开发

### 4、如何学习？

* 本地搭建环境，利用tinper-uba初始化工程项目，根据工程提示代码构建简单案例。

### 5、需要具备哪些技术基础？

> 在使用tinper-react框架之前你需要具备哪些前端的基础知识或者需要学习哪些知识：

* HTML CSS JS 基础知识

> 了解知识

- [react](https://discountry.github.io/react/)基础知识以及语法。
- [react-router v4](http://reacttraining.cn/web/guides/quick-start)react-router路由使用方法。
- 以及获取后端接口数据的[axios](https://github.com/mzabriskie/axios)
- [es6+语法](http://es6.ruanyifeng.com/)  [推荐es6简书地址](https://www.jianshu.com/p/287e0bb867ae)