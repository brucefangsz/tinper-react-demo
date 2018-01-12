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

首先看到的是看到mock文件夹，mock文件夹功能是 模拟本地数据请求，存放请求的数据。





```
├── LICENSE
├── README.md
├── mock
│   └── api
│       └── user
│           ├── get.json
│           ├── item.json
│           ├── myitem.json
│           ├── post.json
│           └── put.json
├── package.json
├── postcss.config.js
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── animate.min.css
│   │   └── images
│   │       ├── favicon.png
│   │       └── logo.png
│   ├── components
│   │   ├── MyComponent
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
│   │   ├── App
│   │   │   └── index.jsx
│   │   ├── Mine
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── Nav
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── index.js
│   ├── index.html
│   ├── index.js
│   ├── index.less
│   ├── route.jsx
│   └── static
│       └── js
│           └── demo.js
├── uba.config.js
└── uba.mock.js
```



mock 文件夹：

+ api文件夹
  + 内有user文件夹
    + get.json存放本地模拟数据；

node_modules ：

+ 文件存放项目所需的文件包；

src文件夹：

* assets文件
  * images 图片文件
* components 存放项目公用组件
  + Welcompen 文件夹单个公用组件
    + index.jsx 组件文件
    + index.less 公用组件样式
* containers 存放页面文件
  + App 文件存放页面文件
    + index.jsx 为页面逻辑代码
* static  存放静态文件
* index.html 存放主文件的 html容器代码
* index.js存放index的逻辑代码
* index.less 存放主要 公用的样式文件
* router.jsx 存放项目路由

其他文件：

* .babelrc 这个文件是用来设置转码的规则和插件;
* .gitignore 设置 git忽略提交文件或者文件类型。
* package.json 存放项目所用包和script命令
* uba.config.js 存放uba配置命令
* uba.mock.js 存放uba 本地模拟数据配置

