# 快速入门

### 一、什么是tinper-uba

1、uba 是一款前端开发工具，它可以为您提供多种最佳实践，通过[uba-templates](https://github.com/uba-templates)仓库来进行更新维护，提供多种多样风格技术功能点来选择所需要的最佳实践模板。

### 二、tinper-uba安装

1、[tinper-uba](http://docs.tinper.org/uba/)安装 npm 包管理 npm install uba -g

2、查看uba 是否安装成功 uba -v 显示版本号

### 三、使用 tinper-uba 初始化项目

1、uba init 选择对应 项目进行初始化

```
Available official templates:
? Please select : (Use arrow keys)
❯ template-iuap-react-solution - Iuap React整体解决方案脚手架
  template-moli - template-moli
  template-react-multiple-pages - React多页应用脚手架
  template-react-single-pages - React单页应用脚手架
  template-tinper-bee-admin - 采用tinper-bee组件库所构建的管理系统
```

###四、项目文件

1、现在我们以 template-react-single-pages - React单页应用脚手架 为例来看看如何快速启动 打包一个react项目。

2、uba init 之后 选择 template-react-single-pages - React单页应用脚手架 回车，

```
? boilerplate name : 此处输入项目名称
```

出现等待提示

```
Downloading template-react-single-pages please wait.
```

再次提示 是否安装 node_modules包,如果想使用npm 直接下载项目所需要的包，直接Y回车即可。

```
? Automatically install NPM dependent packages? (Y/n)
```

等待下载完毕查看文件夹内文件

```
  LICENSE           package.json      uba.mock.js
..                README.md         postcss.config.js
.babelrc          mock              src
.gitignore        node_modules      uba.config.js
```

3、启动项目->npm run dev 等待 项目启动会自动打开浏览器看到效果，此处注意端口占用。

```
npm run dev
```

![builds](/Users/brucefang/Downloads/tinper-react框架/Introduction/img/builds.png)

我们看到项目已经启动并且在浏览器自动打开。

4、文件夹 详解：

![file](/Users/brucefang/Downloads/tinper-react框架/Introduction-介绍/img/file.png)

文件夹以及文件介绍：

```
├── LICENSE
├── README.md
├── mock 				本地数据模拟文件夹
│   └── api				
│       └── user
│           ├── get.json 存放本地模拟数据
│           ├── item.json
│           ├── myitem.json
│           ├── post.json
│           └── put.json
├── package.json
├── postcss.config.js
├── src
│   ├── assets 			图片字体等文件夹
│   │   ├── css
│   │   │   └── animate.min.css 动画库
│   │   └── images   			图片文件夹
│   │       ├── favicon.png   	图片文件
│   │       └── logo.png
│   ├── components				自定义组件文件夹
│   │   ├── MyComponent			自定义组件
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── MyItem
│   │   │   ├── Inner.jsx
│   │   │   ├── data.js
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── Welcome
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── index.js
│   ├── containers
│   │   ├── App					页面
│   │   │   └── index.jsx
│   │   ├── Mine
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── Nav
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── index.js
│   ├── index.html
│   ├── index.js				总入口
│   ├── index.less				页面样式
│   ├── route.jsx				路由配置
│   └── static
│       └── js
│           └── demo.js
├── uba.config.js				项目配置文件
└── uba.mock.js					本地数据模拟配置文件
```
